"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2, Package, Fuel, Shield, Settings, Anchor } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const services = [
  {
    category: "STRATEGIC OPERATIONS",
    title: "Anchor Handling Vessels (AHTS)",
    description: "We provide high-specification Anchor Handling Tug Supply vessels, equipped with advanced dynamic positioning (DP2) systems. Our fleet is engineered to handle the most demanding offshore mooring operations, rig moves, and deep water towing.",
    features: [
      "Mooring deployment and recovery for deepwater rigs",
      "DP2 positioning accuracy for critical operations",
      "Heavy-duty bollard pull capacity for ocean towing"
    ],
    cta: "Learn Technical Specs",
    image: "/large-container-ship.jpg", // Reusing existing images
    reverse: false
  },
  {
    category: "SUPPLY & LOGISTICS",
    title: "Rig Support Services",
    description: "Ensuring continuous operation for your offshore platforms. We deliver vital supplies, including potable water, drilling mud, chemicals, and fuel, with zero-downtime logistics.",
    details: [
      { icon: Fuel, label: "Liquid Bulk", sublabel: "Water, Fuel, Mud" },
      { icon: Package, label: "Deck Cargo", sublabel: "Pipe, Tubing, Tools" }
    ],
    cta: "View Logistics Plan",
    image: "/rig-support.png",
    reverse: true,
    customOverlay: false
  },
  {
    category: "ENERGY SOLUTIONS",
    title: "Offshore Bunker Supply",
    description: "High quality marine fuel is delivered directly to your vessel or platform. Our bunkering services adhere to the strictest environmental and safety standards, ensuring your engines run efficiently and cleanly.",
    features_grid: [
      { label: "Quality Assured", sublabel: "ISO certified bunkering for every delivery" },
      { label: "24/7 Availability", sublabel: "Emergency bunkering and scheduled refills" }
    ],
    cta: "Learn Technical Specs",
    image: "/general-cargo-vessel.jpg",
    reverse: false
  },
  {
    category: "EQUIPMENT HIRE",
    title: "Equipment Marketplace",
    description: "We provide high-grade marine and offshore equipment for lease or purchase. Our extensive inventory includes everything from specialized hydraulic systems to heavy-lift cranes and propulsion units.",
    features: [
      "Rigorous pre-deployment testing and certification",
      "Short-term and long-term leasing options",
      "Comprehensive maintenance and technical support"
    ],
    cta: "Browse Equipment",
    image: "/hydraulic-pump-equipment.jpg",
    reverse: true
  },
  {
    category: "RISK MANAGEMENT",
    title: "Maritime Security",
    description: "Ensuring the safety of your assets and personnel in high-risk offshore zones. We provide comprehensive security solutions, including escort vessels, on-board guards, and 24/7 situational monitoring.",
    features_grid: [
      { label: "On-Board Security", sublabel: "Certified teams for vessel protection" },
      { label: "Hardened Platforms", sublabel: "Anti-piracy and intrusion prevention" }
    ],
    cta: "View Security Solutions",
    image: "/maritime-security.png",
    reverse: false
  },
  {
    category: "HARBOR & OFFSHORE",
    title: "Towing Tugs",
    description: "Our fleet of high-bollard pull tugs provides reliable assistance for harbor docking, ocean towing, and salvage operations. We operate modern vessels with advanced maneuverability for precision work.",
    features: [
      "Harbor assistance and ship-docking",
      "Inter-continental ocean towing capability",
      "Emergency salvage and spill response"
    ],
    cta: "Learn Technical Specs",
    image: "/towing-tugs.png",
    reverse: true
  },
  {
    category: "PROTECTION & COMPLIANCE",
    title: "Internal Security Service",
    description: "We offer dedicated internal security services to protect your onshore and offshore assets, personnel, and operations. Our trained security operatives ensure full compliance with local and international safety regulations, providing round-the-clock surveillance and threat response.",
    features: [
      "24/7 facility and asset surveillance",
      "Access control and personnel vetting",
      "Incident response and emergency management"
    ],
    cta: "View Security Plans",
    image: "/cctv-camera.png",
    reverse: false
  }
]

export default function ServicesList() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Section */}
            <div className="flex-1 w-full">
              <ScrollReveal direction={service.reverse ? "right" : "left"} duration={0.8}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl">
                  {service.customOverlay ? (
                    <div className="absolute inset-0 z-10 bg-orange-600/60 flex items-center justify-center text-center p-8">
                      <div className="text-white">
                        <h4 className="text-[28px] font-bold tracking-widest uppercase mb-2">Rig Support</h4>
                        <div className="w-16 h-1 bg-white mx-auto mb-4" />
                        <p className="text-[32px] font-black tracking-tighter uppercase opacity-80 leading-none">URUL SERVICES</p>
                      </div>
                    </div>
                  ) : null}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-8">
              <ScrollReveal direction={service.reverse ? "left" : "right"} duration={0.8}>
                <div className="space-y-4">
                  <span className="text-orange-600 font-bold text-[13px] tracking-widest uppercase">{service.category}</span>
                  <h2 className="text-[36px] md:text-[42px] font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-[17px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                {service.features && (
                  <ul className="space-y-4 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Logistics Details */}
                {service.details && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {service.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white border border-slate-100 p-6 rounded-none shadow-sm flex flex-col gap-3">
                        <detail.icon className="w-6 h-6 text-slate-400" />
                        <div>
                          <p className="text-slate-900 font-bold text-[15px]">{detail.label}</p>
                          <p className="text-slate-500 text-[13px]">{detail.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bunkering Grid */}
                {service.features_grid && (
                  <div className="space-y-4 pt-4">
                     {service.features_grid.map((feature, fgIndex) => (
                      <div key={fgIndex} className="bg-slate-50 p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                           <CheckCircle2 className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-[15px]">{feature.label}</p>
                          <p className="text-slate-500 text-[13px]">{feature.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6">
                  <button className="flex items-center gap-2 text-[15px] font-bold text-slate-900 group hover:text-orange-600 transition-colors">
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-600" />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
