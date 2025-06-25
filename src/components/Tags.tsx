"use client";
import React, { useEffect, useRef, useState } from "react";

const TAGS = [
    "#ReactJS", "#NextJS", "#TypeScript", "#JavaScript", "#NodeJS", "#WebDev",
    "#Frontend", "#FullStack", "#UIUX", "#Tailwind", "#CSS3", "#HTML5",
    "#Python", "#AI", "#AgenticAI", "#ModernWeb", "#Responsive", "#WebPerf",
    "#Portfolio", "#CleanCode"
];

const AnimatedTags = () => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // ✅ Stable refs using useRef
    const rowRefs = useRef([
        React.createRef<HTMLDivElement>(),
        React.createRef<HTMLDivElement>(),
        React.createRef<HTMLDivElement>(),
        React.createRef<HTMLDivElement>()
    ]);

    useEffect(() => {
        setIsMounted(true);
        if (!isMounted) return;

        const setupMarquee = (rowRef: React.RefObject<HTMLDivElement>, direction: number) => {
            const row = rowRef.current;
            if (!row) return;

            const content = row.innerHTML;
            row.innerHTML = content + content; // Duplicate once for seamless loop

            const duration = (row.scrollWidth / 100) * 1.5; // Adjust speed here
            row.style.animation = `marquee ${duration}s linear infinite ${direction > 0 ? "reverse" : ""}`;
        };

        // Add global marquee keyframe once
        const style = document.createElement("style");
        style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
        document.head.appendChild(style);

        setupMarquee(rowRefs.current[0], -1);
        setupMarquee(rowRefs.current[1], 1);
        setupMarquee(rowRefs.current[2], -1);
        setupMarquee(rowRefs.current[3], 1);

        return () => {
            document.head.removeChild(style);
        };
    }, [isMounted]); // ✅ `rowRefs` removed from dependency list (no longer needed)

    const renderTags = (tags: string[], rowIndex: number) => (
        <div
            ref={rowRefs.current[rowIndex]} // ✅ use `.current`
            className="flex whitespace-nowrap w-max animate-marquee-row mb-6"
        >
            {tags.map((tag, i) => (
                <div
                    key={`${rowIndex}-${i}`}
                    className="glass mx-2 px-4 py-2 text-xl"
                >
                    {tag}
                </div>
            ))}
        </div>
    );

    if (!isMounted) {
        return (
            <section className="relative py-12 overflow-hidden">
                <div className="flex mb-6 whitespace-nowrap opacity-0">
                    {TAGS.map((tag, i) => (
                        <div key={`skeleton-${i}`} className="glass mx-2 p-4">
                            {tag}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section
            ref={containerRef}
            className="relative py-12 overflow-hidden text-gray-400"
        >
            {/* Shadow overlays */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="relative">
                {renderTags(TAGS, 0)}
                {renderTags(TAGS, 1)}
                {renderTags(TAGS, 2)}
                {renderTags(TAGS, 3)}
            </div>
        </section>
    );
};

export default AnimatedTags;
