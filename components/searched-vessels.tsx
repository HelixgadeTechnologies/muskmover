"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Bookmark, Gauge, Fuel, Settings, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const tabs = ["In Stock", "Rental", "Purchase"]

const vessels = [
  // In Stock
  {
    name: "Ford Transit – 2021",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    price: "$22,000",
    specs: { miles: "2500 Miles", fuel: "Diesel", transmission: "Manual" },
    image: "/large-container-ship.jpg",
    category: "In Stock"
  },
  {
    name: "New GLC – 2023",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    price: "$95,000",
    specs: { miles: "50 Miles", fuel: "Petrol", transmission: "Automatic" },
    image: "/oil-tanker-ship.jpg",
    badge: "Low Mileage",
    category: "In Stock"
  },
  {
    name: "Audi A6 3.5 – New",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD..",
    price: "$58,000",
    specs: { miles: "100 Miles", fuel: "Petrol", transmission: "Automatic" },
    image: "/large-cargo-ship.png",
    category: "In Stock"
  },
  {
    name: "Corolla Altis – 2023",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD..",
    price: "$45,000",
    specs: { miles: "15000 Miles", fuel: "Petrol", transmission: "CVT" },
    image: "/general-cargo-vessel.jpg",
    category: "In Stock"
  },

  // Rental
  {
    name: "Voyager XT – 2022",
    subtitle: "Eco-friendly long-range explorer vessel.",
    price: "$1,500/day",
    specs: { miles: "1200 Miles", fuel: "Hybrid", transmission: "Auto" },
    image: "/large-container-ship.jpg",
    category: "Rental"
  },
  {
    name: "Marine Pro 500",
    subtitle: "Heavy duty rental for industrial use.",
    price: "$2,800/day",
    specs: { miles: "300 Miles", fuel: "Diesel", transmission: "Manual" },
    image: "/oil-tanker-ship.jpg",
    category: "Rental"
  },
  {
    name: "Coastal Star",
    subtitle: "Luxury coastal rental for events.",
    price: "$5,000/day",
    specs: { miles: "500 Miles", fuel: "Petrol", transmission: "Auto" },
    image: "/large-cargo-ship.png",
    category: "Rental"
  },
  {
    name: "Eco-Cruise Alpha",
    subtitle: "Electric powered short-range cruiser.",
    price: "$800/day",
    specs: { miles: "80 Miles", fuel: "Electric", transmission: "Digital" },
    image: "/general-cargo-vessel.jpg",
    category: "Rental"
  },

  // Purchase
  {
    name: "Summit Carrier",
    subtitle: "Brand new deep-sea bulk carrier.",
    price: "$1.2M",
    specs: { miles: "0 Miles", fuel: "LNG", transmission: "Auto" },
    image: "/large-container-ship.jpg",
    category: "Purchase"
  },
  {
    name: "Horizon Tanker 2024",
    subtitle: "Next-gen fuel efficient crude carrier.",
    price: "$2.5M",
    specs: { miles: "0 Miles", fuel: "Diesel", transmission: "Auto" },
    image: "/oil-tanker-ship.jpg",
    badge: "Limited Edition",
    category: "Purchase"
  },
  {
    name: "Pacific Link V2",
    subtitle: "Scalable container ship for logistics.",
    price: "$1.8M",
    specs: { miles: "0 Miles", fuel: "Diesel", transmission: "Manual" },
    image: "/large-cargo-ship.png",
    category: "Purchase"
  },
  {
    name: "Global Express III",
    subtitle: "Fastest general cargo vessel in class.",
    price: "$3.1M",
    specs: { miles: "5 Miles", fuel: "Petrol", transmission: "Manual" },
    image: "/general-cargo-vessel.jpg",
    category: "Purchase"
  }
]

export default function SearchedVessels() {
  const [activeTab, setActiveTab] = useState("In Stock")

  const filteredVessels = vessels.filter(v => v.category === activeTab)

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-8">The Most Searched Vessels</h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-8 mb-12 border-b border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[15px] font-medium transition-all relative ${activeTab === tab ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 min-h-[500px]">
          {filteredVessels.map((vessel, i) => (
            <ScrollReveal key={`${activeTab}-${i}`} delay={0.2 + (i % 4) * 0.1}>
              <div className="group flex flex-col bg-[#050B20] rounded-none overflow-hidden transition-all hover:shadow-2xl h-full">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vessel.image}
                    alt={vessel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {vessel.badge && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {vessel.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 text-slate-900" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white text-[17px] font-bold mb-1">{vessel.name}</h3>
                  <p className="text-slate-400 text-[13px] mb-6 line-clamp-1">{vessel.subtitle}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-8 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center">
                      <Gauge className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{vessel.specs.miles}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Fuel className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{vessel.specs.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Settings className="w-4 h-4 text-slate-400 mb-2" />
                      <span className="text-[11px] text-slate-400 text-center">{vessel.specs.transmission}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-6">
                    <span className="text-white text-[18px] font-bold">{vessel.price}</span>
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

        {/* Carousel Navigation */}
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
