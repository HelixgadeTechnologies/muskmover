"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const capabilities = [
  {
    title: "Anchor Handling",
    description: "Specialized vessels and crews for anchor handling, rig towing, and positioning operations.",
    image: "/large-container-ship.jpg"
  },
  {
    title: "Rig Support",
    description: "Full scale support for offshore drilling platforms, including logistics and crew transfer.",
    image: "/large-cargo-ship.png"
  },
  {
    title: "Bunker Supply",
    description: "Reliable bunkering services ensuring your fleet stays powered with high-quality fuels.",
    image: "/general-cargo-vessel.jpg"
  },
  {
    title: "Equipment Marketplace",
    description: "Your one-stop shop for leasing and purchasing high-grade marine and offshore equipment.",
    image: "/hydraulic-pump-equipment.jpg"
  },
  {
    title: "Maritime Security",
    description: "Comprehensive security solutions for vessels operating in high-risk offshore zones.",
    image: "/maritime-security-v2.png"
  },
  {
    title: "Towing Tugs",
    description: "High-bollard pull tugs for harbor assistance and long-distance ocean towing.",
    image: "/towing-tugs-v2.png"
  }
]

export default function HomeServices() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal direction="left" className="max-w-2xl">
            <span className="text-orange-600 font-bold text-sm tracking-widest uppercase block mb-4">
              Our Services
            </span>
            <h2 className="text-[36px] md:text-[42px] font-bold text-slate-900 leading-tight">
              Core Capabilities in Maritime Operations
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Link href="/services" className="flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all mb-2">
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="group bg-slate-50 border border-slate-100 rounded-none overflow-hidden hover:shadow-2xl transition-all h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
