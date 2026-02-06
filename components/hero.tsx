"use client"

import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

export default function Hero() {
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
        <div className="absolute inset-0 bg-slate-900/10" />
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
          <div className="max-w-4xl mx-auto bg-white rounded-full shadow-xl p-1.5 sm:p-2 pl-4 sm:pl-8 flex items-center w-full">
            <div className="flex-1 flex items-center justify-between group cursor-pointer pr-2 sm:pr-6">
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-[10px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 truncate w-full">Vessel</span>
                {/* <span className="text-[15px] font-medium text-slate-700">Any Type</span> */}
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 ml-1" />
            </div>

            <div className="w-px h-8 sm:h-10 bg-slate-200" />

            <div className="flex-1 flex items-center justify-between group cursor-pointer px-2 sm:px-6">
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-[10px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 truncate w-full">Makes</span>
                {/* <span className="text-[15px] font-medium text-slate-700">All Makes</span> */}
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 ml-1" />
            </div>

            <div className="w-px h-8 sm:h-10 bg-slate-200" />

            <div className="flex-1 flex items-center justify-between group cursor-pointer px-2 sm:px-6">
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-[10px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 truncate w-full">Models</span>
                {/* <span className="text-[15px] font-medium text-slate-700">All Models</span> */}
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 ml-1" />
            </div>

            <Button className="bg-[#FF3B30] hover:bg-[#E03429] rounded-full w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] flex items-center justify-center p-0 ml-1 sm:ml-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20 shrink-0">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
