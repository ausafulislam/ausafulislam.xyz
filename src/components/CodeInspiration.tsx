"use client";

import FallingText from "./FallingText";

export default function CodeInspiration() {
    return (
        <section className="w-full py-20 px-4 sm:px-8 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-extrabold text-4xl sm:text-5xl md:text-6xl mb-12">
                    Code <span className="text-gradient ">Inspiration</span>
                </h2>

                <div
                    className="relative group w-full max-w-6xl mx-auto p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm"
                    style={{
                        borderBottom: '4px solid transparent',
                        backgroundImage: 'linear-gradient(to right, #1a1a1a, #1a1a1a), linear-gradient(to right, #3b82f6, #8b5cf6)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    }}
                >
                    {/* Subtle background quote pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
                    </div>

                    <p className="text-center text-lg mb-8 text-gray-400 font-light italic">
                        Words that shape great developers:
                    </p>

                    <div className="relative z-10">
                        <FallingText
                            text={`"Good code is like a good story - it needs structure, elegance, and a touch of magic."`}
                            highlightWords={["code", "story", "structure", "elegance", "magic"]}
                            highlightClass="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-bold"
                            trigger="hover"
                            backgroundColor="transparent"
                            wireframes={false}
                            gravity={0.4}
                            fontSize="1.75rem"
                            mouseConstraintStiffness={0.7}
                            physics={{
                                restitution: 0.6,
                                friction: 0.05,
                                frictionAir: 0.01
                            }}
                            className="min-h-[200px] flex items-center justify-center"
                        />
                    </div>

                    {/* Author attribution */}
                    <p className="text-right mt-6 text-gray-500 text-sm">
                        – Inspired by Robert C. Martin
                    </p>
                </div>
            </div>
        </section>
    );
}