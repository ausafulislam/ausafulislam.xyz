"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import SkillsShowcase from "@/components/SkillsShowcase";
import Feedbacks from "@/components/Feedbacks";
import AnimatedTags from "@/components/Tags";
import HolographicLoader from "@/components/Loading";
import CodeInspiration from "@/components/CodeInspiration";
import BusinessSection from "@/components/BusinessSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4.5 seconds loader delay
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HolographicLoader />;
  }
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <SkillsShowcase />
      <Projects />
      <Certifications />
      <CodeInspiration />
      <BusinessSection />
      <Feedbacks />
      <Contact />
      <AnimatedTags />
      <Footer />
    </main>
  );
}
