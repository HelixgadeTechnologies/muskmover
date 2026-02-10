"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

const stats = [
  { label: "Vessels Managed", value: "150+" },
  { label: "Operations Support", value: "24/7" },
  { label: "Incidents Rate", value: "0%" },
  { label: "Local Compliance", value: "100%" },
]

export default function HomeHero() {
  return (
    <section className="relative min-h-[700px] flex items-center pt-20 pb-12 overflow-hidden bg-[#050B20]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/large-cargo-ship.png"
          alt="Maritime Excellence"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B20]/80 via-transparent to-[#050B20]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <ScrollReveal direction="up">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4 block">
              Leading Nigeria's Maritime Future
            </span>
            <h1 className="text-[48px] md:text-[64px] font-bold text-white mb-6 leading-[1.1]">
              Elevating Maritime Operations with Strategic Excellence
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Trusted maritime services delivering safety, efficiency, and reliability across Nigeria's offshore and marine operations. Partnering with the industry's best.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-4 mb-20">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white h-14 px-8 text-base font-bold rounded-none group">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#050B20] h-14 px-8 text-base font-bold rounded-none transition-all">
                View Our Services
              </Button>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-700/50">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold text-white leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
