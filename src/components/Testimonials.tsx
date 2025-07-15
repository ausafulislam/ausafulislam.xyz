"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { styles } from "../hooks/style";
import { testimonials } from "./constants";
import ShinyText from "./ShinyText";
import ScrollReveal from "./ScrollReveal";

interface Testimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

interface FeedbackCardProps extends Testimonial {
    index: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <div className="flex items-center bg-gray-900/20 p-8 rounded-3xl flex-shrink-0 w-80 sm:w-96 scroll-snap-align-start backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
        <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} delayMultiplier={index * 0.1}>
            <p className="text-white font-extrabold text-5xl leading-none select-none">"</p>
            <div className="mt-2">
                <p className="text-white tracking-wide text-lg">{testimonial}</p>
                <div className="mt-6 flex justify-between items-center gap-3">
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <p className="text-white font-semibold text-base truncate">
                            <span className="text-blue-400">@</span> {name}
                        </p>
                        <p className="mt-1 text-gray-400 text-xs truncate">
                            {designation} of {company}
                        </p>
                    </div>
                    <Image
                        src={image}
                        alt={`feedback_by-${name}`}
                        width={50}
                        height={50}
                        className="rounded-full w-auto h-auto object-cover"
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                    />
                </div>
            </div>
        </ScrollReveal>
    </div>
);

const Testimonials: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const isHoveredRef = useRef(false);
    const [duplicated, setDuplicated] = useState<Testimonial[]>([]);

    useEffect(() => {
        setDuplicated([...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials]); // duplicate list for infinite effect
    }, []);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 2.5;

        const animateScroll = () => {
            if (isHoveredRef.current) {
                animationRef.current = requestAnimationFrame(animateScroll);
                return;
            }

            scrollAmount += scrollSpeed;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft = scrollAmount;
            }
            animationRef.current = requestAnimationFrame(animateScroll);
        };

        animationRef.current = requestAnimationFrame(animateScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [duplicated]);

    const handleHover = () => {
        isHoveredRef.current = true;
    };

    const handleHoverEnd = () => {
        isHoveredRef.current = false;
    };

    return (
        <section className="mt-16 relative">

            <div className={`${styles.padding} min-h-[280px] relative z-20`}>
                <ScrollReveal direction="up">
                    <div className="animate-fadeIn max-w-4xl mx-auto text-center">
                        <div>
                            <span className="px-4 py-2 glass rounded-full text-sm inline-block">
                                <ShinyText text="What others say's" disabled={false} speed={3} />
                            </span>
                        </div>
                        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
                            Our <span className="text-gradient">Testimonials.</span>
                        </h2>
                    </div>
                </ScrollReveal>
            </div>

            <div className="relative z-20 ">
                {/* Shadow overlays */}
                <div className="absolute -top-12 bottom-4 left-0 w-10 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
                <div className="absolute -top-12 bottom-4 right-0 w-10 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />
                <div
                    ref={scrollContainerRef}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverEnd}
                    className={`-mt-20 pb-16 ${styles.paddingX} 
            flex space-x-6 overflow-x-hidden
            scrollbar-none sm:scrollbar-thin sm:scrollbar-thumb-gray-600 sm:scrollbar-track-gray-800
            sm:space-x-8 relative`}
                >
                    {duplicated.map((testimonial, index) => (
                        <FeedbackCard key={`${testimonial.name}-${index}`} index={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;