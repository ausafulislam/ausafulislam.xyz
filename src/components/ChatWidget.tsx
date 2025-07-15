"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHint, setShowHint] = useState(true);

    return (
        <>
            {/* Chat Button and Tooltip */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
                {/* Custom Tooltip */}
                {!isOpen && (
                    <div className="absolute top-[-35px] -left-8 -translate-x-1/2 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded shadow-lg whitespace-nowrap animate-blink">
                        Try My Assistant
                        <div className="absolute bottom-[-4px] left-32 w-2 h-2 bg-white -translate-x-1/2 rotate-45 shadow-sm" />
                    </div>
                )}

            {/* Toggle Button (Logo or Arrow) */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowHint(false);
                }}
                className="w-[56px] h-[56px] glass rounded-full shadow-xl hover:scale-105 transition grid place-items-center"
                aria-label="Toggle Chat Assistant"
            >
                {isOpen ? (
                    <ChevronDown className="w-6 h-6 text-white" />
                ) : (
                    <Image
                        src="/images/logo.png"
                        alt="Chatbot Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                )}
            </button>
        </div >

            {/* Chatbot Iframe */ }
    {
        isOpen && (
            <div className="fixed bottom-20 right-6 z-40 w-[350px] h-[500px] shadow-lg rounded-lg overflow-hidden border border-gray-300 bg-white">
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/g2EKVg_2TmaVTJYG8eIhb"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    allow="clipboard-write"
                />
            </div>
        )
    }
        </>
    );
};
