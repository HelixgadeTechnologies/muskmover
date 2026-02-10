"use client"

import { Button } from "@/components/ui/button"
import { Ship, CircleDot } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

export default function FindVesselsSection() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Find Vessels Card */}
        <ScrollReveal direction="right" duration={0.8}>
          <div className="bg-[#C1C8CE] rounded-[32px] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden h-[380px] group">
            <div className="max-w-[280px] relative z-10">
              <h3 className="text-[32px] font-bold text-slate-900 leading-tight mb-4">
                Find Vessels to Rent?
              </h3>
              <p className="text-slate-700 text-[15px] mb-8 leading-relaxed">
                We are committed to providing our customers with exceptional service.
              </p>
              <Link href="/marketplace/category">
                <Button
                  variant="outline"
                  className="border-[#FF3B30] text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white px-8 h-12 text-[15px] font-semibold bg-transparent rounded-none transition-all"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-80 group-hover:scale-110 transition-transform duration-500">
              <Ship className="w-24 h-24 stroke-[1]" />
            </div>
          </div>
        </ScrollReveal>

        {/* Buy Equipment Card */}
        <ScrollReveal direction="left" delay={0.2} duration={0.8}>
          <div className="bg-[#FDD5C6] rounded-[32px] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden h-[380px] group">
            <div className="max-w-[280px] relative z-10">
              <h3 className="text-[32px] font-bold text-slate-900 leading-tight mb-4">
                Buy New Equipment
              </h3>
              <p className="text-slate-700 text-[15px] mb-8 leading-relaxed">
                We are committed to providing our customers with exceptional service.
              </p>
              <Link href="/marketplace/category">
                <Button
                  className="bg-[#0F172A] text-white hover:bg-black px-8 h-12 text-[15px] font-semibold rounded-none transition-all"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-80 group-hover:scale-110 transition-transform duration-500">
              <CircleDot className="w-24 h-24 stroke-[1]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
