"use client";

import { useState, useEffect, useRef } from "react";

const TerminalTypingEffect = () => {
    const [text, setText] = useState<string>("");
    const containerRef = useRef<HTMLDivElement>(null);

    const fullText = `> init ausaf.dev

Booting up portfolio workspace...
Loading modules...
Fetching latest projects...
All systems ready ✅


> ausaf.getSkills()
{
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  python: ['Flask', 'FastAPI', 'Streamlit'],
  ai_agents: ['LangChain', 'Autogen Studio', 'OpenAI Assistants'],
}


> ausaf.status
"Available for remote opportunities — freelance or full-time."


> contact.me
"Let’s collaborate on something impactful — web, AI, or agent-powered experiences."
`;

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
                if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                }
            } else {
                clearInterval(typingInterval);
            }
        }, 30);
        return () => clearInterval(typingInterval);
    }, [fullText]);

    const highlightSyntax = (line: string): JSX.Element[] => {
        const parts: JSX.Element[] = [];

        const patterns: { regex: RegExp; className: string }[] = [
            { regex: /(^> .*)/, className: "text-blue-400 font-semibold" },
            { regex: /(['"`][^'"`]*['"`])/g, className: "text-amber-400" },
            {
                regex: /\b(frontend|backend|design|python|ai_ml|ai_agents|generative_ai|devops)\b/g,
                className: "text-cyan-800",
            },
            {
                regex:
                    /\b(React|Next\.js|TypeScript|JavaScript|HTML|CSS|Node\.js|Express|MongoDB|Figma|Tailwind CSS|UI\/UX|Flask|FastAPI|Streamlit|Git|GitHub|Vercel|Netlify|Pandas|NumPy|TensorFlow|scikit-learn|OpenAI API|LangChain|AutoGen|Autogen Studio|LLMs|RAG Pipelines|Agentic Workflows|Prompt Engineering|OpenAI Assistants API)\b/g,
                className: "text-purple-400",
            },
            {
                regex: /\b(true|false|null|undefined|new|function|let|const|var|return)\b/g,
                className: "text-green-400",
            },
            { regex: /[{}[\]:,]/g, className: "text-gray-400" },
        ];

        let remaining = line;

        while (remaining.length > 0) {
            let matched = false;

            for (const { regex, className } of patterns) {
                const match = regex.exec(remaining);
                if (match && match.index !== undefined) {
                    const matchedText = match[0];
                    if (match.index > 0) {
                        parts.push(<span key={crypto.randomUUID()}>{remaining.slice(0, match.index)}</span>);
                    }
                    parts.push(
                        <span key={crypto.randomUUID()} className={className}>
                            {matchedText}
                        </span>
                    );
                    remaining = remaining.slice(match.index + matchedText.length);
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                parts.push(<span key={crypto.randomUUID()}>{remaining}</span>);
                break;
            }
        }

        return parts;
    };

    return (
        <div className=" w-full flex justify-center p-4">
            <div
                ref={containerRef}
                className="w-full max-w-3xl h-[420px] md:h-[500px] overflow-y-auto rounded-xl bg-gradient-to-br from-[#0d0d0d] via-[#111827] to-[#1f2937] text-white shadow-2xl border border-white/10 p-6 font-mono text-sm custom-scrollbar relative"
            >
                {/* Optional: Terminal Top Bar */}
                <div className="absolute top-2 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                <pre className="mt-6 whitespace-pre-wrap break-words">
                    {text.split("\n").map((line, index) => (
                        <div key={index} className=" leading-relaxed">
                            {highlightSyntax(line)}
                        </div>
                    ))}
                    <span className="inline-block w-2 h-4 ml-1 bg-white animate-blink"></span>
                </pre>
            </div>
        </div>
    );
};

export default TerminalTypingEffect;
