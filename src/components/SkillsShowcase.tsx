"use client";

import { useRef, useState } from "react";
import {
  RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiNodejsFill,
  RiTerminalBoxFill, RiDatabase2Fill, RiGithubFill, RiServerFill,
  RiCloudFill, RiPaintFill, RiFileCodeFill, RiLayoutFill, RiNextjsFill
} from "react-icons/ri";
import { SiDjango, SiTypescript, SiPython } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import ShinyText from "./ShinyText";
import { AnimatedButton } from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: "frontend" | "backend" | "database" | "devops" | "design";
  proficiency: number;
}


const skills: Skill[] = [
  { name: "React", icon: <RiReactjsFill className="text-4xl" />, color: "#61DAFB", category: "frontend", proficiency: 95 },
  { name: "Next.js", icon: <RiNextjsFill className="text-4xl" />, color: "#FFFFFF", category: "frontend", proficiency: 90 },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl" />, color: "#3178C6", category: "frontend", proficiency: 88 },
  { name: "JavaScript", icon: <RiJavascriptFill className="text-4xl" />, color: "#F7DF1E", category: "frontend", proficiency: 96 },
  { name: "Tailwind CSS", icon: <RiLayoutFill className="text-4xl" />, color: "#06B6D4", category: "frontend", proficiency: 92 },
  { name: "HTML5", icon: <RiHtml5Fill className="text-4xl" />, color: "#F05032", category: "frontend", proficiency: 92 },
  { name: "JQyerry", icon: <RiFileCodeFill className="text-4xl" />, color: "#FF3E00", category: "frontend", proficiency: 75 },
  { name: "CSS3", icon: <RiCss3Fill className="text-4xl" />, color: "#F7DF1E", category: "frontend", proficiency: 92 },
  { name: "Three.js", icon: <TbBrandThreejs className="text-4xl" />, color: "#FFFFFF", category: "frontend", proficiency: 75 },
  { name: "Node.js", icon: <RiNodejsFill className="text-4xl" />, color: "#339933", category: "backend", proficiency: 92 },
  { name: "Django", icon: <SiDjango className="text-4xl" />, color: "#8b5cf6", category: "backend", proficiency: 85 },
  { name: "Python", icon: <SiPython className="text-4xl" />, color: "#3776AB", category: "backend", proficiency: 78 },
  { name: "MongoDB", icon: <RiDatabase2Fill className="text-4xl" />, color: "#47A248", category: "database", proficiency: 88 },
  { name: "PostgreSQL", icon: <RiDatabase2Fill className="text-4xl" />, color: "#4169E1", category: "database", proficiency: 85 },
  { name: "Firebase", icon: <RiCloudFill className="text-4xl" />, color: "#FFCA28", category: "database", proficiency: 86 },
  { name: "Docker", icon: <RiTerminalBoxFill className="text-4xl" />, color: "#2496ED", category: "devops", proficiency: 80 },
  { name: "Git", icon: <RiGithubFill className="text-4xl" />, color: "#F05032", category: "devops", proficiency: 90 },
  { name: "Vercel", icon: <RiServerFill className="text-4xl" />, color: "#FFFFFF", category: "devops", proficiency: 87 },
  { name: "Figma", icon: <RiPaintFill className="text-4xl" />, color: "#F24E1E", category: "design", proficiency: 75 },
];

type SkillCategory = "all" | "frontend" | "backend" | "database" | "devops" | "design";

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "database", label: "Database" },
    { value: "devops", label: "DevOps" },
    { value: "design", label: "Design" }
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="py-24 relative overflow-hidden" id="skills" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="px-4 py-2 glass rounded-full text-sm">
              <ShinyText text="My Expertise" disabled={false} speed={3} />
            </span>
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
              Work <span className="text-gradient">Experience.</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels. These are the tools and
              technologies I use to build powerful, scalable, and visually stunning web applications.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMultiplier={0.1}>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <AnimatedButton
                key={category.value}
                onClick={() => setActiveCategory(category.value as SkillCategory)}
                aria-label={`Filter by ${category.label}`}
                className={cn(
                  "text-sm px-4 py-2 transition-all duration-300",
                  activeCategory === category.value
                    ? "glass text-white"
                    : "flex items-center gap-2 hover:scale-105 text-white/50 transition-transform duration-3000"
                )}
                containerClassName="h-auto min-w-[120px]"
                borderClassName={
                  activeCategory === category.value
                    ? "opacity-80"
                    : "opacity-0 hover:opacity-80"
                }
              >
                {category.label}
              </AnimatedButton>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={index} direction="up" delayMultiplier={index * 0.05}>
              <div
                className="glass-card p-4 flex flex-col items-center justify-center h-40 relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="mb-3 transition-transform duration-300"
                  style={{
                    color: skill.color,
                    transform: hoveredSkill === skill.name ? "scale(1.2)" : "scale(1)"
                  }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>

                <div className="absolute bottom-3 left-4 right-4 h-1 bg-gray-700/50 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="h-full rounded-full transition-all duration-800 ease-out"
                    style={{
                      backgroundColor: skill.color,
                      width: hoveredSkill === skill.name ? `${skill.proficiency}%` : "0%"
                    }}
                  />
                </div>

                <div className="relative top-12 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="glass-card px-2 py-1 rounded-md">{skill.proficiency}%</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delayMultiplier={0.2}>
          <div className="mt-24 glass-card text-gray-300 text-sm sm:text-base p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">
                  Learning <span className="text-gradient">Journey</span>
                </h3>
                <p className="mb-4">
                  My journey in tech is driven by curiosity and a deep passion for building impactful digital experiences.
                  From crafting sleek frontends with React and Next.js to exploring the power of Python, Django, and AI —
                  I'm constantly evolving as a developer.
                </p>
                <p>
                  I believe that great developers are lifelong learners. Whether it's building real-world projects,
                  contributing to open-source, or diving deep into agentic AI systems — I stay committed to sharpening my skills
                  every single day.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">
                  Current <span className="text-gradient">Focus</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Building beautiful, animated UIs with React & Next.js
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Integrating AI tools & APIs into modern web experiences
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Building blazing-fast, responsive, and engaging portfolios
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    Crafting smart backend solutions using Python and Django
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                    Exploring Agentic AI & LLMs for building intelligent assistants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="absolute top-40 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}