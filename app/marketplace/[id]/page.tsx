"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ShieldCheck, ChevronRight, Truck, Clock, MapPin, Building2, Phone, Mail, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { API_ENDPOINTS } from "@/lib/api-config"

const tabs = ["Specifications & Overview", "Company & Ownership", "Leasing & Purchase"]

export default function ProductDetailsPage() {
  const params = useParams()
  const id = params.id as string

  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [equipment, setEquipment] = useState<any>(null)
  const [similarEquipment, setSimilarEquipment] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    async function fetchDetails() {
      try {
        const res = await fetch(API_ENDPOINTS.equipment.detail(id))
        const json = await res.json()
        const fetchedItem = json.data || json
        setEquipment(fetchedItem)

        // Fetch all equipment for "Similar Equipment" from live backend
        const [eqRes, vesselsRes] = await Promise.allSettled([
          fetch(API_ENDPOINTS.equipment.list).then((r) => r.json()),
          fetch(API_ENDPOINTS.vessels.list).then((r) => r.json()),
        ])

        const combined: any[] = []
        if (eqRes.status === "fulfilled" && eqRes.value) {
          const list = Array.isArray(eqRes.value.data) ? eqRes.value.data : Array.isArray(eqRes.value) ? eqRes.value : []
          combined.push(...list)
        }
        if (vesselsRes.status === "fulfilled" && vesselsRes.value) {
          const list = Array.isArray(vesselsRes.value.data) ? vesselsRes.value.data : Array.isArray(vesselsRes.value) ? vesselsRes.value : []
          combined.push(...list)
        }

        const map = new Map<string | number, any>()
        combined.forEach((item) => {
          if (item && item.id != null && item.id.toString() !== id.toString()) {
            map.set(item.id, item)
          }
        })

        setSimilarEquipment(Array.from(map.values()))
      } catch (error) {
        console.error("Failed to fetch equipment details", error)
        setSimilarEquipment([])
      } finally {
        setLoading(false)
      }
    }
    fetchDetails()
  }, [id])

  // Carousel Logic
  const visibleCount = 4
  const maxIndex = Math.max(0, similarEquipment.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-center py-40 min-h-[500px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mb-4"></div>
          <p className="text-slate-500 font-medium">Loading asset details from backend...</p>
        </div>
        <Footer />
      </main>
    )
  }

  if (!equipment) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-center py-40 min-h-[500px] text-center px-4">
          <p className="text-2xl text-slate-900 font-bold mb-2">Asset Not Found</p>
          <p className="text-slate-500 max-w-md mb-6">
            The requested equipment or vessel could not be found in the live database.
          </p>
          <Link href="/marketplace">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 h-12 rounded-xl">
              Back to Marketplace
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Parse images from live data
  let parsedImages: string[] = ["/marine-diesel-engine.jpg"]
  if (equipment.images) {
    if (Array.isArray(equipment.images) && equipment.images.length > 0 && typeof equipment.images[0] === "string") {
      parsedImages = equipment.images
    } else if (typeof equipment.images === "string" && equipment.images.trim() !== "") {
      try {
        const parsed = JSON.parse(equipment.images)
        if (Array.isArray(parsed) && parsed.length > 0) parsedImages = parsed
        else if (typeof parsed === "string") parsedImages = [parsed]
      } catch {
        const parts = equipment.images.split(",").map((u: string) => u.trim()).filter(Boolean)
        if (parts.length > 0) parsedImages = parts
      }
    }
  }

  const safeActiveImage = parsedImages[activeImage] ? activeImage : 0

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/marketplace" className="text-slate-500 hover:text-slate-900 transition-colors">
            Marketplace
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500 capitalize">{equipment.category || "Equipment"}</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-orange-500 font-semibold">{equipment.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={parsedImages[safeActiveImage]}
                alt={equipment.name || "Equipment Image"}
                fill
                className="object-cover"
                priority
              />
            </div>
            {parsedImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {parsedImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                      safeActiveImage === i
                        ? "border-orange-500 shadow-lg shadow-orange-500/20"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-orange-600 text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg">
                  {equipment.status || "Available"}
                </span>
                <span className="text-slate-500 text-[13px] font-semibold">SKU: MM-EQ-{equipment.id}</span>
                <span className="text-slate-400 text-[13px] capitalize font-medium">
                  • {equipment.category || "General"}
                </span>
              </div>

              <h1 className="text-[32px] md:text-[40px] font-black leading-tight text-slate-900">
                {equipment.name}
              </h1>

              {/* Price / Rate Display */}
              <div className="flex items-baseline gap-2 py-2">
                <span className="text-3xl font-black text-slate-900">
                  {equipment.dailyRate
                    ? `₦${Number(equipment.dailyRate).toLocaleString()}`
                    : equipment.monthlyRate
                    ? `₦${Number(equipment.monthlyRate).toLocaleString()}`
                    : "Contact for Rates"}
                </span>
                {equipment.dailyRate ? (
                  <span className="text-slate-500 font-bold text-sm">/ day</span>
                ) : equipment.monthlyRate ? (
                  <span className="text-slate-500 font-bold text-sm">/ month</span>
                ) : null}
                {equipment.monthlyRate && equipment.dailyRate ? (
                  <span className="text-slate-400 text-xs font-semibold ml-2">
                    (₦{Number(equipment.monthlyRate).toLocaleString()} / month)
                  </span>
                ) : null}
              </div>

              {/* Verified Badge & Location */}
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">Verified Listing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>{equipment.company?.location || equipment.location || "Port Harcourt, Nigeria"}</span>
                </div>
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed max-w-lg line-clamp-3">
                {equipment.details || "High-performance offshore certified marine asset."}
              </p>
            </div>

            {/* Registered Company / Vendor Info */}
            {equipment.company && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {equipment.company.logo ? (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                      <Image
                        src={equipment.company.logo}
                        alt={equipment.company.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-black text-base shrink-0">
                      {equipment.company.name?.charAt(0) || "M"}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {equipment.company.name}
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </p>
                    <p className="text-xs text-slate-500">
                      {equipment.company.location || "Nigeria"}
                      {equipment.company.phone ? ` • ${equipment.company.phone}` : ""}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                  {equipment.company.status || "Approved"}
                </span>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <Link href={`/marketplace/lease?equipmentId=${equipment.id}`}>
                <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[15px] rounded-xl shadow-lg shadow-orange-500/20">
                  📋 Enquire for Leasing / Charter
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full h-14 border-slate-300 text-slate-900 hover:bg-slate-100 font-bold text-[15px] rounded-xl bg-transparent"
                >
                  📞 Request Purchase Quote
                </Button>
              </Link>
              <div className="flex items-center justify-between pt-2 text-[13px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-slate-400" />
                  <span>Rapid Mobilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>24/7 Operational Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-2 border-b border-slate-200 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-5 text-[14px] font-bold transition-all whitespace-nowrap relative ${
                  activeTab === i ? "text-slate-900" : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
                {activeTab === i && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {activeTab === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Key Technical Properties */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Technical Specifications</h3>
              <div className="space-y-0">
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Category</span>
                  <span className="text-slate-900 font-bold text-[15px] capitalize">
                    {equipment.category || "General"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Year Manufactured</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.yearManufactured || equipment.yearBuilt || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Operational Condition</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.condition || "Operational"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Weight / Displacement</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.weight ? `${equipment.weight.toLocaleString()} kg` : "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Hourly Rate</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.hourlyRate ? `₦${Number(equipment.hourlyRate).toLocaleString()}` : "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Daily Rate</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.dailyRate ? `₦${Number(equipment.dailyRate).toLocaleString()}` : "Contact"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-slate-500 text-[15px]">Monthly Rate</span>
                  <span className="text-slate-900 font-bold text-[15px]">
                    {equipment.monthlyRate ? `₦${Number(equipment.monthlyRate).toLocaleString()}` : "Contact"}
                  </span>
                </div>
              </div>
            </div>

            {/* Complete Detailed Specification Document from Backend */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                Asset Technical Profile
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                {equipment.details || "No extended technical specifications recorded for this asset."}
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="max-w-3xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Owner &amp; Company Profile</h3>
            {equipment.company ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  {equipment.company.logo ? (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 bg-white">
                      <Image
                        src={equipment.company.logo}
                        alt={equipment.company.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-black text-xl">
                      {equipment.company.name?.charAt(0) || "C"}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                      {equipment.company.name}
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </h4>
                    <p className="text-sm text-slate-500">{equipment.company.location}, {equipment.company.country}</p>
                  </div>
                </div>

                {equipment.company.description && (
                  <p className="text-slate-600 text-sm leading-relaxed">{equipment.company.description}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  {equipment.company.email && (
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <Mail className="w-4 h-4 text-orange-500" />
                      <span>{equipment.company.email}</span>
                    </div>
                  )}
                  {equipment.company.phone && (
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span>{equipment.company.phone}</span>
                    </div>
                  )}
                  {equipment.company.postalCode && (
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>Postal Code: {equipment.company.postalCode}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <Building2 className="w-4 h-4 text-orange-500" />
                    <span>Status: {equipment.company.status}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Company details are managed directly by Muskmover logistics.</p>
            )}
          </div>
        )}

        {activeTab === 2 && (
          <div className="max-w-3xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Leasing Terms &amp; Ordering</h3>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4">
              <p className="text-slate-700 text-sm leading-relaxed">
                This asset is available for commercial charter, contract lease, or purchase enquiry. All transactions are
                processed securely under maritime standard agreements with verified technical compliance.
              </p>
              <div className="pt-4">
                <Link href={`/marketplace/lease?equipmentId=${equipment.id}`}>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 px-6 rounded-xl">
                    Proceed to Lease Enquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Similar Equipment (Only rendered when live items exist) */}
      {similarEquipment.length > 0 && (
        <section className="border-t border-slate-200 py-16 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Other Available Inventory</h3>
                <p className="text-slate-500 text-[15px]">Complementary assets available in our live fleet.</p>
              </div>
              {similarEquipment.length > visibleCount && (
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                      currentIndex === 0
                        ? "border-slate-200 text-slate-200 cursor-not-allowed"
                        : "border-slate-300 text-slate-500 hover:bg-white hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                      currentIndex >= maxIndex
                        ? "border-slate-200 text-slate-200 cursor-not-allowed"
                        : "border-slate-300 text-slate-500 hover:bg-white hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <motion.div
                className="flex gap-6"
                initial={false}
                animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}%)` }}
                transition={{ type: "spring", stiffness: 300, damping: 35 }}
              >
                {similarEquipment.map((item, i) => {
                  let imageUrl = "/marine-diesel-engine.jpg"
                  if (item.images) {
                    if (Array.isArray(item.images) && item.images.length > 0 && typeof item.images[0] === "string") {
                      imageUrl = item.images[0]
                    } else if (typeof item.images === "string" && item.images.trim() !== "") {
                      try {
                        const parsed = JSON.parse(item.images)
                        if (Array.isArray(parsed) && parsed.length > 0) imageUrl = parsed[0]
                        else if (typeof parsed === "string") imageUrl = parsed
                      } catch {
                        const parts = item.images.split(",").map((u: string) => u.trim()).filter(Boolean)
                        if (parts.length > 0) imageUrl = parts[0]
                      }
                    }
                  }

                  return (
                    <div
                      key={item.id || i}
                      className="min-w-[calc(25%-18px)] flex-shrink-0 bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:border-orange-500/30 hover:shadow-lg transition-all"
                    >
                      <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <Image
                          src={imageUrl}
                          alt={item.name || "Equipment"}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                          {item.category || "EQUIPMENT"}
                        </span>
                      </div>
                      <div className="p-5 space-y-3">
                        <h4 className="text-slate-900 font-bold text-[14px] leading-snug line-clamp-2">
                          {item.name || "Equipment"}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 text-[11px] font-semibold">SKU: MM-EQ-{item.id}</span>
                          <Link
                            href={`/marketplace/${item.id}`}
                            className="text-orange-500 text-[12px] font-bold hover:text-orange-600 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
