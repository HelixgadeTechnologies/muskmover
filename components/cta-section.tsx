"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

export default function CTASection() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-bg.jpg"
          alt="Woman on vessel"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center items-start">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="text-[32px] md:text-[52px] font-bold text-white leading-tight mb-12 max-w-2xl tracking-tight">
            We Make Finding The
            <br />
            Right Vessel / Equipment
            <br />
            Simple
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <button className="px-10 py-4 border-2 border-[#6B0D0D] text-[#6B0D0D] text-[15px] font-bold uppercase tracking-wider hover:bg-[#6B0D0D] hover:text-white transition-all">
            Find Out More
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}
