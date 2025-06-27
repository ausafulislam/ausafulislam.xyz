// hooks/useScrollReveal.ts
import { useEffect } from "react";

export const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // only once
                    }
                });
            },
            { threshold: 0.1 }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
