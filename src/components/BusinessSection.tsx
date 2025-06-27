import Link from "next/link";
import { FiCode, FiBarChart2, FiShield, FiZap, FiCheckCircle } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import ShinyText from "./ShinyText";
import TextFocus from "./TextFocus";
import { AnimatedButton } from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

export default function DeveloperOffer() {
    const features = [
        {
            icon: <FiCode className="w-6 h-6" />,
            title: "Cutting-Edge Tech",
            desc: "Next.js, Tailwind, TypeScript - The modern stack for blazing fast sites",
            color: "text-gradient"
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            title: "Lightning Fast",
            desc: "3-week delivery for most projects - get to market quicker",
            color: "text-gradient"
        },
        {
            icon: <FiBarChart2 className="w-6 h-6" />,
            title: "Results-Driven",
            desc: "Pay only after you see increased traffic & conversions",
            color: "text-gradient"
        },
        {
            icon: <FiShield className="w-6 h-6" />,
            title: "Full Support",
            desc: "2 months maintenance included with every project",
            color: "text-gradient"
        }
    ];

    return (
        <section className="relative py-16 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <ScrollReveal index={0}>
                    <div className="text-center mb-12">
                        <div className="text-sm sm:text-base text-indigo-300 uppercase tracking-wider mb-4">
                            <span className="px-4 py-2 glass rounded-full text-sm">
                                <ShinyText text="Developer-Built, Results Guaranteed" disabled={false} speed={3} />
                            </span>
                        </div>
                        <div className="flex flex-1 justify-center text-center w-full max-w-4xl mx-auto px-2">
                            <TextFocus
                                sentence="Build & Grow Online"
                                manualMode={false}
                                blurAmount={10}
                                borderColor="#3b82f6"
                                animationDuration={1}
                                pauseBetweenAnimations={1}
                                className="text-4xl my-8 mx-4 sm:text-5xl lg:text-6xl font-bold"
                            />
                        </div>

                        <p className="text-lg text-indigo-100">
                            As an independent developer, I craft <strong className="font-bold text-white">high-converting websites</strong> with a{' '}
                            <span className="font-bold text-gradient">
                                60-day performance guarantee
                            </span>. You only pay when you're completely satisfied with the results.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Features Grid */}
                <div className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            index={index}
                            direction={index % 2 === 0 ? "up" : "down"}
                            delayMultiplier={0.2}
                        >
                            <div
                                className="bg-gradient-to-b from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-indigo-400/40 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/10 group"
                            >
                                <div className={`w-14 h-14 mb-4 mx-auto flex items-center justify-center ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gradient mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA Section */}
                <ScrollReveal index={features.length + 1}>
                    <div className="text-center">
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Link
                                href="mailto:ausafdev@gmail.com?subject=Portfolio%20Visit&body=Hello%2C%0A%0AI%20visited%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0APlease%20let%20me%20know%20if%20you%20are%20available.%0A%0AThank%20you!"
                            >
                                <AnimatedButton
                                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-3000"
                                    containerClassName="h-14 w-auto"
                                >
                                    <span>Build Your Business Now</span>
                                    <RiExternalLinkLine />
                                </AnimatedButton>
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-indigo-300/80">
                            <FiCheckCircle className="inline mr-1" /> No obligation quote
                            <span className="mx-2">•</span>
                            <FiCheckCircle className="inline mr-1" /> 100% satisfaction guarantee
                            <span className="mx-2">•</span>
                            <FiCheckCircle className="inline mr-1" /> Direct developer access
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}