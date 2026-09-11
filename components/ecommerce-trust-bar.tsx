"use client"

import { Ship, Zap, ShieldCheck, MapPin } from "lucide-react"

const trustItems = [
  {
    icon: Ship,
    title: "Verified Marine Fleet",
    description: "NIMASA & Class certified vessels & gear",
  },
  {
    icon: Zap,
    title: "Instant Charter Quotes",
    description: "Transparent daily & monthly lease rates",
  },
  {
    icon: ShieldCheck,
    title: "SOLAS & Safety Compliant",
    description: "100% inspected offshore equipment",
  },
  {
    icon: MapPin,
    title: "Nationwide Hub Logistics",
    description: "Deployments in Lagos, Warri & Port Harcourt",
  },
]

export default function EcommerceTrustBar() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-6 px-4 text-white relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {trustItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:border-orange-500/30 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-100 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-[12px] text-slate-400 font-medium leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
