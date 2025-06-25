"use client";

import React, { useEffect, useState } from 'react';
import "@/app/globals.css"

const HolographicLoader = ({ duration = 4500 }: { duration?: number }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!showLoader) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-black overflow-hidden flex items-center justify-center">
            < div className="nebula" />
            <div className="grid-plane" />
            <div className="stars-container">
                <div className="star-layer" />
                <div className="star-layer" />
                <div className="star-layer" />
            </div>

            <div className="loader-container">
                <div className="hologram-platform" />
                <div className="platform-rings">
                    <div className="platform-ring" />
                    <div className="platform-ring" />
                    <div className="platform-ring" />
                </div>

                <div className="projection-beams">
                    <div className="beam" />
                    <div className="beam" />
                    <div className="beam" />
                    <div className="beam" />
                </div>

                <div className="holo-container">
                    <div className="holo-sphere">
                        <div className="holo-ring" />
                        <div className="holo-ring" />
                        <div className="holo-ring" />
                        <div className="holo-ring" />
                        <div className="holo-ring" />

                        <div className="holo-particles">
                            {[...Array(12)].map((_, i) => (
                                <div className="holo-particle" key={i} />
                            ))}
                        </div>
                    </div>

                    <div className="glitch-effect" />
                    <div className="lightning" />
                </div>

                <div className="code-lines">
                    <div className="code-line">
                        01000001 01010101 01010011 01000001 01000110 00101110 01000100 01000101 01010110
                    </div>
                    <div className="code-line">
                        const ausaf = new Developer("FullStack");
                    </div>
                    <div className="code-line">
                        ausaf.getSkill("Next.js", "Tailwind", "TypeScript", "Python");
                    </div>
                    <div className="code-line">
                        function deployPortfolio() {'{'} ausaf.render(); launch(); {'}'}
                    </div>
                    <div className="code-line">
                        01010011 01010100 01000001 01011001 00100000 01000011 01001111 01001110 01010011 01001001 01010011 01010100 01000101 01001110 01010100
                    </div>
                    <div className="code-line">
                        class QuantumUI {'{'} constructor() {'{'} this.owner = "Ausaf"; this.effects = "Holographic"; {'}'} {'}'}
                    </div>
                    <div className="code-line">
                        async function fetchProjects() {'{'} return await ausaf.load("projects.json"); {'}'}
                    </div>
                    <div className="code-line">
                        01000101 01001110 01000100 00100000 01001111 01000110 00100000 01001100 01001001 01001110 01000101
                    </div>
                </div>

                <div className="holo-numbers">
                    <div className="number" style={{ top: "40%", left: "30%", animationDelay: "0.5s" }}>0xA5</div>
                    <div className="number" style={{ top: "50%", left: "60%", animationDelay: "1.5s" }}>0x9F</div>
                    <div className="number" style={{ top: "60%", left: "40%", animationDelay: "2.5s" }}>0x1C</div>
                    <div className="number" style={{ top: "30%", left: "50%", animationDelay: "3.5s" }}>0xFA</div>
                    <div className="number" style={{ top: "70%", left: "20%", animationDelay: "4.5s" }}>0xB0</div>
                    <div className="number" style={{ top: "20%", left: "70%", animationDelay: "5.5s" }}>0x7E</div>
                </div>

                <div className="radial-indicators">
                    <div className="radial-indicator" />
                    <div className="radial-indicator" />
                    <div className="radial-indicator" />
                    <div className="radial-indicator" />
                </div>

                <div className="corner-decorations">
                    <div className="corner" />
                    <div className="corner" />
                    <div className="corner" />
                    <div className="corner" />
                </div>

                <div className="loading-text">Loading Ausaf OS — Initiating Dev Core...</div>
                <div className="progress-container">
                    <div className="progress-bar" />
                </div>
            </div>
        </div >
    );
};

export default HolographicLoader;