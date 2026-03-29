"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/marketplace/category?search=${encodeURIComponent(searchTerm.trim())}`)
    } else {
      router.push(`/marketplace/category`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-ocean.jpg"
          alt="Ocean Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="text-[44px] md:text-[56px] font-bold text-slate-900 mb-6 leading-tight">
            Your Marine Fleet, On Demand
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <p className="text-[17px] md:text-[19px] text-slate-600 mb-12 max-w-2xl mx-auto">
            The World&apos;s Largest Marketplace for Vessel Rentals &amp; Marine Equipment
          </p>
        </ScrollReveal>

        {/* Pill-Shaped Search Bar */}
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <form 
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto bg-white rounded-full shadow-2xl p-2 pl-8 flex items-center w-full group focus-within:ring-2 focus-within:ring-red-500/20 transition-all border border-transparent focus-within:border-red-500/30"
          >
            <div className="flex-1 flex flex-col items-start overflow-hidden">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Search Equipment or Vessels</span>
              <input
                type="text"
                placeholder="Ex. SS Marina, Hydraulic Pump, PSV..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-slate-800 placeholder:text-slate-300 placeholder:font-medium pb-1"
              />
            </div>

            <Button 
              type="submit"
              className="bg-[#FF3B30] hover:bg-[#E03429] rounded-full w-[54px] h-[54px] sm:w-[64px] sm:h-[64px] flex items-center justify-center p-0 ml-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/30 shrink-0"
            >
              <Search className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
