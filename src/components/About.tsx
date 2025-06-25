"use client";

import Link from "next/link";
import Image from "next/image";
import { RiUserSearchLine } from "react-icons/ri";
import { RevealWrapper } from "next-reveal";
import Experience from "./Experience";
import ShinyText from "./ShinyText";
import { AnimatedButton } from "./AnimatedButton";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="About section with skills and experience"
    >
      <div className="max-w-7xl mx-auto">

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 ">

          {/* Profile Image */}
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="40px"
            reset
          >

            <div className="flex text-center justify-center">
              <div className="relative w-64 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-300 group">
                <Image
                  src="/images/profile-2.png"
                  alt="Ausaf ul Islam - Full Stack Developer"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </RevealWrapper>

          {/* About Text */}
          <RevealWrapper
            origin="right"
            delay={300}
            duration={1000}
            distance="40px"
            reset
          >
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <span className="px-4 py-2 glass rounded-full text-sm">
                <ShinyText text="About Me" disabled={false} speed={3} />
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
                My <span className="text-gradient">Experience</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-300">
                I'm Ausaf ul Islam, a passionate Full Stack Developer with over 1 years of experience
                building modern, scalable web applications. I specialize in creating seamless user
                experiences with clean, efficient code and innovative approaches to problem-solving.
              </p>
            </div>
          </RevealWrapper>
        </div>

        {/* Experience Timeline */}
        <RevealWrapper
          origin="bottom"
          delay={400}
          duration={1000}
          distance="30px"
          reset
        >
          <div className="mb-20">
            <Experience />
          </div>
        </RevealWrapper>

        {/* CTA Section */}
        <RevealWrapper
          origin="bottom"
          delay={500}
          duration={1000}
          distance="40px"
          reset
        >
          <div className="mt-16 p-6 sm:p-10 glass-card rounded-xl text-center">
            <div className="flex flex-col items-center">
              <RiUserSearchLine className="text-4xl sm:text-5xl text-yellow-400 mb-4 animate-pulse" />

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
                Available for Exciting Projects
              </h3>

              <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
                Looking for a results-driven developer who brings passion, precision, and performance to every project? I'm open to exciting collaborations where I can contribute my expertise to create impactful digital experiences.
              </p>
              <Link href={"#contact"}>
                <AnimatedButton
                  className="flex items-center text-sm sm:text-base px-6 gap-2 hover:scale-105 transition-transform duration-300"
                  containerClassName="h-12 w-auto mt-6"
                >
                  <span>Contact Me</span>
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </RevealWrapper>


      </div>
    </section>
  );
}
