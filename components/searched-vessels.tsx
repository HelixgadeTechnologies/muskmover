import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Bookmark, Gauge, Fuel, Settings, ArrowRight, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "./scroll-reveal"

const tabs = ["In Stock", "Rental", "Purchase"]

interface Vessel {
  id: number
  name: string
  details: string
  status: string
  yearManufactured: number
  weight: number
  category: string
  images: string | null
}

export default function SearchedVessels() {
  const [activeTab, setActiveTab] = useState("In Stock")
  const [vessels, setVessels] = useState<Vessel[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 4

  useEffect(() => {
    async function fetchVessels() {
      try {
        const response = await fetch('https://musk-backend.onrender.com/api/equipment')
        const result = await response.json()
        if (result.success) {
          // Filter for vessels category or things that look like vessels
          const allVessels = result.data.filter((item: Vessel) => 
            item.category.toLowerCase() === 'vessels' || 
            item.name.toLowerCase().includes('vessel') ||
            item.name.toLowerCase().includes('ship') ||
            item.name.toLowerCase().includes('marina')
          )
          setVessels(allVessels)
        }
      } catch (error) {
        console.error('Error fetching vessels:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchVessels()
  }, [])

  // Reset page when tab changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const filteredVessels = vessels.filter(v => {
    const status = v.status.toLowerCase()
    if (activeTab === "In Stock") return status === "available"
    if (activeTab === "Rental") return status === "rented"
    if (activeTab === "Purchase") return false // Assuming no purchase mapping currently
    return false
  })

  // Carousel Logic
  const maxIndex = Math.max(0, filteredVessels.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  // Helper to get image URL
  const getImageUrl = (imageStr: string | null) => {
    if (!imageStr) return "/large-container-ship.jpg"
    const firstImage = imageStr.split(',')[0].trim()
    // Handle blob URLs by falling back to a placeholder if it's not a real URL
    if (firstImage.startsWith('blob:')) return "/large-container-ship.jpg"
    return firstImage
  }

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-8 tracking-tight">The Most Searched Vessels</h2>
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
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" 
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">Loading vessels...</p>
          </div>
        ) : (
          <>
            {/* Carousel Container */}
            <div className="relative mb-12 min-h-[400px]">
              {filteredVessels.length > 0 ? (
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex gap-6"
                    initial={false}
                    animate={{ x: `calc(-${currentIndex * (100 / (visibleCount))}%)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  >
                    {filteredVessels.map((vessel, i) => (
                      <div 
                        key={`${activeTab}-${vessel.id}`}
                        className="min-w-[calc(25%-18px)] flex-shrink-0 group flex flex-col bg-[#050B20] rounded-none overflow-hidden transition-all hover:shadow-2xl h-full border border-slate-800"
                      >
                        {/* Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={getImageUrl(vessel.images)}
                            alt={vessel.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {vessel.status.toLowerCase() === 'available' && (
                            <div className="absolute top-4 left-4 bg-green-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                              Available
                            </div>
                          )}
                          <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                            <Bookmark className="w-4 h-4 text-slate-900" />
                          </button>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-white text-[17px] font-bold mb-1 truncate">{vessel.name}</h3>
                          <p className="text-slate-400 text-[13px] mb-6 line-clamp-2 min-h-[40px]">{vessel.details}</p>

                          {/* Specs */}
                          <div className="grid grid-cols-2 gap-2 mb-8 border-t border-slate-800 pt-6">
                            <div className="flex flex-col items-center">
                              <Gauge className="w-4 h-4 text-slate-400 mb-2" />
                              <span className="text-[11px] text-slate-400 text-center">{vessel.yearManufactured || "N/A"}</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <Settings className="w-4 h-4 text-slate-400 mb-2" />
                              <span className="text-[11px] text-slate-400 text-center">{(vessel.weight / 1000).toFixed(1)}k tonnes</span>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-auto flex items-center justify-end border-t border-slate-800 pt-6">
                            <Link 
                              href={`/marketplace/category/${vessel.id}`}
                              className="flex items-center gap-2 text-white text-[13px] font-medium group/link hover:text-blue-400 transition-colors"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <p className="text-lg font-medium mb-2">No vessels found in this category</p>
                  <p className="text-sm">Try checking another tab or check back later.</p>
                </div>
              )}
            </div>

            {/* Carousel Navigation */}
            {filteredVessels.length > visibleCount && (
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
