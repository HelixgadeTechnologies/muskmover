"use client"

import Link from "next/link"
import Image from "next/image"
import { Anchor, ShieldCheck, Clock, Award, ArrowRight, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function MarineServicesHero({ onOpenRfq }: { onOpenRfq?: (serviceTitle?: string) => void }) {
  return (
    <section className="relative bg-[#050B20] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-ocean.jpg"
          alt="Muskmover Marine Operations"
          fill
          priority
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B20] via-[#050B20]/90 to-[#050B20]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Verified Oilfield & Marine Contractor</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
                Integrated Marine, <span className="text-red-500">Offshore Support</span> & Industrial Supply
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
                From specialized vessel chartering and rig deployment to NSCDC-licensed pipeline security, petroleum haulage, certified lab chemicals, and mechanical flow hardware—Muskmover Ltd delivers end-to-end operational capacity.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  onClick={() => onOpenRfq ? onOpenRfq("General Marine Services Inquiry") : null}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 h-12 rounded-none transition-all shadow-lg shadow-red-600/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Request Service Proposal (RFQ)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <a
                  href="#service-catalog"
                  className="inline-flex items-center justify-center px-6 h-12 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-colors bg-slate-900/60 backdrop-blur-sm"
                >
                  Explore All 6 Divisions
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Offshore Readiness</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">NSCDC</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Licensed Security</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">Up to 12&quot;</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Valves & Flanges</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Class & MWS Aligned</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Side Feature Highlights */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
                
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-500" />
                  <span>Why Work With Muskmover?</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-white block">Full Operational Coverage</strong>
                      Vessel fleet, offshore mooring, security escorts, road tankers, and consumable parts under one contract.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-white block">Regulatory & Environmental Compliance</strong>
                      Full licensing by NSCDC, certified oil spill materials, and strict adherence to international HSE protocols.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-white block">Guaranteed Traceability</strong>
                      Mill test certificates (MTC 3.1) for mechanical parts and Certificates of Analysis (COA) for chemicals.
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Need immediate charter or supply?</div>
                  <Link href="/contact" className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1">
                    Direct Contact <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
