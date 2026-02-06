"use client"

import { Anchor, Ship, CircleDot } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const types = [
  { icon: Ship, label: "Boston Whaler" },
  { icon: Anchor, label: "Duckworth" },
  { icon: CircleDot, label: "Munson" },
  { icon: Ship, label: "North River" },
  { icon: Anchor, label: "Duckworth" },
  { icon: CircleDot, label: "Yellowfin" },
  { icon: Anchor, label: "Damen" },
  { icon: CircleDot, label: "Bristol Bay" },
  { icon: Ship, label: "Gulf Craft" },
]

export default function BrowseByType() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[28px] font-bold text-slate-900 text-center mb-16">Browse by Type</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {types.map((type, i) => {
            const Icon = type.icon
            return (
              <ScrollReveal key={i} delay={0.1 + (i % 9) * 0.05} direction="up">
                <div
                  className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all cursor-pointer h-[140px] w-full"
                >
                  <div className="mb-4 text-slate-700 group-hover:text-orange-600 transition-colors">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <p className="text-[13px] font-medium text-slate-600 text-center leading-tight">
                    {type.label}
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
