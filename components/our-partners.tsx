"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Award, ArrowRight, Building2, CheckCircle2 } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

interface Partner {
  id: string
  name: string
  shortName: string
  category: "Energy & Offshore" | "Regulators & Class" | "Shipbuilders & OEM"
  role: string
  badge: string
  image: string
  accentColor: string
  logoBg: string
}

const strategicPartners: Partner[] = [
  {
    id: "clinton",
    name: "Clinton Oilfield Services",
    shortName: "Clinton Oilfield",
    category: "Energy & Offshore",
    role: "Offshore Oilfield Services & Deepwater Logistics",
    badge: "Alliance Partner",
    image: "/image/clinton.jpeg",
    accentColor: "from-amber-500 to-orange-600",
    logoBg: "bg-white border-slate-200",
  },
  {
    id: "tomet",
    name: "Tomet Energy Limited",
    shortName: "Tomet Energy",
    category: "Energy & Offshore",
    role: "Offshore Energy & Marine Fuel Operations",
    badge: "Strategic Partner",
    image: "/image/tomet.jpeg",
    accentColor: "from-red-500 to-rose-600",
    logoBg: "bg-black border-slate-800",
  },
  {
    id: "oceansafe",
    name: "Oceansafe Limited",
    shortName: "Oceansafe",
    category: "Regulators & Class",
    role: "Maritime Safety, Security & Marine Support",
    badge: "Verified Partner",
    image: "/image/oceansafe.jpeg",
    accentColor: "from-sky-500 to-blue-600",
    logoBg: "bg-black border-slate-800",
  },
  {
    id: "gelose",
    name: "Gelose Marine Services Nig. Ltd",
    shortName: "Gelose Marine",
    category: "Shipbuilders & OEM",
    role: "Offshore Marine Fleet & Vessel Chartering",
    badge: "Fleet Partner",
    image: "/image/gelose.jpeg",
    accentColor: "from-emerald-500 to-teal-600",
    logoBg: "bg-white border-slate-200",
  },
  {
    id: "primetop",
    name: "Prime-Top Inspection Ltd",
    shortName: "Prime-Top",
    category: "Regulators & Class",
    role: "Offshore & Marine Technical Inspection Services",
    badge: "Inspection Partner",
    image: "/image/primetop.jpeg",
    accentColor: "from-blue-600 to-cyan-500",
    logoBg: "bg-white border-slate-200",
  },
]

const categories = ["All Partners", "Energy & Offshore", "Regulators & Class", "Shipbuilders & OEM"]

export default function OurPartners() {
  const [selectedCat, setSelectedCat] = useState("All Partners")

  const filteredPartners = strategicPartners.filter((p) => {
    if (selectedCat === "All Partners") return true
    return p.category === selectedCat
  })

  // Repeat items for continuous marquee loop
  const marqueePartners = [...strategicPartners, ...strategicPartners, ...strategicPartners]

  return (
    <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Trusted Network
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Industry Partners &amp; Alliances
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Muskmover collaborates with top energy majors, certified classification societies, and leading shipbuilders to power seamless offshore logistics.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = selectedCat === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Infinite Logo Marquee Ribbon */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16 relative overflow-hidden py-4 bg-slate-950/60 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            <div className="flex gap-8 items-center animate-marquee whitespace-nowrap">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center gap-3 shrink-0 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 group hover:border-orange-500/40 transition-all cursor-pointer shadow-sm"
                >
                  <div
                    className={`relative w-12 h-10 rounded-lg border shadow-sm shrink-0 overflow-hidden flex items-center justify-center ${partner.logoBg}`}
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-orange-400 transition-colors block">
                      {partner.shortName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block">
                      {partner.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {filteredPartners.map((partner, idx) => (
            <ScrollReveal key={partner.id} delay={idx * 0.05} direction="up">
              <div className="group bg-slate-800/50 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:bg-slate-800/90 flex flex-col justify-between h-full relative overflow-hidden">
                {/* Accent Gradient Line on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Top Badge & Logo Mark */}
                  <div className="flex items-center justify-between mb-5 gap-3">
                    <div
                      className={`relative w-28 h-16 rounded-xl border shadow-md group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center ${partner.logoBg}`}
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700/60 shrink-0">
                      {partner.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">{partner.role}</p>
                </div>

                <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                  </span>
                  <span className="text-slate-400 font-medium">{partner.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Footer Row */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-0.5">
                  Are you a vessel owner or equipment manufacturer?
                </h4>
                <p className="text-slate-400 text-xs md:text-sm">
                  Join Muskmover&apos;s verified partner network and list your fleet for long-term charters.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/20 transition-all shrink-0 flex items-center gap-2 group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
