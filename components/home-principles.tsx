"use client"

import { Globe, Cpu, Users } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const principles = [
  {
    icon: Globe,
    title: "Market Expansion",
    description: "Strengthening our footprints across the Gulf of Guinea through strategic alliances and localized service delivery."
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    description: "Implementing real-time fleet management systems to optimize fuel efficiency and vessel tracking in real-time."
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Investing in the next generation of Nigerian maritime professionals through world-class training programs."
  }
]

export default function HomePrinciples() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050B20] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="space-y-6 group">
                <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <principle.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold">{principle.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
