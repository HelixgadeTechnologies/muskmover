"use client"

import { Filter, ChevronDown, Check } from "lucide-react"

const categories = [
  { id: 'all', name: 'All Equipment', icon: '📦' },
  { id: 'cargo-equipment', name: 'Cargo equipment', icon: '🏗️' },
  { id: 'vessels', name: 'Vessels', icon: '🚢' },
  { id: 'diving-gear', name: 'Diving Gear', icon: '🤿' },
  { id: 'navigation', name: 'Navigation', icon: '🧭' },
  { id: 'safety', name: 'Safety', icon: '🛡️' },
  { id: 'propulsion', name: 'Propulsion', icon: '⚙️' },
  { id: 'other', name: 'Others', icon: '📁' },
]

const acquisitionTypes = [
  { id: 'direct', label: 'Direct Purchase' },
  { id: 'lease', label: 'Long-term Lease' },
]

interface FilterSidebarProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export default function FilterSidebar({ selectedCategory, setSelectedCategory }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-10">
      <div className="flex items-center gap-2 text-slate-500 font-bold text-[13px] tracking-widest uppercase mb-8">
        <Filter className="w-4 h-4" />
        <span>Filter Results</span>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        <h4 className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Categories</h4>
        <div className="space-y-2">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.name.toLowerCase() || 
                           (selectedCategory === "All" && cat.id === "all") ||
                           selectedCategory.toLowerCase() === cat.id.toLowerCase()

            return (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  isActive ? 'bg-orange-50 text-orange-700' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-[14px] font-semibold">{cat.name}</span>
                </div>
                {isActive && (
                  <span className="bg-orange-600 w-2 h-2 rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="h-px bg-slate-100" />

      {/* Acquisition Type */}
      <div className="space-y-6">
        <h4 className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Acquisition Type</h4>
        <div className="space-y-4">
          {acquisitionTypes.map((type) => (
            <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" defaultChecked={type.id === 'direct'} />
                <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-all" />
                <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-[14px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Manufacturer */}
      <div className="space-y-6">
        <h4 className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Manufacturer</h4>
        <div className="relative">
          <select className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-[14px] font-semibold appearance-none outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Manufacturers</option>
            <option>Caterpillar</option>
            <option>Schlumberger</option>
            <option>TechnipFMC</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full h-12 border border-slate-200 rounded-lg text-slate-500 font-bold text-[14px] hover:bg-slate-50 transition-colors">
        Clear All Filters
      </button>
    </aside>
  )
}
