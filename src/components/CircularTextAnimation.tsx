"use client";
import React, { useCallback, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
    className?: string;
    radius?: number;
    fontSize?: string;
}

const CircularTextAnimation: React.FC<CircularTextProps> = ({
    text,
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
    radius = 50,
    fontSize = "1rem",
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();
    const rotation = useMotionValue(0);

    const animateRotation = useCallback(
        (duration: number) => {
            const start = rotation.get();
            controls.start({
                rotate: [start, start + 360],
                transition: {
                    ease: "linear",
                    duration,
                    repeat: Infinity,
                },
            });
        },
        [controls, rotation]
    );

    useEffect(() => {
        animateRotation(spinDuration);
    }, [spinDuration, text, animateRotation]);

    const handleHoverStart = () => {
        const start = rotation.get();
        let newDuration = spinDuration;

        switch (onHover) {
            case "slowDown":
                newDuration *= 2;
                break;
            case "speedUp":
                newDuration /= 4;
                break;
            case "goBonkers":
                newDuration /= 20;
                break;
            case "pause":
                controls.stop();
                return;
        }

        animateRotation(newDuration);
    };

    const handleHoverEnd = () => {
        animateRotation(spinDuration);
    };

    return (
        <motion.div
            className={`relative ${className}`}
            style={{
                width: radius * 2,
                height: radius * 2,
                rotate: rotation,
            }}
            animate={controls}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            {letters.map((letter, i) => {
                const angle = (i * 360) / letters.length;
                const radian = (angle * Math.PI) / 180;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                    <span
                        key={i}
                        className="absolute origin-center"
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                            fontSize,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </motion.div>
    );
};

export default CircularTextAnimation;