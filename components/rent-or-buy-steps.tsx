"use client"

import { Anchor, Check, Clipboard, Settings } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const steps = [
  {
    icon: Anchor,
    title: "SEARCH & COMPARE",
    description: "Enter your requirements, dates, and location. Filter by price, specifications, and ratings. Save favorites and compare side-by-side.",
  },
  {
    icon: Check,
    title: "VERIFY & INSPECT",
    description: "View verified documents, insurance details, and 360° tours. Chat directly with owners. Schedule in-person inspections for large equipment.",
  },
  {
    icon: Clipboard,
    title: "BOOK & SECURE",
    description: "Secure booking with our escrow payment system. Sign digital contracts. Get comprehensive insurance automatically added to your rental.",
  },
  {
    icon: Settings,
    title: "OPERATE & MANAGE",
    description: "Access digital manuals, tracking, and support. Our platform manages documentation, payments, and post-rental processes seamlessly.",
  },
]

export default function RentOrBuySteps() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Title Column */}
        <div className="lg:w-1/3">
          <ScrollReveal direction="right" duration={0.8}>
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 leading-[1.1] tracking-tight max-w-xs">
              Rent Or Buy In 4 Simple Steps
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
                <div className="flex flex-col items-start">
                  <div className="mb-6 text-slate-900">
                    <Icon className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-4 tracking-wider uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
