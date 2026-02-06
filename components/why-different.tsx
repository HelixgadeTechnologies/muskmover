"use client"

import { ShieldCheck, Settings, Globe } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const differentiators = [
    {
        title: "Truly Global, Locally Intelligent",
        description: "Our platform understands port-specific regulations, customs requirements, and local maritime practices. Whether you're in Singapore or Seattle, we provide regionally optimized solutions with global consistency.",
        icon: ShieldCheck,
        bgColor: "bg-[#E6F9F9]",
        iconColor: "text-slate-900",
    },
    {
        title: "End-to-End Digital Workflow",
        description: "From initial search to post-rental documentation, every step happens on our platform. Digital contracts, automated insurance, real-time tracking, and consolidated billing eliminate traditional paperwork bottlenecks.",
        icon: Settings,
        bgColor: "bg-[#FDF2F8]",
        iconColor: "text-slate-900",
    },
    {
        title: "Built on Trust & Verification",
        description: "Every listing undergoes 7-point verification. Every user is vetted. Every transaction is escrow-protected. We maintain the industry's highest safety and compliance standards.",
        icon: Globe,
        bgColor: "bg-[#EFF6FF]",
        iconColor: "text-slate-900",
    },
]

export default function WhyDifferent() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-[48px] font-bold text-[#050B20] mb-4 tracking-tight">
                        Why We're Different?
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-[#6B7280] text-lg font-medium">The best booking platform you can trust</p>
                </ScrollReveal>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {differentiators.map((item, index) => (
                    <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                        <div
                            className={`${item.bgColor} p-10 md:p-12 rounded-[24px] flex flex-col items-center text-center h-full transition-all hover:shadow-md`}
                        >
                            <div className="w-16 h-16 rounded-[16px] bg-white shadow-sm flex items-center justify-center mb-8">
                                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                            </div>
                            <h3 className="text-xl md:text-[22px] font-bold text-[#050B20] mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-[#4B5563] leading-[1.6] text-[15px]">
                                {item.description}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
