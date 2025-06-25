import { useRef, useState, useEffect, useCallback } from "react";
import Matter from "matter-js";

interface FallingTextProps {
    text?: string;
    highlightWords?: string[];
    highlightClass?: string;
    trigger?: "auto" | "scroll" | "click" | "hover";
    backgroundColor?: string;
    wireframes?: boolean;
    gravity?: number;
    mouseConstraintStiffness?: number;
    fontSize?: string;
    physics?: {
        restitution?: number;
        friction?: number;
        frictionAir?: number;
    };
    className?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
    text = "",
    highlightWords = [],
    highlightClass = "text-cyan-500 font-bold",
    trigger = "auto",
    backgroundColor = "transparent",
    wireframes = false,
    gravity = 1,
    mouseConstraintStiffness = 0.2,
    fontSize = "1rem",
    physics = {
        restitution: 0.8,
        friction: 0.2,
        frictionAir: 0.01
    },
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const canvasContainerRef = useRef<HTMLDivElement | null>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const [effectStarted, setEffectStarted] = useState(false);

    // Process text and apply highlights
    useEffect(() => {
        if (!textRef.current) return;

        const words = text.split(" ");
        const newHTML = words.map((word) => {
            const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
            return `<span class="inline-block mx-[2px] select-none ${isHighlighted ? "font-bold text-[#3b82f6]" : ""}">${word}</span>`;
        }).join(" ");

        textRef.current.innerHTML = newHTML;
    }, [text, highlightWords, highlightClass]);

    // Handle trigger conditions
    useEffect(() => {
        if (trigger === "auto") {
            setEffectStarted(true);
            return;
        }

        if (trigger === "scroll" && containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setEffectStarted(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [trigger]);

    // Initialize physics engine when effect starts
    useEffect(() => {
        if (!effectStarted) return;

        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

        if (!containerRef.current || !canvasContainerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;

        if (width <= 0 || height <= 0) return;

        // Create engine
        const engine = Engine.create({
            gravity: { x: 0, y: gravity }
        });
        engineRef.current = engine;

        // Store canvas container reference locally for cleanup
        const currentCanvasContainer = canvasContainerRef.current;

        // Set up renderer
        const render = Render.create({
            element: currentCanvasContainer,
            engine,
            options: {
                width,
                height,
                background: backgroundColor,
                wireframes,
            },
        });
        renderRef.current = render;

        // Create boundaries
        const boundaryOptions = {
            isStatic: true,
            render: { visible: false },
            collisionFilter: { group: -1 }
        };

        const padding = 25;
        const boundaries = [
            Bodies.rectangle(width / 2, height + padding, width, padding * 2, boundaryOptions),
            Bodies.rectangle(-padding, height / 2, padding * 2, height, boundaryOptions),
            Bodies.rectangle(width + padding, height / 2, padding * 2, height, boundaryOptions),
            Bodies.rectangle(width / 2, -padding, width, padding * 2, boundaryOptions)
        ];

        // Create word bodies
        if (!textRef.current) return;
        const wordSpans = textRef.current.querySelectorAll("span");
        const wordBodies = [...wordSpans].map((elem) => {
            const rect = elem.getBoundingClientRect();
            const x = rect.left - containerRect.left + rect.width / 2;
            const y = rect.top - containerRect.top + rect.height / 2;

            return {
                elem,
                body: Bodies.rectangle(x, y, rect.width, rect.height, {
                    chamfer: { radius: 5 },
                    render: { visible: false },
                    restitution: physics.restitution,
                    friction: physics.friction,
                    frictionAir: physics.frictionAir
                })
            };
        });

        // Set initial positions
        wordBodies.forEach(({ elem, body }) => {
            elem.style.position = "absolute";
            elem.style.pointerEvents = "none";
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 5,
                y: 0,
            });
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
        });

        // Mouse interaction
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: mouseConstraintStiffness,
                render: { visible: false },
            },
        });
        render.mouse = mouse;

        // Add everything to world
        World.add(engine.world, [
            ...boundaries,
            mouseConstraint,
            ...wordBodies.map(({ body }) => body),
        ]);

        // Start engine
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);
        Render.run(render);

        // Animation loop
        const updatePositions = () => {
            wordBodies.forEach(({ body, elem }) => {
                elem.style.left = `${body.position.x}px`;
                elem.style.top = `${body.position.y}px`;
                elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
            });
            animationFrameRef.current = requestAnimationFrame(updatePositions);
        };
        updatePositions();

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (runnerRef.current) {
                Runner.stop(runnerRef.current);
            }
            if (renderRef.current) {
                Render.stop(renderRef.current);
                if (renderRef.current.canvas && currentCanvasContainer) {
                    currentCanvasContainer.removeChild(renderRef.current.canvas);
                }
            }
            if (engineRef.current) {
                World.clear(engineRef.current.world, false);
                Engine.clear(engineRef.current);
            }
        };
    }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness, physics]);

    const handleTrigger = useCallback(() => {
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    }, [effectStarted, trigger]);

    return (
        <div
            ref={containerRef}
            className={`relative z-[1] w-full h-full ${trigger === "click" ? "cursor-pointer" : ""
                } text-center overflow-hidden ${className}`}
            onClick={trigger === "click" ? handleTrigger : undefined}
            onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
        >
            <div
                ref={textRef}
                className="inline-block"
                style={{
                    fontSize,
                    lineHeight: 1.4,
                }}
            />
            <div
                ref={canvasContainerRef}
                className="absolute top-0 left-0 z-0 w-full h-full"
            />
        </div>
    );
};

export default FallingText;