"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
    children: ReactNode;
    index?: number;
    direction?: Direction;
    delayMultiplier?: number;
    distance?: number;
    duration?: number;
    viewportAmount?: number;
    className?: string; // Add this line
}

const createVariants = (
    direction: Direction,
    distance: number,
    duration: number
): Variants => ({
    hidden: {
        opacity: 0,
        ...(direction === "up" && { y: distance }),
        ...(direction === "down" && { y: -distance }),
        ...(direction === "left" && { x: -distance }),
        ...(direction === "right" && { x: distance }),
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration,
            ease: "easeOut",
            delay,
        },
    }),
});

export default function ScrollReveal({
    children,
    index = 0,
    direction = "up",
    delayMultiplier = 0.1,
    distance = 30,
    duration = 0.6,
    viewportAmount = 0.3,
}: ScrollRevealProps) {
    const variants = createVariants(direction, distance, duration);

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={index * delayMultiplier}
            viewport={{ once: true, amount: viewportAmount }}
        >
            {children}
        </motion.div>
    );
}