"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Loader2, Package, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "./scroll-reveal"
import EcommerceProductCard from "./ecommerce-product-card"
import { API_ENDPOINTS } from "@/lib/api-config"

export interface CategoryProductSectionProps {
  categoryId: string
  title: string
  subtitle: string
  subcategories?: string[]
  fallbackItems?: any[]
  bgDark?: boolean
}

export default function CategoryProductSection({
  categoryId,
  title,
  subtitle,
  subcategories = ["All"],
  fallbackItems = [],
  bgDark = false,
}: CategoryProductSectionProps) {
  const [activeSubcat, setActiveSubcat] = useState(subcategories[0] || "All")
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategoryItems() {
      try {
        let endpoint = API_ENDPOINTS.equipment.list
        if (categoryId === "vessels") {
          endpoint = API_ENDPOINTS.vessels.list
        }

        const res = await fetch(endpoint)
        const result = await res.json()

        let fetchedList: any[] = []
        if (result.success && Array.isArray(result.data)) {
          fetchedList = result.data
        } else if (Array.isArray(result)) {
          fetchedList = result
        }

        // Filter by category if not fetching vessels list endpoint directly
        if (categoryId !== "vessels" && fetchedList.length > 0) {
          fetchedList = fetchedList.filter((item: any) => {
            const cat = (item.category || "").toLowerCase()
            return (
              cat === categoryId.toLowerCase() ||
              cat.includes(categoryId.toLowerCase()) ||
              (categoryId === "cargo-equipment" && cat.includes("cargo")) ||
              (categoryId === "safety" && (cat.includes("safety") || cat.includes("navigation")))
            )
          })
        }

        // Map items to uniform structure
        const mapped = fetchedList.map((item: any) => {
          let imageUrl = "/large-container-ship.jpg"
          if (item.images) {
            if (Array.isArray(item.images) && item.images.length > 0) {
              imageUrl = item.images[0]
            } else if (typeof item.images === "string") {
              const first = item.images.split(",")[0].trim()
              if (first && !first.startsWith("blob:")) imageUrl = first
            }
          }

          return {
            id: item.id,
            title: item.name || "Equipment Item",
            category: item.category || item.type || categoryId.toUpperCase(),
            details: item.details || item.description || "Offshore certified marine asset",
            image: imageUrl,
            status: item.status || "available",
            acquisitionType: item.acquisitionType || "LEASE OR BUY",
            priceDisplay: item.dailyRate ? `₦${Number(item.dailyRate).toLocaleString()} / day` : "Contact for Rate",
            year: item.yearBuilt || item.yearManufactured || 2022,
            weightOrCapacity: item.weight ? `${(item.weight / 1000).toFixed(1)}k tonnes` : item.capacity || "Standard",
            location: item.location || "Port Harcourt Hub",
            condition: item.condition || "Operational",
          }
        })

        // Merge with fallback items if backend has fewer items
        if (mapped.length > 0) {
          setItems([...mapped, ...fallbackItems.slice(mapped.length)])
        } else {
          setItems(fallbackItems)
        }
      } catch (err) {
        console.error(`Failed to load category items for ${categoryId}:`, err)
        setItems(fallbackItems)
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryItems()
  }, [categoryId, fallbackItems])

  // Filter by active subcategory pill
  const displayedItems = items.filter((item) => {
    if (activeSubcat === "All") return true
    const text = (item.title + " " + item.category + " " + (item.details || "")).toLowerCase()
    return text.includes(activeSubcat.toLowerCase())
  })

  return (
    <section
      id={`category-section-${categoryId}`}
      className={`py-20 px-4 border-b border-slate-100 ${
        bgDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                  Featured Collection
                </span>
              </div>
              <h2
                className={`text-[30px] md:text-[38px] font-extrabold tracking-tight ${
                  bgDark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
              <p
                className={`text-sm md:text-base max-w-2xl mt-1 ${
                  bgDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {subtitle}
              </p>
            </div>

            <Link
              href={`/marketplace?category=${encodeURIComponent(categoryId)}`}
              className={`inline-flex items-center gap-2 text-sm font-bold transition-all group shrink-0 ${
                bgDark ? "text-orange-400 hover:text-orange-300" : "text-slate-900 hover:text-orange-600"
              }`}
            >
              <span>Explore All {title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Subcategory Filter Tabs */}
        {subcategories.length > 1 && (
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              {subcategories.map((subcat) => {
                const isActive = activeSubcat === subcat
                return (
                  <button
                    key={subcat}
                    onClick={() => setActiveSubcat(subcat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? bgDark
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                          : "bg-slate-900 text-white shadow-md"
                        : bgDark
                        ? "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {subcat}
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Product Cards Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 min-h-[350px]">
            <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-3" />
            <p className="text-slate-400 text-sm font-medium">Loading products...</p>
          </div>
        ) : displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.slice(0, 8).map((item, idx) => (
              <ScrollReveal key={item.id || idx} delay={idx * 0.05} direction="up">
                <EcommerceProductCard
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  details={item.details}
                  image={item.image}
                  status={item.status}
                  acquisitionType={item.acquisitionType}
                  priceDisplay={item.priceDisplay}
                  year={item.year}
                  weightOrCapacity={item.weightOrCapacity}
                  location={item.location}
                  condition={item.condition}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-slate-300 rounded-2xl p-8">
            <Package className="w-12 h-12 text-slate-300 mb-3" />
            <h4 className="text-lg font-bold text-slate-700">No items found in this section</h4>
            <p className="text-slate-500 text-xs mt-1">Try selecting another subcategory tab.</p>
          </div>
        )}
      </div>
    </section>
  )
}
