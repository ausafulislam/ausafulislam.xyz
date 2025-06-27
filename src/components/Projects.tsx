"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  RiGithubLine,
  RiExternalLinkLine,
  RiReactjsLine,
  RiArrowRightLine,
} from "react-icons/ri";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiThreedotjs,
  SiFramer,
  SiMaildotru,
  SiPython,
  SiStreamlit,
  SiOpenai,
  SiApachenetbeanside,
  SiVite,
} from "react-icons/si";
import ShinyText from "./ShinyText";
import { AnimatedButton } from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

interface TechStack {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: TechStack[];
  liveLink: string;
  githubLink: string;
  categories: string[];
}

const projects: Project[] = [
  {
    title: "3D Portfolio Template",
    description:
      "A modern, animated 3D portfolio template built with Three.js and Framer Motion. Designed for developers and designers to showcase their skills, projects, and contact info with smooth transitions and eye-catching effects. Includes integrated email functionality using EmailJS.",
    image: "/projects/ausaf-demo-portfolio.jpg",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-lg text-white" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-lg text-purple-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-lg text-pink-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg text-sky-400" /> },
      { name: "EmailJS", icon: <SiMaildotru className="text-lg text-red-400" /> },
    ],
    liveLink: "https://asf-3d-dev-portfolio.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "UI/UX", "Portfolio"],
  },
  {
    title: "NexMart - E-Commerce Platform",
    description:
      "NexMart is a sleek and fully responsive e-commerce platform offering product listing, shopping cart, checkout, and user authentication. It provides a smooth shopping experience with a modern UI and dynamic product handling.",
    image: "/projects/nexmart.jpg",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-lg text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-lg text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg text-sky-400" /> },
    ],
    liveLink: "https://nexmart-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "E-Commerce", "Mobile"],
  },
  {
    title: "Blogo ASF - Blog Website",
    description:
      "A clean and responsive blog platform built with Next.js, Firebase, and Tailwind CSS. Users can explore modern blog posts with fast loading, dynamic routing, and smooth animations. Designed for creators to publish and share content with ease.",
    image: "/projects/blogo-asf.jpg",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-lg text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg text-sky-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-lg text-yellow-500" /> },
    ],
    liveLink: "https://blogo-asf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Blog", "Mobile"],
  },
  {
    title: "Resume Craft",
    description:
      "Resume Craft is a dynamic CV builder built with HTML, CSS, JavaScript, and jQuery. It allows users to edit content in real-time, preview the resume, and export it as a professional-looking PDF — ideal for quick and modern job applications.",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
      { name: "jQuery", icon: <SiJquery className="text-lg text-blue-700" /> },
    ],
    image: "/projects/resume-craft.png",
    liveLink: "https://ausaf-resume-bulder.vercel.app",
    githubLink: "https://github.com/ausaf-dev/resume-craft",
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: "Gemini AI Clone",
    description:
      "A front-end clone of Google's Gemini AI interface built using HTML, CSS, and JavaScript. It replicates the UI and layout of the real Gemini app with smooth transitions and interactive input behavior — all done without any frameworks.",
    image: "/projects/gemini-clone.png",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://gemini-clone-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Mobile", "UI/UX"],
  },
  {
    title: "Pokémon Finder",
    description:
      "A Pokémon search app built using Next.js and Pokémon API. Features live filtering, detailed Pokémon info cards, and smooth Tailwind-styled UI.",
    image: "/projects/pokemon-finder.jpg",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-lg text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg text-sky-400" /> },
      { name: "Pokémon API", icon: <SiApachenetbeanside className="text-lg text-indigo-500" /> },
    ],
    liveLink: "https://asf-pokemon-web.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Mobile", "UI/UX"],
  },
  {
    title: "Image Gallery App",
    description:
      "A JavaScript-powered image search gallery that uses the Pixabay API. Includes search input, dynamic image fetching, and responsive card grid layout.",
    image: "/projects/image-gallery.jpg",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://image-gallery-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Mobile", "UI/UX"],
  },
  {
    title: "Currency Converter",
    description:
      "A fast and accurate currency conversion tool built using React and Vite. Fetches real-time exchange rates via API and supports user-friendly input UX.",
    image: "/projects/currency-convertor.jpg",
    techStack: [
      { name: "React", icon: <RiReactjsLine className="text-lg text-cyan-400" /> },
      { name: "Vite", icon: <SiVite className="text-lg text-purple-500" /> },
      { name: "Currency API", icon: <SiApachenetbeanside className="text-lg text-green-500" /> },
    ],
    liveLink: "https://currency-convertor-react-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Mobile", "UI/UX"],
  },
  {
    title: "3D Book Portfolio Template",
    description:
      "A creative portfolio site with a 3D book-style layout. Built using only HTML, CSS, and JavaScript, this template showcases sections like About, Projects, and Contact in a flipping-book experience.",
    image: "/projects/book-portfolio.jpg",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://3d-book-portfolio-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: "John Doe Portfolio Template",
    description:
      "A modern and responsive personal portfolio template built using HTML, CSS, and JavaScript. Includes sections like About, Projects, Skills, and Contact — ideal for showcasing developer profiles with smooth UI and elegant layout.",
    image: "/projects/jhone-doe-portfolio.jpg", // Add actual screenshot in your public/projects folder
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://jhon-doe-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam", // Update with actual repo link if available
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: "E-Book Store Template",
    description:
      "A modern and responsive e-book store interface with featured books, category filters, and a clean UI — built entirely with HTML, CSS, and JavaScript.",
    image: "/projects/ebook-store.jpg",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://book-store-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: "Plant Store Template",
    description:
      "A clean and green-themed store layout for selling plants and gardening tools. Includes product cards, banners, and mobile responsiveness using HTML, CSS, and JS.",
    image: "/projects/plant-store.jpg",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://plant-store-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: "Restina - Restaurant Website",
    description:
      "A classy restaurant website template with beautiful section transitions, menu highlights, and a full-page layout designed using HTML, CSS, and JavaScript.",
    image: "/projects/resturant-website.jpg",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://resturant-website-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "UI/UX"],
  },
  {
    title: " Coffee Website Template",
    description:
      "A stylish coffee shop landing page template with modern UI, product showcase, and JavaScript-based interactions — fully responsive and fast loading.",
    image: "/projects/coffee-website.png",
    techStack: [
      { name: "HTML", icon: <SiHtml5 className="text-lg text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-lg text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-lg text-yellow-400" /> },
    ],
    liveLink: "https://cofee-website-ausaf.vercel.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Food & Drinks"],
  },
  {
    title: "Weather Forecast App",
    description:
      "A Python-based weather forecast web app using Streamlit. Fetches city weather data from API and displays temperature, humidity, and more with a simple UI.",
    image: "/projects/weather-forcast-python.jpg",
    techStack: [
      { name: "Python", icon: <SiPython className="text-lg text-yellow-500" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-lg text-pink-500" /> },
      { name: "Weather API", icon: <SiOpenai className="text-lg text-blue-500" /> },
    ],
    liveLink: "https://weatherappausaf.streamlit.app/",
    githubLink: "https://github.com/ausafulislam",
    categories: ["Web Apps", "Python Apps", "API Projects"],
  },
];

const categories = ["All", "Web Apps", "Mobile", "UI/UX", "E-Commerce"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal direction="up" delayMultiplier={index * 0.1}>
      <Card className="overflow-hidden h-full glass-card border-0 group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end gap-3">
            <Link
              href={project.githubLink}
              className="w-10 h-10 glass rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub for ${project.title}`}
            >
              <RiGithubLine className="text-xl" />
            </Link>
            <Link
              href={project.liveLink}
              className="w-10 h-10 glass rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live ${project.title}`}
            >
              <RiExternalLinkLine className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
            {project.categories.map((category, idx) => (
              <span
                key={`cat-${idx}`}
                className="text-xs px-2 py-1 bg-white/10 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-3">
            {project.techStack.map((tech, idx) => (
              <div key={idx} title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : project.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="px-4 py-2 glass rounded-full text-sm">
              <ShinyText text="Portfolio" disabled={false} speed={3} />
            </span>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
              Featured <span className="text-gradient">Projects.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/70">
              Check out some of my recent work. Each project represents unique challenges
              and innovative solutions using modern technologies and best practices.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMultiplier={0.1}>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <AnimatedButton
                key={index}
                className={`px-4 py-2 transition-all duration-300 ${activeCategory === category
                  ? "glass text-white"
                  : "flex items-center text-white/50 gap-2 hover:scale-105 transition-transform duration-3000"
                  }`}
                containerClassName="h-auto"
                borderClassName={
                  activeCategory === category
                    ? "opacity-80"
                    : "opacity-0 hover:opacity-80"
                }
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </AnimatedButton>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl opacity-70">No projects found in this category.</p>
            </div>
          )}
        </div>

        <ScrollReveal direction="up" delayMultiplier={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="https://github.com/ausafulislam/ausaf-x-projects" target="_blank" rel="noopener noreferrer">
              <AnimatedButton
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-3000"
                containerClassName="h-14 w-auto"
              >
                <span>Explore Projects</span>
                <RiExternalLinkLine />
              </AnimatedButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}