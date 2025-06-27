"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../components/constants";
import ShinyText from "./ShinyText";
import ScrollReveal from "./ScrollReveal";

interface ExperiencePoint {
    title: string;
    company_name: string;
    date: string;
    icon: string | StaticImageData;
    iconBg: string;
    points: string[];
}

interface ExperienceCardProps {
    experience: ExperiencePoint;
    index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "transparent", // Transparent to allow glass effect
                padding: "0", // Remove default padding
                boxShadow: "none", // Remove default shadow
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 overflow-hidden">
                        <Image
                            src={experience.icon}
                            alt={experience.company_name}
                            fill
                            className="object-cover"
                            sizes="100%"
                        />
                    </div>
                </div>
            }
        >
            {/* Glass card wrapper */}
            <div className="glass-card-experience px-6 py-4 rounded-xl">
                <div>
                    <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                    <p className="text-gray-400 text-[16px] font-semibold m-0">
                        {experience.company_name}
                    </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, pointIndex) => (
                        <li
                            key={`experience-point-${pointIndex}`}
                            className="text-gray-200 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>

    );
};

const Experience: React.FC = () => {
    return (
        <>
            {/* Section Heading */}
            <ScrollReveal direction="up">
                <div className="text-center my-12">
                    <span className="px-4 py-2 glass rounded-full text-sm">
                        <ShinyText text="What I have done so far" disabled={false} speed={3} />
                    </span>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
                        Journey <span className="text-gradient">Experience</span>
                    </h2>
                </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience as ExperiencePoint}
                            index={index}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;