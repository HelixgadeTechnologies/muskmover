"use client"

import { ChevronLeft, ChevronRight, ChevronDown, Settings, MapPin, Gauge, Fuel, Users, Package, Shield } from "lucide-react"
import { useEffect, useState } from "react"
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
  }
]



interface EquipmentGridProps {
  selectedCategory: string
  searchQuery?: string
}

export default function EquipmentGrid({ selectedCategory, searchQuery = "" }: EquipmentGridProps) {
  const [equipmentList, setEquipmentList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    async function fetchEquipment() {
      try {
        const res = await fetch('https://musk-backend.onrender.com/api/equipment')
        const json = await res.json()
        const data = Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : []
        setEquipmentList(data)
      } catch (error) {
        console.error("Failed to fetch equipment", error)
      } finally {
        setLoading(false)
      }
    }
    fetchEquipment()
  }, [])

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  // Filtering logic
  const filteredList = equipmentList.filter(item => {
    // 1. Category Filter
    let matchesCategory = true
    if (selectedCategory !== "All" && selectedCategory !== "All Equipment") {
      const itemCat = (item.category || "").toLowerCase().trim()
      const selectedCat = selectedCategory.toLowerCase().trim()

      if (selectedCat === "cargo equipment") matchesCategory = itemCat === "cargo-equipment"
      else if (selectedCat === "diving gear") matchesCategory = itemCat === "diving-gear"
      else if (selectedCat === "others") matchesCategory = itemCat === "other"
      else matchesCategory = itemCat === selectedCat || itemCat === selectedCat.replace(/\s+/g, '-')
    }

    // 2. Search Query Filter
    let matchesSearch = true
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      const name = (item.name || "").toLowerCase()
      const details = (item.details || "").toLowerCase()
      const category = (item.category || "").toLowerCase()
      
      matchesSearch = name.includes(query) || details.includes(query) || category.includes(query)
    }

    return matchesCategory && matchesSearch
  })

  // Pagination logic
  const totalItems = filteredList.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredList.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="flex-1 space-y-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 mb-2">Marine Equipment Marketplace</h2>
          <p className="text-slate-500 font-medium">
            Showing {loading ? "..." : `${startIndex + 1}-${Math.min(endIndex, totalItems)} of ${totalItems}`} items available in Nigeria
          </p>
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
      {loading ? (
        <div className="flex justify-center items-center py-20 min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
        </div>
      ) : (
        <div className={currentItems.length > 0 ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "w-full"}>
          {currentItems.length > 0 ? currentItems.map((item, idx) => {
            // Determine image
            let imageUrl = "/marine-diesel-engine.jpg"
            if (item.images) {
              if (Array.isArray(item.images) && item.images.length > 0 && typeof item.images[0] === 'string') {
                imageUrl = item.images[0]
              } else if (typeof item.images === 'string' && item.images.trim() !== '') {
                try {
                  const parsed = JSON.parse(item.images)
                  if (Array.isArray(parsed) && parsed.length > 0) imageUrl = parsed[0]
                  else if (typeof parsed === 'string') imageUrl = parsed
                } catch {
                  const splitImgs = item.images.split(',').map((u: string) => u.trim()).filter(Boolean)
                  if (splitImgs.length > 0) imageUrl = splitImgs[0]
                }
              }
            }

            const isNew = item.condition && item.condition.toLowerCase() === 'new'
            const tags = item.category ? [item.category.toUpperCase()] : ["GENERAL"]
            const specs = [
              { icon: Gauge, label: "Year", value: item.yearManufactured ? item.yearManufactured.toString() : "N/A" },
              { icon: Settings, label: "Weight", value: item.weight ? `${item.weight.toLocaleString()} kg` : "N/A" },
              { icon: MapPin, label: "Condition", value: item.condition || "N/A" },
            ]

            return (
              <EquipmentCard 
                key={item.id || idx} 
                id={item.id}
                title={item.name || "Equipment"}
                image={imageUrl}
                tags={tags}
                isNew={isNew}
                specs={specs as any}
              />
            )
          }) : (
            <div className="flex flex-col items-center justify-center py-24 text-center bg-white border border-slate-100 rounded-3xl shadow-sm px-6">
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-orange-100 animate-ping opacity-20" />
                <Package className="w-10 h-10 text-slate-300 relative z-10" />
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3">No Items Found</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed font-medium">
                We couldn&apos;t find any items in <span className="text-orange-600 font-bold decoration-orange-200 decoration-2 underline-offset-4 underline">{selectedCategory}</span>. 
                Our inventory is updated daily, so check back soon or try selecting a different category.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-8 h-14 bg-slate-900 text-white font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-12 flex items-center justify-center gap-3">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center transition-all ${
              currentPage === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {getPageNumbers().map((page, idx) => (
            page === '...' ? (
              <span key={`dots-${idx}`} className="px-2 text-slate-400 font-bold">...</span>
            ) : (
              <button 
                key={`page-${page}`}
                onClick={() => handlePageChange(page as number)}
                className={`w-12 h-12 rounded-xl font-bold flex items-center justify-center transition-all ${
                  currentPage === page 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20' 
                    : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            )
          ))}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center transition-all ${
              currentPage === totalPages ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
