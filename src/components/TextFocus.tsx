import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
    className?: string;
    style?: React.CSSProperties;
    alignment?: "center" | "left" | "right";

}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

const TextFocus: React.FC<TextFocusProps> = ({
    sentence = "True Focus",
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
    className = "",
    alignment = "center",
}) => {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const [isFullFocus, setIsFullFocus] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const fullTextRef = useRef<HTMLDivElement | null>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const [focusRect, setFocusRect] = useState<FocusRect>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev < words.length - 1) {
                        return prev + 1;
                    } else {
                        setIsFullFocus(true);

                        // Delay, then reset to first word using requestAnimationFrame
                        setTimeout(() => {
                            setIsFullFocus(false);
                            requestAnimationFrame(() => {
                                setCurrentIndex(0);
                            });
                        }, (animationDuration + pauseBetweenAnimations) * 1000);

                        return prev;
                    }
                });
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (isFullFocus && fullTextRef.current && containerRef.current) {
            const parentRect = containerRef.current.getBoundingClientRect();
            const fullRect = fullTextRef.current.getBoundingClientRect();
            setFocusRect({
                x: fullRect.left - parentRect.left,
                y: fullRect.top - parentRect.top,
                width: fullRect.width,
                height: fullRect.height,
            });
            return;
        }

        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, isFullFocus, words.length]);

    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode && lastActiveIndex !== null) {
            setCurrentIndex(lastActiveIndex);
        }
    };

    return (
        <div
            className={`relative w-full ${className}`}
            ref={containerRef}
        >
            <div
                ref={fullTextRef}
                className={`flex gap-4 flex-wrap items-center 
        ${alignment === "center"
                        ? "justify-center text-center"
                        : alignment === "right"
                            ? "justify-end text-right"
                            : "justify-start text-left"
                    }`}
            >
                {words.map((word, index) => {
                    const isActive = index === currentIndex && !isFullFocus;

                    return (
                        <span
                            key={index}
                            ref={(el) => {
                                wordRefs.current[index] = el;
                            }}
                            className="relative font-black cursor-pointer"
                            style={{
                                filter: isFullFocus
                                    ? "blur(0px)"
                                    : isActive
                                        ? "blur(0px)"
                                        : `blur(${blurAmount}px)`,
                                transition: `filter ${animationDuration}s ease`,
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {word}
                        </span>
                    );
                })}
            </div>

            <motion.div
                className="absolute top-0 left-0 pointer-events-none box-border border-0"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: 1,
                }}
                transition={{
                    duration: animationDuration,
                }}
                style={{
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                } as React.CSSProperties}
            >
                {["top-[-10px] left-[-10px] border-r-0 border-b-0",
                    "top-[-10px] right-[-10px] border-l-0 border-b-0",
                    "bottom-[-10px] left-[-10px] border-r-0 border-t-0",
                    "bottom-[-10px] right-[-10px] border-l-0 border-t-0"
                ].map((position, i) => (
                    <span
                        key={i}
                        className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${position}`}
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    />
                ))}
            </motion.div>
        </div >
    );
};

export default TextFocus;
