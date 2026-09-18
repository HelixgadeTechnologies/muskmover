"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, Ship, Package, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"
import { API_ENDPOINTS } from "@/lib/api-config"

interface SearchItem {
  id: number | string
  name: string
  category: string
  details?: string
  image: string
  status: string
  type: "vessel" | "equipment"
}

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")
  const [allItems, setAllItems] = useState<SearchItem[]>([])
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const router = useRouter()
  const searchContainerRef = useRef<HTMLDivElement>(null)

  // Fetch vessels & equipment from backend API
  useEffect(() => {
    async function loadDatabaseItems() {
      setLoading(true)
      try {
        const [vesselsRes, eqRes] = await Promise.allSettled([
          fetch(API_ENDPOINTS.vessels.list).then((r) => r.json()),
          fetch(API_ENDPOINTS.equipment.list).then((r) => r.json()),
        ])

        const combined: SearchItem[] = []

        if (vesselsRes.status === "fulfilled" && vesselsRes.value?.success && Array.isArray(vesselsRes.value?.data)) {
          vesselsRes.value.data.forEach((item: any) => {
            let img = "/large-cargo-ship.png"
            if (item.images) {
              const first = item.images.split(",")[0].trim()
              if (first && !first.startsWith("blob:")) img = first
            }
            combined.push({
              id: item.id,
              name: item.name || "Offshore Vessel",
              category: item.type || item.category || "Vessels",
              details: item.details || "Offshore marine vessel",
              image: img,
              status: item.status || "Available",
              type: "vessel",
            })
          })
        }

        if (eqRes.status === "fulfilled" && eqRes.value?.success && Array.isArray(eqRes.value?.data)) {
          eqRes.value.data.forEach((item: any) => {
            let img = "/marine-diesel-engine.jpg"
            if (item.images) {
              if (Array.isArray(item.images) && item.images.length > 0) img = item.images[0]
              else if (typeof item.images === "string") {
                const first = item.images.split(",")[0].trim()
                if (first && !first.startsWith("blob:")) img = first
              }
            }
            combined.push({
              id: item.id,
              name: item.name || "Equipment Item",
              category: item.category || "Equipment",
              details: item.details || "Offshore equipment asset",
              image: img,
              status: item.status || "Available",
              type: "equipment",
            })
          })
        }

        if (combined.length > 0) {
          // Deduplicate by ID
          const map = new Map<string | number, SearchItem>()
          combined.forEach((i) => map.set(i.id, i))
          setAllItems(Array.from(map.values()))
        }
      } catch (error) {
        console.error("Error fetching database items for search:", error)
      } finally {
        setLoading(false)
      }
    }

    loadDatabaseItems()
  }, [])

  // Filter items in real time based on search term
  useEffect(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      setFilteredResults([])
      setIsOpen(false)
      setSelectedIndex(-1)
      return
    }

    const matches = allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.details && item.details.toLowerCase().includes(query))
    )

    setFilteredResults(matches)
    setIsOpen(true)
    setSelectedIndex(-1)
  }, [searchTerm, allItems])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Direct Item Navigation
  const navigateToItem = useCallback(
    (item: SearchItem) => {
      setIsOpen(false)
      router.push(`/marketplace/${item.id}`)
    },
    [router]
  )

  // Handle Search Submission
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    const query = searchTerm.trim()
    if (!query) {
      router.push(`/marketplace`)
      return
    }

    // If an item is selected via keyboard arrow navigation
    if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
      navigateToItem(filteredResults[selectedIndex])
      return
    }

    // Check if there is an exact or top single match in database
    if (filteredResults.length > 0) {
      navigateToItem(filteredResults[0])
    } else {
      router.push(`/marketplace?search=${encodeURIComponent(query)}`)
    }
  }

  // Keyboard Navigation Handlers
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1))
    } else if (e.key === "Escape") {
      setIsOpen(false)
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
        e.preventDefault()
        navigateToItem(filteredResults[selectedIndex])
      }
    }
  }

  return (
    <section className="relative h-[620px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-ocean.jpg"
          alt="Ocean Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/20 backdrop-brightness-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="text-[44px] md:text-[58px] font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Your Marine Fleet, On Demand
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <p className="text-[17px] md:text-[20px] text-slate-700 font-semibold mb-12 max-w-2xl mx-auto">
            The World&apos;s Largest Marketplace for Vessel Rentals &amp; Marine Equipment
          </p>
        </ScrollReveal>

        {/* Search Bar Container with Floating Dropdown */}
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <div ref={searchContainerRef} className="max-w-3xl mx-auto relative z-30">
            <form
              onSubmit={handleSearch}
              className="bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-2 pl-8 flex items-center w-full group focus-within:ring-4 focus-within:ring-orange-500/20 transition-all border border-slate-200/80 focus-within:border-orange-500"
            >
              <div className="flex-1 flex flex-col items-start overflow-hidden">
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                  <Search className="w-3 h-3 text-orange-500 inline" />
                  Search Equipment or Vessels Database
                </span>
                <input
                  type="text"
                  placeholder="Ex. SS Marina, Hydraulic Pump, PSV, Anchor Winch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    if (searchTerm.trim() && filteredResults.length > 0) setIsOpen(true)
                  }}
                  className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-medium pb-1"
                />
              </div>

              <Button
                type="submit"
                className="bg-[#FF3B30] hover:bg-[#E03429] rounded-full w-[54px] h-[54px] sm:w-[64px] sm:h-[64px] flex items-center justify-center p-0 ml-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/30 shrink-0"
              >
                <Search className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </Button>
            </form>

            {/* Real-time Autocomplete Results Dropdown */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 text-left max-h-[380px] overflow-y-auto divide-y divide-slate-100">
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {filteredResults.length} Database Match{filteredResults.length === 1 ? "" : "es"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    Click item to view details directly
                  </span>
                </div>

                {filteredResults.length > 0 ? (
                  filteredResults.map((item, idx) => {
                    const isSelected = selectedIndex === idx
                    return (
                      <div
                        key={item.id}
                        onClick={() => navigateToItem(item)}
                        className={`p-3.5 flex items-center justify-between gap-4 cursor-pointer transition-all ${
                          isSelected
                            ? "bg-orange-50/90 text-orange-950"
                            : "hover:bg-slate-50 text-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 overflow-hidden">
                          {/* Item Thumbnail */}
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="overflow-hidden">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[10px] font-black uppercase text-orange-600 tracking-wider">
                                {item.category}
                              </span>
                              <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                                {item.status}
                              </span>
                            </div>
                            <h4 className="font-bold text-sm text-slate-900 truncate">
                              {item.name}
                            </h4>
                            {item.details && (
                              <p className="text-xs text-slate-500 truncate">{item.details}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-bold text-orange-600 shrink-0 bg-orange-100/60 px-3 py-1.5 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className="p-6 text-center text-slate-500">
                    <p className="text-sm font-semibold">No direct item match found.</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Press Enter to perform a broad marketplace search for &ldquo;{searchTerm}&rdquo;.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
