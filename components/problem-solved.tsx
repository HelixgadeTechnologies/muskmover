"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ProblemSolved() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Centered Section Title */}
                <ScrollReveal>
                    <h2 className="text-3xl md:text-[40px] font-bold text-center text-[#050B20] mb-16">
                        The Problem We Solved
                    </h2>
                </ScrollReveal>

                {/* Main Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden shadow-sm border border-slate-100">
                    {/* Left Side: Image */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                        <ScrollReveal direction="right" className="h-full w-full" duration={0.8}>
                            <Image
                                src="/problem-solved.jpg"
                                alt="Maritime operator looking at shipping port"
                                fill
                                className="object-cover"
                            />
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Content */}
                    <div className="bg-[#F3F8FF] p-8 md:p-14 lg:p-20 flex flex-col justify-center">
                        <ScrollReveal direction="left" delay={0.2}>
                            <h3 className="text-2xl md:text-[32px] font-bold text-[#050B20] mb-8">
                                The Problem We Solved
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.3}>
                            <p className="text-[#4B5563] text-[15px] md:text-base leading-relaxed mb-8">
                                In 2018, our founder—a third-generation shipping operator—faced a critical
                                equipment shortage during peak season. The existing system was fragmented:
                                phone calls to brokers, faxed quotes, unverified listings, and endless paperwork. A
                                simple 3-day barge rental took 72 hours to arrange.
                            </p>
                        </ScrollReveal>

                        <ul className="space-y-4 mb-10">
                            {[
                                "That frustration sparked a vision: what if finding marine equipment was as simple as booking a hotel room?",
                                "24/7 Support and Logistics Assistance",
                                "Verified assets and transparent pricing models"
                            ].map((text, i) => (
                                <ScrollReveal key={i} direction="left" delay={0.4 + i * 0.1}>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-slate-900" />
                                        </div>
                                        <span className="text-[#050B20] text-sm md:text-[15px] font-medium leading-tight">
                                            {text}
                                        </span>
                                    </li>
                                </ScrollReveal>
                            ))}
                        </ul>

                        <ScrollReveal direction="up" delay={0.7}>
                            <button className="w-fit px-10 py-4 bg-[#050B20] text-white text-[15px] font-bold rounded-sm hover:bg-[#0a153d] transition-colors">
                                Get Started
                            </button>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
