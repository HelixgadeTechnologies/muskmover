"use client"

import { ChevronLeft, ChevronRight, ChevronDown, Settings, MapPin, Gauge, Fuel, Users, Package, Shield } from "lucide-react"
import EquipmentCard from "./equipment-card"

const mockItems = [
  {
    title: "Heavy Duty Anchor Handling Winch",
    image: "/ship-anchor-system.jpg",
    tags: ["BUY OR LEASE"],
    isNew: true,
    specs: [
      { icon: Settings, label: "Load Capacity", value: "250 Tons" },
      { icon: Gauge, label: "Engine", value: "4500HP Diesel" },
      { icon: MapPin, label: "Location", value: "Port Harcourt" },
    ],
    price: "₦45,000,000",
    priceLabel: "STARTING FROM"
  },
  {
    title: "DP2 Platform Supply Vessel (PSV)",
    image: "/large-cargo-ship.png",
    tags: ["LEASE ONLY"],
    isNew: false,
    specs: [
        { icon: Package, label: "Deck Area", value: "850 sqm" },
        { icon: Users, label: "Accommodation", value: "45 pax" },
        { icon: MapPin, label: "Location", value: "Lagos Free Zone" },
    ],
    price: "₦1,200,000",
    priceLabel: "DAY RATE"
  },
  {
    title: "Work Class Subsea ROV Unit",
    image: "/large-container-ship.jpg",
    tags: ["BUY ONLY"],
    isNew: true,
    specs: [
        { icon: Gauge, label: "Depth Rating", value: "3,000m" },
        { icon: Settings, label: "Cameras", value: "4K UHD Triple" },
        { icon: MapPin, label: "Location", value: "Warri Hub" },
    ],
    price: "₦85,000,000",
    priceLabel: "FULL UNIT PRICE"
  },
  {
    title: "CAT 3516B Marine Power System",
    image: "/marine-diesel-engine.jpg",
    tags: ["BUY OR LEASE"],
    isNew: true,
    specs: [
        { icon: Fuel, label: "Output", value: "2000 ekW" },
        { icon: Gauge, label: "RPM", value: "1200 - 1800" },
        { icon: MapPin, label: "Location", value: "Port Harcourt" },
    ],
    price: "₦22,500,000",
    priceLabel: "EX-WORKS PRICE"
  },
  {
    title: "High-Pressure Mud Pump F-1600",
    image: "/hydraulic-pump-equipment.jpg",
    tags: ["LEASE ONLY"],
    isNew: false,
    specs: [
        { icon: Gauge, label: "Pressure", value: "5000 PSI" },
        { icon: Settings, label: "Stroke Length", value: "12\"" },
        { icon: MapPin, label: "Location", value: "Warri Hub" },
    ],
    price: "₦3,500,000",
    priceLabel: "MONTHLY LEASE"
  },
  {
    title: "TEMPSC Lifeboat System (80 Pax)",
    image: "/large-cargo-ship.png",
    tags: ["BUY NOW"],
    isNew: true,
    specs: [
        { icon: Users, label: "Capacity", value: "80 Persons" },
        { icon: Shield, label: "SOLAS Approved", value: "Yes" },
        { icon: MapPin, label: "Location", value: "Lagos Port" },
    ],
    price: "₦12,400,000",
    priceLabel: "LIST PRICE"
  }
]



export default function EquipmentGrid() {
  return (
    <div className="flex-1 space-y-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 mb-2">Marine Equipment Marketplace</h2>
          <p className="text-slate-500 font-medium">Showing 1,240 items available in Nigeria</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm font-bold">Sort by:</span>
          <button className="flex items-center gap-4 px-6 h-12 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm">
            Latest Arrivals
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {mockItems.map((item, idx) => (
          <EquipmentCard key={idx} {...item} specs={item.specs as any} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pt-12 flex items-center justify-center gap-3">
        <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center shadow-lg shadow-orange-500/20">
          1
        </button>
        <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-50 transition-all">
          2
        </button>
        <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-50 transition-all">
          3
        </button>
        <span className="px-2 text-slate-400 font-bold">...</span>
        <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-50 transition-all">
          12
        </button>
        <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
