"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill
} from "react-icons/ri";
import TerminalTypingEffect from "./InfiniteTypingEffect";
import CircularTextAnimation from "./CircularTextAnimation";
import ShinyText from "./ShinyText";
import TextFocus from "./TextFocus";
import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 pt-[100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="mt-10 md:mt-2">
            <ScrollReveal direction="up">
              <span className="px-4 py-2 glass rounded-full text-sm">
                <ShinyText text="Welcome to my world !" disabled={false} speed={3} />
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMultiplier={0.1}>
              <div className="font-bold mt-6 w-full max-w-4xl mx-auto px-2">
                <TextFocus
                  sentence="Modern Full Stack & AI Developer"
                  manualMode={false}
                  blurAmount={10}
                  borderColor="#3b82f6"
                  animationDuration={1}
                  pauseBetweenAnimations={1}
                  alignment="left"
                  className="text-[2.5rem] font-bold text-left leading-none 
              xl:text-[3.5rem]
              2xl:text-[4rem]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMultiplier={0.2}>
              <p className="mt-6 text-lg opacity-80 max-w-lg">
                I'm Ausaf ul Islam, an enthusiastic developer with a focus on producing
                breathtaking online experiences that blend state-of-the-art technology
                with sophisticated design. I create impactful solutions from conception
                to implementation
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMultiplier={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#projects">
                  <AnimatedButton
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-3000"
                    containerClassName="h-14 w-auto"
                  >
                    <span>Explore Projects</span>
                    <RiArrowRightLine />
                  </AnimatedButton>
                </Link>
                <Link href="#contact">
                  <AnimatedButton
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                    containerClassName="h-14 w-auto"
                  >
                    <span>Let's Connect</span>
                  </AnimatedButton>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMultiplier={0.4}>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/ausafulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <RiGithubFill className="text-xl" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/ausafulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <RiLinkedinBoxFill className="text-xl" />
                  </Link>
                  <Link
                    href="https://x.com/ausafulislam_h"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <RiTwitterXFill className="text-xl" />
                  </Link>
                </div>
                <div className="h-10 w-px bg-gray-500/20"></div>
                <div className="relative flex items-center">
                  {/* Circular Animation Container */}
                  <div className="relative flex items-center justify-center">
                    <CircularTextAnimation
                      text="AUSAFULISLAM*DEVELOPER*"
                      radius={40}
                      fontSize="0.6rem"
                      className="absolute font-bold"
                    />
                    <div className="absolute z-10">
                      <Image
                        src="/images/logo.png"
                        alt="Profile Initial"
                        width={50}
                        height={50}
                        className="w-20 h-20 object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Project Stats - Responsive Text */}
                  <div className="ml-3 sm:ml-4">
                    <p className="text-sm sm:text-base font-medium">15+ Projects Completed</p>
                    <p className="text-xs sm:text-sm opacity-70">100% Satisfaction</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Typing Canvas */}
          <ScrollReveal direction="left" delayMultiplier={0.2}>
            <div className="w-full h-[500px]">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                <TerminalTypingEffect />
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal direction="up" delayMultiplier={0.5}>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 sm:w-8 sm:h-14 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}