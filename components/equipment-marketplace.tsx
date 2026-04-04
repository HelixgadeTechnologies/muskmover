"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Bookmark, Gauge, Fuel, Settings, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "./scroll-reveal"

interface Equipment {
  id: number
  name: string
  details: string
  dailyRate: number
  yearManufactured: number
  condition: string
  weight: number
  images: string | string[] | null
}

export default function EquipmentMarketplace() {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 4

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

  // Carousel Logic
  const maxIndex = Math.max(0, equipmentList.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-12 tracking-tight uppercase">EQUIPMENT MARKETPLACE</h2>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center items-center py-20 min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        ) : (
          <>
            {/* Carousel Container */}
            <div className="relative mb-12 min-h-[400px]">
              {equipmentList.length > 0 ? (
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex gap-6"
                    initial={false}
                    animate={{ x: `calc(-${currentIndex * (100 / (visibleCount))}%)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  >
                    {equipmentList.map((item, i) => {
                      // Determine image
                      let imageUrl = "/marine-diesel-engine.jpg" // default placeholder
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

                      return (
                        <div key={item.id || i} className="w-[calc(25%-18px)] min-w-[calc(25%-18px)] flex-shrink-0 group flex flex-col bg-[#050B20] rounded-none overflow-hidden transition-all hover:shadow-2xl h-full border border-slate-800">
                          {/* Image Section */}
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={imageUrl}
                              alt={item.name || "Equipment"}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                              <Bookmark className="w-4 h-4 text-slate-900" />
                            </button>
                          </div>

                          {/* Content Section */}
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-white text-[17px] font-bold mb-1 line-clamp-1">{item.name}</h3>
                            <p className="text-slate-400 text-[13px] mb-6 line-clamp-1">{item.details || "Equipment Details"}</p>

                            {/* Specs */}
                            <div className="grid grid-cols-3 gap-2 mb-8 border-t border-slate-800 pt-6">
                              <div className="flex flex-col items-center">
                                <Gauge className="w-4 h-4 text-slate-400 mb-2" />
                                <span className="text-[11px] text-slate-400 text-center">{item.yearManufactured ? item.yearManufactured.toString() : "N/A"}</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <Fuel className="w-4 h-4 text-slate-400 mb-2" />
                                <span className="text-[11px] text-slate-400 text-center">{item.condition || "N/A"}</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <Settings className="w-4 h-4 text-slate-400 mb-2" />
                                <span className="text-[11px] text-slate-400 text-center min-h-[16.5px]">{item.weight ? `${item.weight} kg` : "N/A"}</span>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-auto flex items-center justify-end border-t border-slate-800 pt-6">
                              <Link href={`/marketplace/${item.id}`} className="flex items-center gap-2 text-white text-[13px] font-medium group/link hover:text-blue-400 transition-colors">
                                View Details
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <p className="text-lg font-medium mb-2">No equipment found</p>
                  <p className="text-sm">Please check back later.</p>
                </div>
              )}
            </div>

            {/* Carousel Navigation */}
            {equipmentList.length > visibleCount && (
              <ScrollReveal delay={0.4}>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 flex items-center justify-center border rounded-full transition-all ${
                      currentIndex === 0 ? 'border-slate-100 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-800'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`w-12 h-12 flex items-center justify-center border rounded-full transition-all ${
                      currentIndex >= maxIndex ? 'border-slate-100 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-800'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </ScrollReveal>
            )}
          </>
        )}
      </div>
    </section>
  )
}
