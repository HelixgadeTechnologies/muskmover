"use client"

import Image from "next/image"
import ScrollReveal from "./scroll-reveal"

export default function AboutHero() {
    return (
        <section className="relative h-[650px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about-hero.jpg"
                    alt="Shipping Containers Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center">
                <ScrollReveal direction="up" duration={0.8}>
                    <h1 className="text-[40px] md:text-[64px] font-bold text-white leading-tight mb-8 max-w-5xl tracking-tight">
                        Reimagining Maritime Operations for a Connected World
                    </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2} duration={0.8}>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
                        Musk Mover is on a mission to simplify the maritime industry. We provide a
                        platform that connects owners and renters, ensuring transparency, reliability,
                        and efficiency every step of the way.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
