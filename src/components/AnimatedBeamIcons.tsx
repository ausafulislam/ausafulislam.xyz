"use client"
import type React from "react"
import { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { FaUser, FaReact, FaNodeJs, FaPython, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa"
import { LuBrainCircuit } from "react-icons/lu"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; color?: string }>(
    ({ className, children, color = "bg-white/10" }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "z-10 flex items-center justify-center rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/40",
                    color,
                    className,
                )}
            >
                {children}
            </div>
        )
    },
)
Circle.displayName = "Circle"

export function AnimatedBeamIcons({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Section 1 - AI/Brain (1 icon)
    const aiRef = useRef<HTMLDivElement>(null)

    // Section 2 - User & Analytics (2 icons)
    const userRef = useRef<HTMLDivElement>(null)
    const analyticsRef = useRef<HTMLDivElement>(null)

    // Section 3 - Frontend Technologies (4 icons)
    const reactRef = useRef<HTMLDivElement>(null)
    const nextRef = useRef<HTMLDivElement>(null)
    const typescriptRef = useRef<HTMLDivElement>(null)
    const tailwindRef = useRef<HTMLDivElement>(null)

    // Section 4 - Backend & Tools (5 icons)
    const nodeRef = useRef<HTMLDivElement>(null)
    const pythonRef = useRef<HTMLDivElement>(null)
    const dockerRef = useRef<HTMLDivElement>(null)
    const mongoRef = useRef<HTMLDivElement>(null)
    const gitRef = useRef<HTMLDivElement>(null)

    return (
        <div
            className={cn(
                "relative flex h-[250px] sm:h-[300px] lg:h-[350px] w-full items-center justify-center overflow-hidden rounded-xl glass p-4 sm:p-6",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex w-full max-w-6xl items-center justify-between gap-4 sm:gap-8 lg:gap-12">
                {/* Section 1: AI/Brain (1 icon) - Centered vertically */}
                <div className="flex flex-col items-center justify-center h-full">
                    <Circle
                        ref={aiRef}
                        className="size-10 sm:size-12 lg:size-14 p-2 sm:p-3"
                    >
                        <LuBrainCircuit className="text-sm sm:text-base lg:text-lg text-purple-300" />
                    </Circle>
                </div>

                {/* Section 2: User & Analytics (2 icons) - Vertically aligned */}
                <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6 lg:gap-8">
                    <Circle
                        ref={userRef}
                        className="size-10 sm:size-12 lg:size-14 p-2"
                    >
                        <FaUser className="text-sm sm:text-base lg:text-lg text-blue-300" />
                    </Circle>
                    <Circle
                        ref={analyticsRef}
                        className="size-10 sm:size-12 lg:size-14 p-2"
                    >
                        <FaDatabase className="text-sm sm:text-base lg:text-lg text-green-300" />
                    </Circle>
                </div>

                {/* Section 3: Frontend Technologies (4 icons) - Vertically aligned */}
                <div className="flex flex-col items-center justify-center h-full gap-2 sm:gap-3 lg:gap-4">
                    <Circle
                        ref={reactRef}
                        className="size-10 sm:size-12 lg:size-14 p-1.5 sm:p-2"
                    >
                        <FaReact className="text-sm sm:text-base lg:text-lg text-cyan-300" />
                    </Circle>
                    <Circle
                        ref={nextRef}
                        className="size-10 sm:size-12 lg:size-14 p-1.5 sm:p-2"
                    >
                        <SiNextdotjs className="text-sm sm:text-base lg:text-lg text-gray-300" />
                    </Circle>
                    <Circle
                        ref={typescriptRef}
                        className="size-10 sm:size-12 lg:size-14 p-1.5 sm:p-2"
                    >
                        <SiTypescript className="text-sm sm:text-base lg:text-lg text-blue-400" />
                    </Circle>
                    <Circle
                        ref={tailwindRef}
                        className="size-10 sm:size-12 lg:size-14 p-1.5 sm:p-2"
                    >
                        <SiTailwindcss className="text-sm sm:text-base lg:text-lg text-teal-300" />
                    </Circle>
                </div>

                {/* Section 4: Backend & Tools (5 icons) - Vertically aligned */}
                <div className="flex flex-col items-center justify-center h-full gap-1.5 sm:gap-2 lg:gap-3">
                    <Circle
                        ref={nodeRef}
                        className="size-10 sm:size-12 lg:size-14 p-1 sm:p-1.5"                    >
                        <FaNodeJs className="text-sm sm:text-base lg:text-lg text-green-400" />
                    </Circle>
                    <Circle
                        ref={pythonRef}
                        className="size-10 sm:size-12 lg:size-14 p-1 sm:p-1.5"
                    >
                        <FaPython className="text-sm sm:text-base lg:text-lg text-yellow-400" />
                    </Circle>
                    <Circle
                        ref={dockerRef}
                        className="size-10 sm:size-12 lg:size-14 p-1 sm:p-1.5"
                    >
                        <FaDocker className="text-sm sm:text-base lg:text-lg text-blue-400" />
                    </Circle>
                    <Circle
                        ref={mongoRef}
                        className="size-10 sm:size-12 lg:size-14 p-1 sm:p-1.5"
                    >
                        <SiMongodb className="text-sm sm:text-base lg:text-lg text-green-400" />
                    </Circle>
                    <Circle
                        ref={gitRef}
                        className="size-10 sm:size-12 lg:size-14 p-1 sm:p-1.5"
                    >
                        <FaGitAlt className="text-sm sm:text-base lg:text-lg text-orange-400" />
                    </Circle>
                </div>
            </div>

            {/* Animated Beams - Section 4 to Section 3 */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={nodeRef}
                toRef={reactRef}
                duration={3}
                gradientStartColor="#10b981"
                gradientStopColor="#06b6d4"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={pythonRef}
                toRef={nextRef}
                duration={3}
                gradientStartColor="#f59e0b"
                gradientStopColor="#8b5cf6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={dockerRef}
                toRef={typescriptRef}
                duration={3}
                gradientStartColor="#3b82f6"
                gradientStopColor="#06b6d4"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={mongoRef}
                toRef={tailwindRef}
                duration={3}
                gradientStartColor="#10b981"
                gradientStopColor="#14b8a6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={gitRef}
                toRef={reactRef}
                duration={3}
                gradientStartColor="#f97316"
                gradientStopColor="#ef4444"
            />

            {/* Animated Beams - Section 3 to Section 2 */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={reactRef}
                toRef={userRef}
                duration={3}
                className="opacity-70"
                gradientStartColor="#06b6d4"
                gradientStopColor="#3b82f6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={nextRef}
                toRef={userRef}
                duration={3}
                className="opacity-70"
                gradientStartColor="#6b7280"
                gradientStopColor="#3b82f6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={typescriptRef}
                toRef={analyticsRef}
                duration={3}
                className="opacity-70"
                gradientStartColor="#3b82f6"
                gradientStopColor="#10b981"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={tailwindRef}
                toRef={analyticsRef}
                duration={3}
                className="opacity-70"
                gradientStartColor="#14b8a6"
                gradientStopColor="#10b981"
            />

            {/* Animated Beams - Section 2 to Section 1 */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={userRef}
                toRef={aiRef}
                duration={3}
                className="opacity-80"
                gradientStartColor="#3b82f6"
                gradientStopColor="#8b5cf6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={analyticsRef}
                toRef={aiRef}
                duration={3}
                className="opacity-80"
                gradientStartColor="#10b981"
                gradientStopColor="#ec4899"
            />
        </div>
    )
}
