"use client";

import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterXLine,
  RiDribbbleLine,
  RiArrowUpLine,
} from "react-icons/ri";
import { TbBrandLinktree } from "react-icons/tb";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

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
        <RevealWrapper origin="bottom" delay={100} duration={800} distance="20px" reset>
          <div className="glass-card p-10 mb-10 relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

            {/* Grid Content Reveal */}
            <RevealWrapper origin="bottom" delay={200} duration={1000} distance="30px" reset>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gradient mb-4 uppercase">Ausaf ul Islam</h3>
                  <p className="opacity-80 max-w-md mb-6">
                    A creative full-stack developer passionate about building
                    modern web applications with cutting-edge technologies and delivering
                    exceptional user experiences.
                  </p>
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
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gradient mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    {footerLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="relative inline-block text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gradient mb-4">Contact</h4>
                  <ul className="space-y-3 opacity-80">
                    <li>ausafdev@gmail.com</li>
                    <li>+92 (345) 922-4446</li>
                    <li>Karachi, Sindh Province, Pakistan</li>
                  </ul>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </RevealWrapper>

        {/* Bottom Bar Reveal */}
        <RevealWrapper origin="bottom" delay={300} duration={800} distance="20px" reset>
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
        </RevealWrapper>
      </div>
    </footer>
  );
}
