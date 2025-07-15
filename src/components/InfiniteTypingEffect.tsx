"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalLine {
    text: string
    type: "command" | "output" | "success" | "loading" | "error" | "info"
    delay?: number
}

const TerminalTypingEffect = () => {
    // State management
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [completedLines, setCompletedLines] = useState<TerminalLine[]>([])
    const [isInstalling, setIsInstalling] = useState(false)
    const [installProgress, setInstallProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Terminal content configuration
    const terminalLines: TerminalLine[] = useMemo(() => [
        { text: "> init ausaf.dev", type: "command" },
        { text: "Initializing portfolio workspace...", type: "loading", delay: 500 },
        { text: "✓ Environment setup complete", type: "success", delay: 800 },
        { text: "", type: "output" },
        { text: "> npm install developer-skills", type: "command", delay: 1000 },
        { text: "Installing packages...", type: "loading", delay: 300 },
        { text: "", type: "output" },
        { text: "> ausaf.getSkills()", type: "command", delay: 1500 },
        {
            text: `{
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  ai: ['LangChain', 'OpenAI', 'RAG Pipelines'],
  devops: ['Docker', 'AWS', 'Vercel']
}`,
            type: "output",
            delay: 800,
        },
        { text: "", type: "output" },
        { text: "> ausaf.status", type: "command", delay: 1000 },
        { text: "🟢 Available for opportunities", type: "success", delay: 500 },
        { text: "💼 Open to freelance & full-time", type: "info", delay: 300 },
        { text: "", type: "output" },
        { text: "> contact.me", type: "command", delay: 800 },
        {
            text: "Let's collaborate on web development, AI, or innovative solutions.",
            type: "info",
            delay: 600,
        },
        { text: "✨ Portfolio loaded!", type: "success", delay: 1000 },
    ], [])

    // Syntax highlighting
    const highlightSyntax = useCallback((text: string) => {
        const keywords = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'LangChain', 'OpenAI', 'Docker', 'AWS', 'Vercel']
        const sections = ['frontend', 'backend', 'ai', 'devops']

        return text.split(/(\{|\}|\[|\]|:|,|'.*?'|".*?"|`.*?`|\b\w+\b)/g).map((token, i) => {
            if (!token) return null

            if (/^(['"`]).*\1$/.test(token)) return <span key={i} className="text-amber-300">{token}</span>
            if (keywords.includes(token)) return <span key={i} className="text-purple-400 font-medium">{token}</span>
            if (sections.includes(token)) return <span key={i} className="text-emerald-400 font-medium">{token}</span>
            if (/^[{}[\]:,]$/.test(token)) return <span key={i} className="text-gray-500">{token}</span>
            if (/^(✓|✨|🟢)$/.test(token)) return <span key={i} className="text-2xl">{token}</span>

            return <span key={i}>{token}</span>
        })
    }, [])

    // Line styling
    const getLineStyle = (type: string) => {
        const styles = {
            command: "text-cyan-400 font-mono font-medium",
            success: "text-green-400",
            error: "text-red-400",
            loading: "text-yellow-400",
            info: "text-blue-300",
            output: "text-gray-300",
        }
        return styles[type as keyof typeof styles] || styles.output
    }

    // Animation effects
    useEffect(() => {
        if (isPaused || currentLineIndex >= terminalLines.length) {
            if (currentLineIndex >= terminalLines.length) {
                setTimeout(() => {
                    setCurrentLineIndex(0)
                    setCompletedLines([])
                    setCurrentText("")
                }, 4000)
            }
            return
        }

        const currentLine = terminalLines[currentLineIndex]
        const delay = currentLine.delay || 0

        if (currentLine.text === "Installing packages...") {
            setIsInstalling(true)
            setInstallProgress(0)
            const interval = setInterval(() => {
                setInstallProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        setIsInstalling(false)
                        setTimeout(() => {
                            setCompletedLines(lines => [...lines, currentLine])
                            setCurrentLineIndex(i => i + 1)
                        }, 500)
                        return 100
                    }
                    return prev + Math.random() * 15 + 5
                })
            }, 100)
            return () => clearInterval(interval)
        }

        const typingSpeed = currentLine.type === "command" ? 80 : 30
        const timeout = setTimeout(() => {
            let charIndex = 0
            const interval = setInterval(() => {
                if (charIndex < currentLine.text.length) {
                    setCurrentText(currentLine.text.slice(0, charIndex + 1))
                    charIndex++
                } else {
                    clearInterval(interval)
                    setCompletedLines(lines => [...lines, currentLine])
                    setCurrentText("")
                    setCurrentLineIndex(i => i + 1)
                }
            }, typingSpeed)
            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [currentLineIndex, isPaused, terminalLines])

    // Auto-scroll
    useEffect(() => {
        containerRef.current?.scrollTo({
            top: containerRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }, [completedLines, currentText, installProgress])

    return (
        <div className="flex justify-center p-4">
            <div className="w-full max-w-3xl">
                {/* Terminal Header */}
                <div className=" bg-gradient-to-br from-[#0d0d0d] via-[#111827] to-[#1f2937] rounded-t-lg px-4 py-3 flex items-center justify-between border-b border-gray-700">
                    <div className="flex space-x-2">
                        <div className={`w-3 h-3 rounded-full bg-red-500`} />
                        <div className={`w-3 h-3 rounded-full bg-yellow-500`} />
                        <div className={`w-3 h-3 rounded-full bg-green-500`} />
                    </div>
                    <div className="text-gray-300 text-sm font-mono">ausaf@portfolio:~</div>
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                    >
                        {isPaused ? '▶ Resume' : '⏸ Pause'}
                    </button>
                </div>

                {/* Terminal Body */}
                <div
                    ref={containerRef}
                    className="h-96 overflow-y-auto custom-scrollbar font-mono text-sm  bg-gradient-to-br from-[#0d0d0d] via-[#111827] to-[#1f2937] text-gray-100 rounded-b-lg p-4 border border-gray-700"
                >
                    <div className="space-y-2">
                        <AnimatePresence>
                            {completedLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={getLineStyle(line.type)}
                                >
                                    {line.text === "" ? <br /> :
                                        line.type === "output" && line.text.includes("{") ?
                                            <pre className="whitespace-pre-wrap">{highlightSyntax(line.text)}</pre> :
                                            highlightSyntax(line.text)}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isInstalling && (
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-yellow-400">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"
                                    />
                                    <span>Installing packages...</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${installProgress}%` }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {Math.round(installProgress)}% complete
                                </div>
                            </div>
                        )}

                        {currentText && !isInstalling && (
                            <div className={getLineStyle(terminalLines[currentLineIndex]?.type || "output")}>
                                {terminalLines[currentLineIndex]?.type === "output" && currentText.includes("{") ?
                                    <pre className="whitespace-pre-wrap">{highlightSyntax(currentText)}</pre> :
                                    highlightSyntax(currentText)}
                            </div>
                        )}

                        {(currentText || isInstalling) && (
                            <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-2 h-5 bg-cyan-400 rounded-sm ml-1"
                            />
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-3 text-center text-gray-500 text-xs">
                    <div className="inline-flex items-center space-x-2">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-400 rounded-full"
                        />
                        <span>Interactive terminal simulation</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminalTypingEffect