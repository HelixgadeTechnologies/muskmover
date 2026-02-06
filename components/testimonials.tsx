"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Owner, Pacific Charter Co",
    title: "Great Work",
    quote: "As a fishing charter business, finding quality vessels during peak season was a nightmare. Musk Mover gave us instant access to 15 verified boats within our budget. Our revenue increased 35% last quarter",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "James O'Connell",
    role: "Project Manager, Coastal Engineering Ltd.",
    title: "Awesome Design",
    quote: "We needed specialized dredging equipment for a 3-month project. Instead of purchasing €500,000 machinery, we rented through Musk Mover for €45,000. The platform handled all logistics and insurance.",
    image: "/professional-man-portrait.png",
  },
  {
    name: "Dianne Russell",
    role: "Marketing",
    title: "Good Job",
    quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    image: "/business-portrait-man.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2 className="text-[36px] font-bold text-slate-900 tracking-tight">What our customers say</h2>
            <div className="text-[14px] text-slate-400">
              Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
              <div className="bg-white p-10 rounded-[32px] shadow-sm flex flex-col hover:shadow-md transition-shadow h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[18px] font-bold text-slate-900">{item.title}</h3>
                  <Quote className="w-8 h-8 text-[#050B20] fill-[#050B20]" />
                </div>

                <p className="text-[15px] text-slate-500 leading-relaxed mb-10 flex-1">
                  {item.quote.startsWith('"') ? item.quote : `"${item.quote}"`}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[13px] text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-full shadow-sm hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-full shadow-sm hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
