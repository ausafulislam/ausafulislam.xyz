"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiMedalLine,
  RiExternalLinkLine,
  RiZoomInLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { SiUdemy, SiHp } from "react-icons/si";
import { TbHexagonLetterUFilled } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import ShinyText from "./ShinyText";
import ScrollReveal from "./ScrollReveal";
import { Lens } from "./magicui/lens";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  imagePath?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "Business Communication Certificate",
    issuer: "Hewlett-Packard (HP)",
    date: "June 2025",
    icon: <SiHp className="text-3xl text-[#0096D6]" />,
    imagePath: "/images/certificates/hp-business-communication.jpg",
    credentialUrl: "#",
  },
  {
    title: "Diploma in Artificial Intelligence",
    issuer: "UniAthena",
    date: "June 2025",
    icon: <TbHexagonLetterUFilled className="text-3xl text-[#FF006E]" />,
    imagePath: "/images/certificates/uniathena-ai-diploma.png",
    credentialUrl: "#",
  },
  {
    title: "HTML & CSS Mastery Course",
    issuer: "Udemy",
    date: "June 2025",
    icon: <SiUdemy className="text-3xl text-[#A435F0]" />,
    imagePath: "/images/certificates/html-css-master-course.jpg",
    credentialUrl: "#",
  },
  {
    title: "ChatGPT Masterclass",
    issuer: "UniAthena",
    date: "June 2025",
    icon: <TbHexagonLetterUFilled className="text-3xl text-[#FF006E]" />,
    imagePath: "/images/certificates/chatgpt-master-class.jpg",
    credentialUrl: "#",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "June 2025",
    icon: <SiUdemy className="text-3xl text-[#A435F0]" />,
    imagePath: "/images/certificates/compelete-python-bootcamp.jpg",
    credentialUrl: "#",
  },
  {
    title: "MERN Stack Webinar",
    issuer: "SkillEcted",
    date: "February 2025",
    icon: <FaLaptopCode className="text-3xl text-[#4A90E2]" />,
    imagePath: "/images/certificates/mern-stack-webinar.png",
    credentialUrl: "#",
  },
];

const CertificateModal = ({ certification }: { certification: Certification }) => {
  if (!certification.imagePath) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute inset-0 w-full h-full group">
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <RiZoomInLine className="text-3xl text-white" />
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] md:w-[900px] h-[520px] rounded-2xl p-5 border-gradient bg-black/70 backdrop-blur-xl text-white shadow-2xl">
        <div className="flex flex-col justify-between h-full space-y-4">
          {/* Title */}
          <DialogTitle className="text-2xl font-semibold text-white text-center">
            {certification.title}
          </DialogTitle>

          <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-md">
            <Lens defaultPosition={{ x: 30, y: 30 }}>
              <Image
                src={certification.imagePath}
                alt={certification.title}
                width={900} // or adjust as needed
                height={600}
                className="object-contain w-full h-full"
                quality={100}
                priority
              />
            </Lens>
          </div>

          {/* Certificate Info */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-300 px-1 mt-1">
            <div className="flex items-center gap-1">
              <span className="font-medium text-white">Issued by:</span>
              <span>{certification.issuer}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-white">Date:</span>
              <span>{certification.date}</span>
            </div>
          </div>

          {/* View Credential Link */}
          {certification.credentialUrl && certification.credentialUrl !== "#" && (
            <div className="flex justify-center mt-2">
              <Link
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline-offset-4 hover:underline"
              >
                View Credential
              </Link>
            </div>
          )}
        </div>
      </DialogContent>

    </Dialog>
  );
};

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <ScrollReveal>
      <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        <div className="relative h-48 w-full">
          {certification.imagePath && (
            <>
              <Image
                src={certification.imagePath}
                alt={certification.title}
                fill
                className="object-cover"
                quality={80}
                sizes="(100vw, 100vh)"
              />
              <CertificateModal certification={certification} />
            </>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start gap-4 mb-3">
            <div className="p-2 rounded-lg glass flex-shrink-0">
              {certification.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{certification.title}</h3>
              <p className="text-sm opacity-70">{certification.issuer}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center text-sm text-amber-400">
              <RiMedalLine className="mr-2" />
              <span>{certification.date}</span>
            </div>

            {certification.credentialUrl && (
              <Link
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <RiExternalLinkLine />
                Verify
              </Link>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="px-4 py-2 glass rounded-full text-sm">
              <ShinyText text="Professional Growth" disabled={false} speed={3} />
            </span>
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
              My <span className="text-gradient">Certifications</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Validated expertise through industry-recognized certifications demonstrating my commitment to professional excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delayMultiplier={0.3}>
          <div className="mt-16 p-10 glass-card rounded-xl text-center w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <RiLightbulbFlashLine className="text-5xl text-yellow-400 mb-4 animate-pulse" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
                Building Smarter, Growing Faster
              </h3>
              <p className="max-w-3xl text-gray-300 text-sm sm:text-base">
                I'm driven by curiosity and a deep passion for technology. Whether it's mastering new frameworks, exploring cutting-edge AI tools, or diving into backend innovations, I dedicate time every week to grow and evolve as a developer. I believe continuous learning isn't just an advantage — it's essential.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}