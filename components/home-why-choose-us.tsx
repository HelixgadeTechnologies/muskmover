"use client"

import { Clock, ShieldCheck, Users, Briefcase } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const features = [
  {
    icon: Briefcase,
    title: "Proven Industry Experience",
    description: "Years of navigating the complex Nigerian offshore sector with a track record of success."
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Excellence",
    description: "Adhering to the highest safety and quality standards in every operation we undertake."
  },
  {
    icon: Clock,
    title: "Reliable & Consistent",
    description: "Our robust maintenance schedules ensure zero downtime for your critical projects."
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Bespoke solutions centered around our clients' unique maritime requirements."
  }
]

export default function HomeWhyChooseUs() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-[36px] md:text-[42px] font-bold text-slate-900 mb-4 tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-slate-500 text-lg italic">
              Providing unparalleled maritime solutions backed by years of field experience and a commitment to excellence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
