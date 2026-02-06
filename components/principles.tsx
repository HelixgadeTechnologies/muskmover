"use client"

import Image from "next/image"
import { ShieldCheck, Headphones, Users, Package, FileText, LineChart } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const leftPrinciples = [
    {
        title: "SAFETY FIRST",
        description: "We never compromise on safety. Every feature, partnership, and policy prioritizes the wellbeing of people at sea.",
        icon: ShieldCheck,
        iconColor: "text-amber-500",
    },
    {
        title: "GLOBAL ACCESS, LOCAL EXPERTISE",
        description: "Democratizing access to marine assets while respecting regional practices and regulations.",
        icon: Headphones,
        iconColor: "text-red-500",
    },
    {
        title: "COMMUNITY EMPOWERMENT",
        description: "Success means owners earn more, operators save more, and the entire maritime ecosystem thrives.",
        icon: Users,
        iconColor: "text-amber-500",
    },
]

const rightPrinciples = [
    {
        title: "TRANSPARENCY ALWAYS",
        description: "No hidden fees, no surprise charges, no opaque processes. Clear pricing, clear terms, clear communication.",
        icon: Package,
        iconColor: "text-amber-600",
    },
    {
        title: "INNOVATION WITH PURPOSE",
        description: "Technology for tangible impact—reducing downtime, cutting costs, improving sustainability.",
        icon: FileText,
        iconColor: "text-cyan-500",
    },
    {
        title: "SUSTAINABLE GROWTH",
        description: "Balancing commercial success with environmental responsibility and industry longevity.",
        icon: LineChart,
        iconColor: "text-emerald-500",
    },
]

export default function Principles() {
    return (
        <section className="py-32 px-4 md:px-8 bg-white relative overflow-hidden min-h-[900px]">
            {/* Background Image with dotted line and starfish */}
            <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <Image
                    src="/principles-bg.png"
                    alt="Principles background decoration"
                    fill
                    className="object-contain object-center"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <h2 className="text-[32px] md:text-[40px] font-bold text-center text-[#050B20] mb-28 tracking-tight">
                        The Principles That Guide Us
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
                    {/* Left Column */}
                    <div className="space-y-16">
                        {leftPrinciples.map((item, index) => (
                            <ScrollReveal key={index} delay={0.1 * index} direction="right">
                                <div className="flex gap-6 items-start max-w-md">
                                    <div className="w-14 h-14 shrink-0 rounded-[14px] bg-white shadow-sm flex items-center justify-center border border-slate-50">
                                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#050B20] mb-3 tracking-wider uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-[15px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16 lg:pt-12">
                        {rightPrinciples.map((item, index) => (
                            <ScrollReveal key={index} delay={0.1 * index} direction="left">
                                <div className="flex gap-6 items-start max-w-md ml-auto">
                                    <div className="w-14 h-14 shrink-0 rounded-[14px] bg-white shadow-sm flex items-center justify-center border border-slate-50">
                                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#050B20] mb-3 tracking-wider uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-[15px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
