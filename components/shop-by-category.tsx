"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Anchor, Ship, Settings, Compass, ShieldCheck, Waves, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import { API_ENDPOINTS } from "@/lib/api-config"

const categoryConfigs = [
  {
    id: "vessels",
    name: "Offshore Vessels & Fleet",
    icon: Ship,
    description: "PSVs, Tugboats, Barges, Crew Boats & Anchor Handlers",
    color: "from-blue-600/10 to-blue-50 border-blue-100 text-blue-700",
  },
  {
    id: "cargo-equipment",
    name: "Cargo & Heavy Equipment",
    icon: Anchor,
    description: "Anchor Winches, Deck Cranes, Rigging & Heavy Hoists",
    color: "from-orange-600/10 to-orange-50 border-orange-100 text-orange-700",
  },
  {
    id: "propulsion",
    name: "Engines & Propulsion",
    icon: Settings,
    description: "Marine Diesel Generators, CAT Engines & Thrusters",
    color: "from-emerald-600/10 to-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    id: "safety",
    name: "Safety & SOLAS Gear",
    icon: ShieldCheck,
    description: "SOLAS Lifeboats, Life Rafts, Immersion Suits & Fire Gear",
    color: "from-red-600/10 to-red-50 border-red-100 text-red-700",
  },
  {
    id: "diving-gear",
    name: "Diving & Subsea Gear",
    icon: Waves,
    description: "Work Class ROVs, Air Diving Spread & Compressors",
    color: "from-cyan-600/10 to-cyan-50 border-cyan-100 text-cyan-700",
  },
  {
    id: "navigation",
    name: "Navigation & Electronics",
    icon: Compass,
    description: "Marine Radar, AIS Transponder, Echo Sounders & GPS",
    color: "from-purple-600/10 to-purple-50 border-purple-100 text-purple-700",
  },
]

export default function ShopByCategory() {
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    async function loadCategoryCounts() {
      try {
        const [eqRes, vesselsRes] = await Promise.allSettled([
          fetch(API_ENDPOINTS.equipment.list).then((r) => r.json()),
          fetch(API_ENDPOINTS.vessels.list).then((r) => r.json()),
        ])

        const combined: any[] = []
        if (eqRes.status === "fulfilled" && eqRes.value) {
          const list = Array.isArray(eqRes.value.data)
            ? eqRes.value.data
            : Array.isArray(eqRes.value)
            ? eqRes.value
            : []
          combined.push(...list)
        }
        if (vesselsRes.status === "fulfilled" && vesselsRes.value) {
          const list = Array.isArray(vesselsRes.value.data)
            ? vesselsRes.value.data
            : Array.isArray(vesselsRes.value)
            ? vesselsRes.value
            : []
          combined.push(...list)
        }

        const map = new Map<string | number, any>()
        combined.forEach((item) => {
          if (item && item.id != null) map.set(item.id, item)
        })

        const tally: Record<string, number> = {}
        Array.from(map.values()).forEach((item: any) => {
          const cat = (item.category || item.type || "").toLowerCase().trim()
          const name = (item.name || "").toLowerCase()

          if (cat === "vessels" || cat.includes("vessel") || name.includes("vessel") || name.includes("ship") || name.startsWith("mv ")) {
            tally["vessels"] = (tally["vessels"] || 0) + 1
          } else if (cat.includes("cargo") || cat.includes("machinery")) {
            tally["cargo-equipment"] = (tally["cargo-equipment"] || 0) + 1
          } else if (cat.includes("propulsion") || cat.includes("engine") || cat.includes("generator")) {
            tally["propulsion"] = (tally["propulsion"] || 0) + 1
          } else if (cat.includes("safety") || cat.includes("solas")) {
            tally["safety"] = (tally["safety"] || 0) + 1
          } else if (cat.includes("diving")) {
            tally["diving-gear"] = (tally["diving-gear"] || 0) + 1
          } else if (cat.includes("navigation")) {
            tally["navigation"] = (tally["navigation"] || 0) + 1
          }
        })

        setCounts(tally)
      } catch (err) {
        console.error("Failed to fetch live category counts", err)
      }
    }

    loadCategoryCounts()
  }, [])

  const scrollToCategory = (categoryId: string) => {
    const section = document.getElementById(`category-section-${categoryId}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-16 px-4 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full mb-3 inline-block">
                E-Commerce Catalog
              </span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 tracking-tight">
                Shop Equipment &amp; Vessels by Category
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mt-1">
                Explore our comprehensive marine marketplace categorized for fast offshore deployment, sales, and rentals.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors group shrink-0"
            >
              View Full Marketplace Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-600" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryConfigs.map((cat, i) => {
            const Icon = cat.icon
            const count = counts[cat.id] || 0
            const countLabel = count > 0 ? `${count} ${count === 1 ? "Listing" : "Listings"} Available` : "Available On Request"
            const badgeLabel = count > 0 ? "Live Inventory" : "Catalog Ready"

            return (
              <ScrollReveal key={cat.id} delay={i * 0.08} direction="up">
                <div
                  onClick={() => scrollToCategory(cat.id)}
                  className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full overflow-hidden"
                >
                  {/* Subtle Gradient Accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.color} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 opacity-70`}
                  />

                  <div>
                    {/* Top row with Icon and Badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-orange-600 group-hover:scale-105 transition-all">
                        <Icon className="w-7 h-7 stroke-[1.75]" />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        count > 0 ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-slate-500 bg-slate-100 border-slate-200/60"
                      }`}>
                        {badgeLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className={`text-xs font-bold mb-3 ${count > 0 ? "text-orange-600" : "text-slate-400"}`}>
                      {countLabel}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                    <span>Browse Category Items</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-orange-600" />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
