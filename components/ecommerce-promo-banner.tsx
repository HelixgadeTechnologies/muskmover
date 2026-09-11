"use client"

import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, ArrowRight, Clock, Award } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function EcommercePromoBanner() {
  return (
    <section className="py-12 px-4 bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border border-slate-800 p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Background Graphic Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                Featured Lease Offer
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Long-Term Offshore Fleet Charters &amp; Heavy Rentals
              </h2>

              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                Save up to <span className="text-orange-400 font-bold">15% on long-term vessel leases</span> and heavy winches. Rapid mobilization across Niger Delta offshore sites with guaranteed technical uptime.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% Class &amp; NIMASA Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                  <Clock className="w-5 h-5 text-orange-400 shrink-0" />
                  <span>24-Hour Mobilization Response</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/marketplace?category=vessels"
                  className="px-7 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2 group"
                >
                  <span>Browse Available Fleet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-4 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition-all"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="relative z-10 w-full lg:w-96 h-64 lg:h-80 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shrink-0">
              <Image
                src="/large-cargo-ship.png"
                alt="Offshore Vessel Fleet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                <p className="text-white font-bold text-xs">DP2 Platform Supply Vessel</p>
                <p className="text-slate-400 text-[11px]">850 sqm deck space · 45 Pax Accommodation</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
