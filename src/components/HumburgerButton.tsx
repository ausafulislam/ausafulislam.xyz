"use client";

import React from "react";

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

const HamburgerButton = ({ isOpen, onClick, className = "" }: HamburgerButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full  transition-colors duration-200 ${className}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <span
                className={`absolute w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
            />
            <span
                className={`absolute w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
                className={`absolute w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out
          ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
            />
        </button>
    );
};

export default HamburgerButton;
