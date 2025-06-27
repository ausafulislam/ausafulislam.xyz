"use client";

import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterXLine,
  RiArrowUpLine,
} from "react-icons/ri";
import { TbBrandLinktree } from "react-icons/tb";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface FooterLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: <RiLinkedinBoxLine className="text-xl" />, url: "https://www.linkedin.com/in/ausafulislam/" },
  { name: "GitHub", icon: <RiGithubLine className="text-xl" />, url: "https://github.com/ausafulislam" },
  { name: "Twitter", icon: <RiTwitterXLine className="text-xl" />, url: "https://x.com/ausafulislam_h" },
  { name: "Linktree", icon: <TbBrandLinktree className="text-xl" />, url: "https://linktr.ee/ausafulislam" },
];

const footerLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Footer Card Section */}
        <ScrollReveal direction="up">
          <div className="glass-card p-10 mb-10 relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-2">
                <ScrollReveal direction="left" delayMultiplier={0.1}>
                  <h3 className="text-2xl font-bold text-gradient mb-4 uppercase">Ausaf ul Islam</h3>
                </ScrollReveal>
                <ScrollReveal direction="left" delayMultiplier={0.2}>
                  <p className="opacity-80 max-w-md mb-6">
                    An innovative full-stack developer who is enthusiastic about
                    creating cutting-edge web applications and providing outstanding user experiences.
                  </p>
                </ScrollReveal>
                <ScrollReveal direction="left" delayMultiplier={0.3}>
                  <div className="flex gap-3 mb-6">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        className="glass w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                        aria-label={`Follow me on ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <ScrollReveal direction="up" delayMultiplier={0.2}>
                  <h4 className="text-lg font-semibold text-gradient mb-4">Quick Links</h4>
                </ScrollReveal>
                <ul className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <ScrollReveal key={index} direction="up" delayMultiplier={0.3 + (index * 0.1)}>
                      <li>
                        <Link
                          href={link.href}
                          className="relative inline-block text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>

              <div>
                <ScrollReveal direction="up" delayMultiplier={0.3}>
                  <h4 className="text-lg font-semibold text-gradient mb-4">Contact</h4>
                </ScrollReveal>
                <ul className="space-y-3 opacity-80">
                  <ScrollReveal direction="right" delayMultiplier={0.4}>
                    <li>ausafdev@gmail.com</li>
                  </ScrollReveal>
                  <ScrollReveal direction="right" delayMultiplier={0.5}>
                    <li>+92 (345) 922-4446</li>
                  </ScrollReveal>
                  <ScrollReveal direction="right" delayMultiplier={0.6}>
                    <li>Karachi, Sindh Province, Pakistan</li>
                  </ScrollReveal>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMultiplier={0.4}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-60 text-sm">
              © {new Date().getFullYear()} Ausaf ul Islam. All rights reserved.
            </p>

            <button
              onClick={handleScrollToTop}
              className="glass rounded-full w-10 h-10 flex items-center justify-center mt-4 md:mt-0 transform transition-transform duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <RiArrowUpLine className="text-lg" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}