"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, Rocket, Home, Search } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

const NotFound = () => {
    const router = useRouter();

    // Floating particles effect
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement("div");
            particle.className = "absolute rounded-full bg-white/10";
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
            document.querySelector(".particle-container")?.appendChild(particle);

            const duration = Math.random() * 20 + 10;
            particle.animate(
                [
                    { transform: `translate(0, 0)` },
                    { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }
                ],
                {
                    duration: duration * 1000,
                    iterations: Infinity,
                    direction: "alternate",
                    easing: "ease-in-out"
                }
            );
        };

        for (let i = 0; i < 30; i++) {
            createParticle();
        }

        return () => {
            document.querySelectorAll(".particle-container div").forEach(el => el.remove());
        };
    }, []);



    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white px-6 py-12 overflow-hidden relative">
            {/* Background particles */}
            <div className="particle-container absolute inset-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-lg border text-center border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl w-full relative overflow-hidden"
            >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 border-2 border-transparent border-t-cyan-500/30 border-r-cyan-500/30 animate-spin-slow" style={{ animationDuration: '15s' }} />
                    <div className="absolute inset-0 border-2 border-transparent border-b-purple-500/30 border-l-purple-500/30 animate-spin-slow-reverse" style={{ animationDuration: '20s' }} />
                </div>

                <div className="flex justify-center mb-6">
                    <motion.div
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-full relative"
                    >
                        <AlertTriangle className="text-yellow-400 w-10 h-10" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border-2 border-yellow-400/30 pointer-events-none"
                        />
                    </motion.div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                    404 - Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 my-8 text-base md:text-lg leading-relaxed"
                >
                    Oops! The page you're looking for isn’t available right now.It might have been moved, deleted, or never existed.
                    Let’s get you back on track.
                </motion.p>

                <div className="flex  gap-4 justify-center">
                    <AnimatedButton
                        className="flex items-center gap-2"
                        containerClassName="h-14 w-auto"
                        onClick={() => router.push("/")}
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </AnimatedButton>

                    <AnimatedButton
                        className="flex items-center gap-2 "
                        containerClassName="h-14 w-auto"
                        onClick={() => router.back()}
                    >
                        <Rocket className="w-5 h-5" />
                        Go Back
                    </AnimatedButton>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-8 pt-6 border-t border-white/10"
                >
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search for something else..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse linear infinite;
        }
        .glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          transition: all 0.3s ease;
        }
        .glass:hover {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
        }
      `}</style>
        </main>
    );
};

export default NotFound;