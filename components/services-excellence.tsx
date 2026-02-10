"use client"

import { Shield, Settings, Zap, Award } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const principles = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Our core priority in every operation."
  },
  {
    icon: Settings,
    title: "Technical Excellence",
    description: "Leveraging the latest marine technology."
  },
  {
    icon: Zap,
    title: "Fire Conscious",
    description: "Rigorous emergency preparedness."
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Internationally recognized quality standards."
  }
]

export default function ServicesExcellence() {
  return (
    <section className="py-24 px-4 bg-[#1E293B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-[32px] font-bold text-center mb-16">Commitment to Excellence & Safety</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">
                  <principle.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] font-bold mb-2">{principle.title}</h3>
                <p className="text-slate-400 text-sm">{principle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
