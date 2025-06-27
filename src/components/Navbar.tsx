"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { RiHome4Line, RiUser3Line, RiCodeView, RiMailLine, RiLightbulbLine, RiMedal2Line } from "react-icons/ri";
import Image from "next/image";
import GooeyNav from "./GooeyNav";
import HamburgerButton from "./HumburgerButton";
import MobileSidebar from "./MobileSidebar";

const navLinks = [
  { href: "#home", label: "Home", icon: <RiHome4Line /> },
  { href: "#about", label: "About", icon: <RiUser3Line /> },
  { href: "#skills", label: "Skills", icon: <RiLightbulbLine /> },
  { href: "#projects", label: "Projects", icon: <RiCodeView /> },
  { href: "#certifications", label: "Certifications", icon: <RiMedal2Line /> },
  { href: "#contact", label: "Contact", icon: <RiMailLine /> },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce the scroll handler
      timeoutRef.current = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).clientHeight;

          if (window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200) {
            currentSection = section.id;
          }
        });

        if (currentSection && window.location.hash !== `#${currentSection}`) {
          window.history.replaceState(null, "", `#${currentSection}`);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? "py-2" : "py-2"}`}>
      <div className="container mx-auto px-4 py-2">
        <nav className={`glass rounded-full flex items-center justify-between h-20 md:h-auto p-3 ${isScrolled ? 'backdrop-blur-lg' : 'backdrop-blur-md'}`}>

          {/* Logo */}
          <Link href="#home" className="relative group ">
            <div className="relative group">
              <div className="w-[65px] h-[65px] md:w-[75px] md:h-[75px] mx-4 overflow-hidden rounded-full border-2 border-white/20 transition-all group-hover:border-white/40">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 -translate-y-full bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Ausaf Ul Islam
                <div className="absolute top-[-8px] left-1/2 w-2 h-2 bg-white/90 -translate-x-1/2 translate-y-1/2 rotate-45"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <GooeyNav
              items={navLinks.map(link => ({
                label: (
                  <span className="flex items-center gap-2">
                    {link.icon}
                    <span>{link.label}</span>
                  </span>
                ),
                href: link.href
              }))}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Button */}
          <div
            className="lg:hidden glass-button p-1 md:p-2 mx-1 rounded-full text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navLinks={navLinks} />
        )}
      </div>
    </header>

  );
}