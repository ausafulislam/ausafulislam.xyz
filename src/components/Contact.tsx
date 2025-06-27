"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterXLine,
  RiExternalLinkLine,
} from "react-icons/ri";
import Link from "next/link";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import ShinyText from "./ShinyText";
import { AnimatedButton } from "./AnimatedButton";
import { TbBrandLinktree } from "react-icons/tb";
import ScrollReveal from "./ScrollReveal";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface ContactInfo {
  title: string;
  value: string;
  icon: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: <RiLinkedinBoxLine className="text-xl" />, url: "https://www.linkedin.com/in/ausafulislam/" },
  { name: "GitHub", icon: <RiGithubLine className="text-xl" />, url: "https://github.com/ausafulislam" },
  { name: "Twitter", icon: <RiTwitterXLine className="text-xl" />, url: "https://x.com/ausafulislam_h" },
  { name: "Linktree", icon: <TbBrandLinktree className="text-xl" />, url: "https://linktr.ee/ausafulislam" },
];

const contactInfo: ContactInfo[] = [
  {
    title: "Email",
    value: "ausafdev@gmail.com",
    icon: <RiMailLine className="text-xl text-blue-400" />,
  },
  {
    title: "Phone",
    value: "0345-9224446",
    icon: <RiPhoneLine className="text-xl text-green-400" />,
  },
  {
    title: "Location",
    value: "Karachi, Pakistan",
    icon: <RiMapPinLine className="text-xl text-purple-400" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        toast.success("Your message has been sent successfully! 😊");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again, and we'll get it sorted! 😔");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      <Toaster position="bottom-center" />
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="px-4 py-2 glass rounded-full text-sm">
              <ShinyText text="Get In Touch" disabled={false} speed={3} />
            </span>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
              Contact <span className="text-gradient">Me.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'm always open to new challenges and collaborations. Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ScrollReveal direction="left" delayMultiplier={0.1}>
            <div className="lg:col-span-1 h-full">
              <div className="glass-card p-8 h-full transition-transform duration-700 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <ScrollReveal key={index} direction="left" delayMultiplier={0.1 + (index * 0.1)}>
                      <div className="flex items-start gap-4">
                        <div className="glass rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-sm opacity-70">{info.title}</h4>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <h4 className="text-lg font-medium mb-4">Follow me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <ScrollReveal key={index} direction="left" delayMultiplier={0.4 + (index * 0.1)}>
                      <Link
                        href={social.url}
                        className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                        aria-label={`Follow me on ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-2 h-full w-full"> {/* Main container with full width */}
            <ScrollReveal
              direction="right"
              delayMultiplier={0.2}
              className="w-full h-full" 
            >
              <div className="glass-card p-8 h-full w-full transition-transform duration-700 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5 w-full">

                  {/* Name and Email - Single ScrollReveal for the grid */}
                  <ScrollReveal direction="right" delayMultiplier={0.3} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="glass-input w-full"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="glass-input w-full"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Subject - Single ScrollReveal */}
                  <ScrollReveal direction="right" delayMultiplier={0.4} className="w-full">
                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="glass-input w-full"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </ScrollReveal>

                  {/* Message - Single ScrollReveal */}
                  <ScrollReveal direction="right" delayMultiplier={0.5} className="w-full">
                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="glass-input w-full"
                        placeholder="Hello Ausaf, I'd like to discuss a project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </ScrollReveal>

                  {/* Submit Button - Single ScrollReveal */}
                  <ScrollReveal direction="up" delayMultiplier={0.6} className="w-full">
                    <div className="mt-12 flex justify-center w-full">
                      <AnimatedButton
                        type="submit"
                        className="flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-3 hover:scale-105 transition-transform duration-300"
                        containerClassName="w-full max-w-[220px] sm:max-w-[240px] h-11 sm:h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <RiExternalLinkLine className="text-base" />
                          </>
                        )}
                      </AnimatedButton>
                    </div>
                  </ScrollReveal>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}