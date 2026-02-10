"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MarketplaceHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 px-4 md:px-8 h-20 flex items-center justify-between gap-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="w-10 h-10 bg-[#050B20] flex items-center justify-center rounded-lg">
          <Image src="/icon.svg" alt="MuskMover" width={24} height={24} className="invert" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-slate-900 leading-none">MUSK MOVER</h1>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest">NIGERIA LIMITED</p>
        </div>
      </Link>

      {/* Search Bar - Mockup version */}
      <div className="flex-1 max-w-2xl relative hidden md:block">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input 
          type="text" 
          placeholder="Search for vessels, drilling tools, or safety gear..."
          className="w-full h-12 bg-slate-100 border-none rounded-lg pl-12 pr-4 text-[15px] focus:ring-2 focus:ring-blue-500 transition-all outline-none"
        />
      </div>

      {/* Navigation & Actions */}
      <div className="flex items-center gap-4 lg:gap-8">
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/marketplace" className="text-[15px] font-semibold text-slate-600 hover:text-slate-900">Marketplace</Link>
          <Link href="/services" className="text-[15px] font-semibold text-slate-600 hover:text-slate-900">Services</Link>
          <Link href="/about" className="text-[15px] font-semibold text-slate-600 hover:text-slate-900">Company</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <User className="w-5 h-5" />
            <span className="text-[15px] font-semibold hidden sm:inline">Sign in</span>
          </button>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 h-11 text-[14px] font-bold rounded-lg shadow-lg shadow-blue-500/20">
            List Equipment
          </Button>
        </div>
      </div>
    </header>
  )
}
