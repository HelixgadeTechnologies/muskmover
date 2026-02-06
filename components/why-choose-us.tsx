"use client"

import { Globe, Anchor, Tag, MapPin } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const features = [
  {
    icon: Globe,
    title: "Instant Access to Global Inventory",
    description: "Browse 15,000+ vessels and 25,000+ equipment listings across 200 ports worldwide. From tugboats in Rotterdam to yachts in Miami.",
  },
  {
    icon: Anchor,
    title: "Fully Verified & Insured",
    description: "Every listing undergoes 7-point verification. Comprehensive insurance on all rentals. Your operations are protected from start to finish.",
  },
  {
    icon: Tag,
    title: "Optimize Your Maritime Costs",
    description: "Rent instead of buy and save up to 70% on capital expenditure. Transparent pricing with no hidden fees.",
  },
  {
    icon: MapPin,
    title: "Track your vessel",
    description: "Track your vessel anywhere in the world to the nearest kilometer.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto bg-[#F8FAFC] rounded-[32px] p-12 md:p-20">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-16">Why Choose Us?</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
                <div className="flex flex-col items-start text-left">
                  <div className="mb-6 text-slate-900">
                    <Icon className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
