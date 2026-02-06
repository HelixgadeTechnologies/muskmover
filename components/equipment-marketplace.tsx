"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Bookmark, Gauge, Fuel, Settings, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const equipment = [
  {
    name: "Crane",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    price: "$22,000",
    specs: { miles: "2500 Miles", fuel: "Diesel", transmission: "Manual" },
    image: "/marine-diesel-engine.jpg", // Reusing existing paths for now as place holders
  },
  {
    name: "Tug Boat",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    price: "$95,000",
    specs: { miles: "50 Miles", fuel: "Petrol", transmission: "Automatic" },
    image: "/large-container-ship.jpg",
  },
  {
    name: "Ship Crane",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD..",
    price: "$58,000",
    specs: { miles: "100 Miles", fuel: "Diesel", transmission: "Automatic" },
    image: "/large-cargo-ship.png",
  },
  {
    name: "Generator",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD..",
    price: "$45,000",
    specs: { miles: "15000 Miles", fuel: "Diesel", transmission: "CVT" },
    image: "/general-cargo-vessel.jpg",
    badge: "New"
  },
]

export default function EquipmentMarketplace() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-12 tracking-tight">EQUIPMENT MARKETPLACE</h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {equipment.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
              <div className="group flex flex-col bg-[#050B20] rounded-none overflow-hidden transition-all hover:shadow-2xl h-full">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 text-slate-900" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white text-[17px] font-bold mb-1">{item.name}</h3>
                  <p className="text-slate-400 text-[13px] mb-6 line-clamp-1">{item.subtitle}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-8 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center">
                      <Gauge className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{item.specs.miles}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Fuel className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{item.specs.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Settings className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{item.specs.transmission}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-6">
                    <span className="text-white text-[18px] font-bold">{item.price}</span>
                    <button className="flex items-center gap-2 text-white text-[13px] font-medium group/link">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
