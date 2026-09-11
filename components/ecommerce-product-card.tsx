"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bookmark, MapPin, Gauge, Settings, ArrowRight, CheckCircle2 } from "lucide-react"

export interface EcommerceProductCardProps {
  id: number | string
  title: string
  category: string
  details?: string
  image: string
  status?: string
  acquisitionType?: string // "LEASE ONLY" | "BUY OR LEASE" | "DIRECT PURCHASE"
  priceDisplay?: string
  year?: number | string
  weightOrCapacity?: string
  location?: string
  condition?: string
  isFeatured?: boolean
}

export default function EcommerceProductCard({
  id,
  title,
  category,
  details,
  image,
  status = "available",
  acquisitionType = "BUY OR LEASE",
  priceDisplay,
  year = 2022,
  weightOrCapacity = "N/A",
  location = "Port Harcourt",
  condition = "Excellent",
  isFeatured = false,
}: EcommerceProductCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Default fallback image if broken or null
  const formattedImage =
    !image || image.startsWith("blob:") ? "/large-container-ship.jpg" : image

  // Dynamic status tag styling
  const isAvailable = status.toLowerCase() === "available"

  return (
    <div className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col h-full relative">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <Image
          src={formattedImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay for Tag contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

        {/* Top Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10">
            {acquisitionType}
          </span>
          {isAvailable && (
            <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Available
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsBookmarked(!isBookmarked)
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all ${
            isBookmarked
              ? "bg-orange-600 text-white scale-110 shadow-lg"
              : "bg-white/80 text-slate-800 hover:bg-white hover:text-orange-600"
          }`}
          title="Bookmark Equipment"
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        {/* Location Tag at bottom of Image */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <MapPin className="w-3.5 h-3.5 text-orange-400" />
          <span>{location}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category Pill */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-1">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-slate-900 font-bold text-base leading-snug mb-1 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        {/* Short details */}
        {details && (
          <p className="text-slate-500 text-xs mb-4 line-clamp-2 min-h-[32px]">
            {details}
          </p>
        )}

        {/* Key Specs Row */}
        <div className="grid grid-cols-3 gap-1 py-3 px-2 bg-slate-50 rounded-xl border border-slate-100 mb-5 mt-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <Gauge className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-[10px] text-slate-400 font-medium">Year</span>
            <span className="text-[11px] font-bold text-slate-800">{year}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-x border-slate-200/60">
            <Settings className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-[10px] text-slate-400 font-medium">Capacity</span>
            <span className="text-[11px] font-bold text-slate-800 truncate max-w-full px-1">
              {weightOrCapacity}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-[10px] text-slate-400 font-medium">Condition</span>
            <span className="text-[11px] font-bold text-slate-800">{condition}</span>
          </div>
        </div>

        {/* Footer: Price & View Details Action */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
              Estimated Rate
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              {priceDisplay || "Inquire for Rate"}
            </span>
          </div>

          <Link
            href={`/marketplace/${id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm group/btn"
          >
            View Item
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
