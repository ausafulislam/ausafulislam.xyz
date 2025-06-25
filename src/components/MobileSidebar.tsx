"use client";

import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";
import GooeyNav from "./GooeyNav";
import { useEffect } from "react";
import Link from "next/link";

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: {
        href: string;
        label: string;
        icon: React.ReactNode;
    }[];
}

export default function MobileSidebar({ isOpen, onClose, navLinks }: MobileSidebarProps) {
    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.querySelector('.mobile-sidebar');
            if (isOpen && sidebar && !sidebar.contains(event.target as Node)) {
                onClose();
            }
        };

        // Disable scroll when sidebar is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);



    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <div
                className={`mobile-sidebar fixed inset-y-0 left-0 w-[280px] max-w-[85vw]  glass z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } rounded-r-xl shadow-xl border-r border-white/10`}
                aria-modal="true"
                role="dialog"
            >
                <div className="flex flex-col h-full justify-between p-4">

                    {/* Logo */}
                    <div className="flex justify-center mb-6 mt-8">
                        <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden transition-transform hover:scale-105 duration-300">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex">
                        <GooeyNav
                            layout="vertical"
                            items={navLinks.map((link, index) => ({
                                label: (
                                    <span className="flex gap-4 justify-start text-base px-4 py-2 rounded-md transition-colors duration-200 ">
                                        <span className="text-2xl">{link.icon}</span>
                                        <span className="font-medium">{link.label}</span>
                                    </span>
                                ),
                                href: link.href,
                                key: index
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

                    {/* Divider */}
                    <div className="my-4 h-[2px] bg-white/20 w-full" />

                    {/* Social Links */}
                    <div className="flex flex-col items-center gap-3 pb-4">
                        <p className="text-white/70 text-sm font-medium text-center mb-2">Connect with me</p>
                        <div className="flex justify-center gap-6 pb-4">
                            <Link
                                href="https://github.com/ausafulislam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                                aria-label="GitHub"
                            >
                                <RiGithubFill className="text-xl" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/ausafulislam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <RiLinkedinBoxFill className="text-xl" />
                            </Link>
                            <Link
                                href="https://x.com/ausafulislam_h"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                                aria-label="Facebook"
                            >
                                <RiTwitterXFill className="text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}