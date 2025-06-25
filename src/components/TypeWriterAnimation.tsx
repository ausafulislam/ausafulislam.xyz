import { useEffect, useState, useMemo } from 'react';

const TypeWriterAnimation = () => {
    const [currentTitle, setCurrentTitle] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Memoize the titles array to prevent it from being recreated on every render
    const titles = useMemo(() => [
        "Full Stack Developer",
        "AI Automation Engineer",
        "Python Scripting Pro",
        "Web3 Enthusiast",
        "Frontend Architect",
        "Next.js Developer",
        "TypeScript Wizard",
    ], []);

    const typingSpeed = 120;
    const pauseBetween = 1500;

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            // Backspace effect
            timer = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTitle((prev) => (prev + 1) % titles.length);
                }
            }, typingSpeed / 2);
        } else {
            // Typing effect
            timer = setTimeout(() => {
                const currentWord = titles[currentTitle];
                setDisplayText(currentWord.substring(0, displayText.length + 1));

                if (displayText === currentWord) {
                    setTimeout(() => setIsDeleting(true), pauseBetween);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, currentTitle, isDeleting, titles]);

    return (
        <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            <span className="text-gradient">Innovative </span>
            <span className="inline-block min-w-[200px] text-white">
                {displayText}
                <span className="animate-pulse">|</span>
            </span>
        </h1>
    );
};

export default TypeWriterAnimation;