"use client"

import ScrollReveal from "./scroll-reveal"

export default function ServicesHero() {
  return (
    <section className="bg-[#050B20] pt-24 pb-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="text-[44px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            Our Maritime Services
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <p className="text-[17px] md:text-[18px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reliable solutions that power offshore and marine operations across West Africa and beyond, built on safety, precision, and excellence.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
