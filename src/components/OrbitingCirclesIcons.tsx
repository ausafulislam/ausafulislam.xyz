import Image from "next/image";
import React from "react";
import { FaGithub, FaWhatsapp, FaGoogleDrive, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

export default function OrbitingCirclesIcons() {
    return (
        <div className="relative flex h-[400px] w-[400px] items-center justify-center">
            {/* Center Element */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gray-700 text-white overflow-hidden">
                <Image
                    src="/images/logo.png" 
                    alt="Ausaf Ul Islam"
                    fill
                    sizes="auto"
                    className="object-cover rounded-full"
                    priority
                />
            </div>
            {/* Orbit Paths */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full border border-dashed border-white/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full border border-dashed border-white/20"></div>
            </div>

            {/* Inner Orbit Icons */}
            {[
                { icon: <FaHtml5 className="text-2xl text-orange-500" />, delay: "0s" },
                { icon: <FaCss3Alt className="text-2xl text-blue-400" />, delay: "-2.5s" },
                { icon: <SiTailwindcss className="text-2xl text-cyan-400" />, delay: "-5s" },
                { icon: <SiJavascript className="text-2xl text-yellow-300" />, delay: "-7.5s" },
            ].map((item, idx) => (
                <div
                    key={idx}
                    className="orbit absolute flex h-8 w-8 items-center justify-center text-white shadow-md"
                    style={{
                        "--orbit-radius": "80px",
                        "--orbit-duration": "10s",
                        "--orbit-delay": item.delay,
                    } as React.CSSProperties}
                >
                    {item.icon}
                </div>
            ))}

            {/* Outer Orbit Icons */}
            {[
                { icon: <FaReact className="text-2xl text-cyan-300" />, delay: "0s" },
                { icon: <FaNodeJs className="text-2xl text-green-500" />, delay: "-5s" },
                { icon: <SiTypescript className="text-2xl text-blue-500" />, delay: "-10s" },
                { icon: <FaPython className="text-2xl text-yellow-400" />, delay: "-15s" },
                { icon: <FaGitAlt className="text-2xl text-orange-400" />, delay: "-20s" },
            ].map((item, idx) => (
                <div
                    key={idx}
                    className="orbit-reverse absolute flex  items-center justify-center"
                    style={{
                        "--orbit-radius": "160px",
                        "--orbit-duration": "18s",
                        "--orbit-delay": item.delay,
                    } as React.CSSProperties}
                >
                    {item.icon}
                </div>
            ))}
        </div>
    );
}