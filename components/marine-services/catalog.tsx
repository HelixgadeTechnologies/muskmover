"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import {
  Anchor,
  Compass,
  ShieldAlert,
  Truck,
  FlaskConical,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Search,
  SlidersHorizontal,
  FileCheck,
  ShieldCheck,
  Sparkles,
  Info
} from "lucide-react"
import { marineServiceCategories, ServiceCategory, ServiceItem } from "@/lib/marine-services-data"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

interface CatalogProps {
  onSelectServiceForRfq: (serviceTitle: string) => void
}

const iconMap: Record<string, React.ElementType> = {
  Anchor,
  Compass,
  ShieldAlert,
  Truck,
  FlaskConical,
  Wrench
}

export default function MarineServicesCatalog({ onSelectServiceForRfq }: CatalogProps) {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter categories and services based on activeTab and searchQuery
  const filteredData = useMemo(() => {
    let categories = marineServiceCategories

    if (activeTab !== "all") {
      categories = categories.filter((cat) => cat.id === activeTab)
    }

    if (!searchQuery.trim()) {
      return categories
    }

    const query = searchQuery.toLowerCase()

    return categories
      .map((cat) => {
        const matchesCategory =
          cat.name.toLowerCase().includes(query) ||
          cat.tagline.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query)

        const matchingServices = cat.services.filter(
          (service) =>
            service.title.toLowerCase().includes(query) ||
            service.description.toLowerCase().includes(query) ||
            service.deliverables.some((d) => d.toLowerCase().includes(query)) ||
            (service.specs && service.specs.toLowerCase().includes(query)) ||
            (service.badge && service.badge.toLowerCase().includes(query)) ||
            (service.licenseOrStandard && service.licenseOrStandard.toLowerCase().includes(query))
        )

        if (matchesCategory) {
          return cat
        }

        if (matchingServices.length > 0) {
          return {
            ...cat,
            services: matchingServices
          }
        }

        return null
      })
      .filter((cat): cat is ServiceCategory => cat !== null)
  }, [activeTab, searchQuery])

  // Count total services in view
  const totalServicesCount = useMemo(() => {
    return filteredData.reduce((acc, cat) => acc + cat.services.length, 0)
  }, [filteredData])

  return (
    <section id="service-catalog" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Operational Scope &amp; Fleet Capabilities
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2 tracking-tight">
              Our Complete Service Catalog
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 text-sm sm:text-base mt-4">
              Browse our fully certified operations across 6 industrial divisions. Every service is delivered with dedicated field supervision, regulatory compliance, and rapid mobilization.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/80 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Division Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none no-scrollbar">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#050B20] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>All Divisions</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === "all" ? "bg-red-600 text-white" : "bg-slate-200 text-slate-600"
                }`}>
                  24
                </span>
              </button>

              {marineServiceCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Anchor
                const isActive = activeTab === cat.id

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-[#050B20] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? "text-red-400" : "text-slate-500"}`} />
                    <span>{cat.shortTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-red-600 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {cat.services.length}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Quick Keyword Search Input */}
            <div className="relative min-w-[260px] lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, PPE, valves, vessels..."
                className="w-full h-10 pl-10 pr-4 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Catalog Categories View */}
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Services Found</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              No service matching &quot;{searchQuery}&quot; was found. Try clearing your search filter or selecting &quot;All Divisions&quot;.
            </p>
            <Button
              onClick={() => {
                setActiveTab("all")
                setSearchQuery("")
              }}
              className="bg-[#050B20] text-white hover:bg-black font-semibold text-xs px-6 py-2 rounded-lg"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredData.map((category) => {
              const CategoryIcon = iconMap[category.iconName] || Anchor

              return (
                <div key={category.id} className="scroll-mt-28" id={`category-${category.id}`}>
                  
                  {/* Category Banner */}
                  <div className="bg-gradient-to-r from-[#050B20] to-[#121B38] text-white p-6 sm:p-8 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg border border-slate-800">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-extrabold tracking-widest text-red-400 mb-1">
                          Division Overview
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Button
                        onClick={() => onSelectServiceForRfq(`${category.name} (Division Tender)`)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md transition-all cursor-pointer"
                      >
                        Division Tender / RFQ
                      </Button>
                    </div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {category.services.map((service) => (
                      <div
                        key={service.id}
                        className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                      >
                        {/* Service Card Image Preview */}
                        {service.image && (
                          <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                            
                            {/* Badges on image */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                              {service.badge && (
                                <span className="bg-red-600/95 backdrop-blur-sm text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded shadow-sm tracking-wide">
                                  {service.badge}
                                </span>
                              )}
                              {service.licenseOrStandard && (
                                <span className="bg-slate-900/90 border border-slate-700 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm backdrop-blur-sm flex items-center gap-1">
                                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                                  <span>{service.licenseOrStandard}</span>
                                </span>
                              )}
                            </div>

                            <div className="absolute bottom-3 left-4 right-4 text-white">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                                {category.shortTitle}
                              </span>
                              <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                                {service.title}
                              </h4>
                            </div>
                          </div>
                        )}

                        {/* Card Body */}
                        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Title if no image */}
                            {!service.image && (
                              <div className="mb-4">
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                                    {category.shortTitle}
                                  </span>
                                  {service.badge && (
                                    <span className="bg-red-100 text-red-700 text-[11px] font-bold px-2 py-0.5 rounded">
                                      {service.badge}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">
                                  {service.title}
                                </h4>
                              </div>
                            )}

                            {/* Service Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                              {service.description}
                            </p>

                            {/* Scope Deliverables */}
                            <div className="mb-6">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Core Capabilities &amp; Deliverables</span>
                              </h5>
                              <ul className="space-y-2">
                                {service.deliverables.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Specs / Capacity Bar */}
                            {service.specs && (
                              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 mb-6 text-xs text-slate-700 flex items-center gap-2.5">
                                <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
                                <div>
                                  <span className="font-bold text-slate-900">Technical Capacity: </span>
                                  <span>{service.specs}</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Card Action Buttons */}
                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                            <span className="text-xs text-slate-500 font-medium">
                              Certified Provision
                            </span>
                            <Button
                              onClick={() => onSelectServiceForRfq(service.title)}
                              className="bg-[#050B20] hover:bg-red-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 group/btn cursor-pointer"
                            >
                              <span>Enquire About This Service</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>
        )}

        {/* Global Catalog Bottom Anchor */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-xs sm:text-sm text-slate-600">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span>
              Don’t see a specific item or need custom fabrication? Our technical team handles bespoke client specifications.
            </span>
            <button
              onClick={() => onSelectServiceForRfq("Custom Marine / Industrial Inquiry")}
              className="font-bold text-red-600 hover:text-red-700 underline ml-1 cursor-pointer"
            >
              Contact Operations Desk
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
