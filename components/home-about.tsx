"use client"

import Image from "next/image"
import { Target, Eye } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HomeAbout() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Image Section */}
          <div className="flex-1 w-full relative">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/african-sailor-portrait.png" // Reusing available professional portraits
                  alt="Maritime Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-orange-600 p-8 text-white shadow-xl">
                    <p className="text-xl font-bold leading-tight italic">
                        "Navigating excellence since 2008"
                    </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <ScrollReveal direction="right">
              <span className="text-orange-600 font-bold text-sm tracking-widest uppercase block mb-4">
                About the Company
              </span>
              <h2 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-tight mb-6">
                Your Trusted Maritime Partner
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Musk Mover Nigeria Limited is a premier maritime logistics and offshore service provider. We specialize in complex offshore operations, providing end-to-end solutions that bridge the gap between technical requirements and operational reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 border-l-4 border-orange-600 shadow-sm group hover:shadow-md transition-shadow">
                  <Target className="w-10 h-10 text-orange-600 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To deliver world-class maritime services through innovation, safety, and a client-centric approach that fosters long-term partnerships.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 border-l-4 border-orange-600 shadow-sm group hover:shadow-md transition-shadow">
                  <Eye className="w-10 h-10 text-orange-600 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To be the preferred provider of offshore and marine solutions in West Africa, setting benchmarks for quality and reliability.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
