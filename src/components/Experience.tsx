"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../components/constants";
import { RevealWrapper } from "next-reveal";
import ShinyText from "./ShinyText";

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
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
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
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p className="text-gray-400 text-[16px] font-semibold m-0">
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-gray-200 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience: React.FC = () => {
    return (
        <>
            {/* Section Heading */}
            <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="30px"
                reset
            >
                <div className="text-center my-12">
                    <span className="px-4 py-2 glass rounded-full text-sm">
                        <ShinyText text="What I have done so far" disabled={false} speed={3} />
                    </span>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
                        Journey  <span className="text-gradient">Experience</span>
                    </h2>
                </div>
            </RevealWrapper>

            {/* Timeline */}
            <RevealWrapper
                origin="bottom"
                delay={300}
                duration={1200}
                distance="40px"
                reset
            >
                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience as ExperiencePoint}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </RevealWrapper>
        </>
    );
};

export default Experience;
