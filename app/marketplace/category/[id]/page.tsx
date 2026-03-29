"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { Star, ShieldCheck, ChevronRight, ArrowRight, Check, Truck, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const productImages = [
  "/ship-anchor-system.jpg",
  "/large-container-ship.jpg",
  "/large-cargo-ship.png",
  "/general-cargo-vessel.jpg",
  "/hydraulic-pump-equipment.jpg",
]

const specifications = [
  { label: "Model Series", value: "MM-HW-X-2024" },
  { label: "Power Supply", value: "440V / 3Ph / 60Hz" },
  { label: "Operating Temperature", value: "-20°C to +55°C" },
  { label: "Weight (Dry)", value: "45,000 kg" },
  { label: "Brake Holding Load", value: "250T (1st Layer)" },
]

const coreFeatures = [
  "Automatic Active Heave Compensation (AHC)",
  "Integrated Load Monitoring & Data Logging",
  "Emergency Quick Release System (EQRS)",
]

const fallbackSimilarItems = [
  {
    id: "f1",
    name: "High-Pressure Hydraulic Power Unit (HPU) 75kW",
    sku: "SKU: MMA-HPU-075",
    images: ["/hydraulic-pump-equipment.jpg"],
    tag: "IN STOCK",
    tagColor: "bg-green-500",
  },
  {
    id: "f2",
    name: "Towing 5 Anchor Handling Winch 350T",
    sku: "SKU: MM-AHC-350",
    images: ["/ship-anchor-system.jpg"],
    tag: "2",
    tagColor: "bg-orange-500",
  },
  {
    id: "f3",
    name: "SmartDeck Wireless Control Console v3",
    sku: "SKU: MMA-CTL-WL3",
    images: ["/large-cargo-ship.png"],
    tag: "CONTROL",
    tagColor: "bg-orange-500",
  },
  {
    id: "f4",
    name: "Steel Wire Rope - 76mm Galvanized (1km)",
    sku: "SKU: MMA-RPE-076",
    images: ["/general-cargo-vessel.jpg"],
    tag: null,
    tagColor: "",
  },
]

const tabs = ["Specifications", "Features", "Certifications", "Shipping Info"]

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
        const res = await fetch(`https://musk-backend.onrender.com/api/equipment/${id}`)
        const json = await res.json()
        setEquipment(json.data || json)

        // Fetch all equipment for "Similar Equipment"
        const listRes = await fetch('https://musk-backend.onrender.com/api/equipment')
        const listJson = await listRes.json()
        const allData = Array.isArray(listJson.data) ? listJson.data : Array.isArray(listJson) ? listJson : []
        
        const filtered = allData.filter((item: any) => item.id.toString() !== id.toString())
        setSimilarEquipment(filtered.length > 0 ? filtered : fallbackSimilarItems)
      } catch (error) {
        console.error("Failed to fetch equipment details", error)
        setSimilarEquipment(fallbackSimilarItems)
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
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-center py-40 min-h-[500px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!equipment) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-center py-40 min-h-[500px]">
          <p className="text-xl text-slate-500 font-bold">Equipment not found.</p>
        </div>
        <Footer />
      </main>
    )
  }

  // Parse images
  let parsedImages = productImages
  if (equipment.images) {
    if (Array.isArray(equipment.images) && equipment.images.length > 0 && typeof equipment.images[0] === 'string') {
      parsedImages = equipment.images
    } else if (typeof equipment.images === 'string' && equipment.images.trim() !== '') {
      try {
        const parsed = JSON.parse(equipment.images)
        if (Array.isArray(parsed) && parsed.length > 0) parsedImages = parsed
        else if (typeof parsed === 'string') parsedImages = [parsed]
      } catch {
        // Not a JSON string. Might be a comma-separated list of URLs
        parsedImages = equipment.images.split(',').map((u: string) => u.trim()).filter(Boolean)
        if (parsedImages.length === 0) parsedImages = productImages
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
          <Link href="/marketplace" className="text-slate-500 hover:text-slate-900 transition-colors">Marketplace</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/marketplace/category" className="text-slate-500 hover:text-slate-900 transition-colors">Power Systems</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-orange-500 font-semibold">{equipment.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image 
                src={parsedImages[safeActiveImage]}
                alt={equipment.name || "Product Image"}
                fill
                className="object-cover"
              />
            </div>
            {parsedImages.length > 1 && (
              <div className="flex gap-3">
                {parsedImages.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      safeActiveImage === i ? "border-orange-500 shadow-lg shadow-orange-500/20" : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
                {parsedImages.length > 4 && (
                  <div className="w-20 h-20 rounded-xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-[12px] font-bold text-slate-500">
                    +{parsedImages.length - 4} MORE
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-orange-600/90 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg">
                  {equipment.status || "Available"}
                </span>
                <span className="text-slate-500 text-[12px] font-semibold">SKU: MM-EQ-{equipment.id}</span>
              </div>
              <h1 className="text-[32px] md:text-[40px] font-black leading-tight text-slate-900">
                {equipment.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>Musk Mover Certified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-slate-900">4.9</span>
                  <span className="text-sm text-slate-500">(12 Reviews)</span>
                </div>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg">
                {equipment.details || "High-performance equipment, engineered for extreme operations."}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[15px] rounded-xl shadow-lg shadow-orange-500/20">
                📋 Request Quote for Purchase
              </Button>
              <Link href={`/marketplace/lease?equipmentId=${equipment.id}`}>
                <Button variant="outline" className="w-full h-14 border-slate-300 text-slate-900 hover:bg-slate-100 font-bold text-[15px] rounded-xl bg-transparent">
                  📞 Enquire for Leasing
                </Button>
              </Link>
              <div className="flex items-center justify-between pt-2 text-[13px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Free Lagos Port Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24 Month Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-0 border-b border-slate-200">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-5 text-[14px] font-bold transition-all relative ${
                  activeTab === i
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
                {activeTab === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Certifications */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Specifications */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900">Technical Specifications</h3>
            <div className="space-y-0">
              <div className="flex items-center justify-between py-5 border-b border-slate-100">
                <span className="text-slate-500 text-[15px]">Category</span>
                <span className="text-slate-900 font-bold text-[15px] capitalize">{equipment.category || "General"}</span>
              </div>
              <div className="flex items-center justify-between py-5 border-b border-slate-100">
                <span className="text-slate-500 text-[15px]">Year Manufactured</span>
                <span className="text-slate-900 font-bold text-[15px]">{equipment.yearManufactured || "N/A"}</span>
              </div>
              <div className="flex items-center justify-between py-5 border-b border-slate-100">
                <span className="text-slate-500 text-[15px]">Condition</span>
                <span className="text-slate-900 font-bold text-[15px]">{equipment.condition || "N/A"}</span>
              </div>
              <div className="flex items-center justify-between py-5 border-b border-slate-100">
                <span className="text-slate-500 text-[15px]">Weight</span>
                <span className="text-slate-900 font-bold text-[15px]">{equipment.weight ? `${equipment.weight.toLocaleString()} kg` : "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Marine Certifications & Core Features */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Marine Certifications</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-center gap-5">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black text-[14px] shrink-0">
                    ABS
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-[15px]">ABS Certified</p>
                    <p className="text-slate-500 text-[13px]">Certificate #45263 ✓</p>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-center gap-5">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-[14px] shrink-0">
                    DNV
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-[15px]">DNV-GL Approved</p>
                    <p className="text-slate-500 text-[13px]">Maritime Standard of 2024 →</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Core Features</h3>
              <div className="space-y-4">
                {coreFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500 shrink-0" />
                    <span className="text-slate-600 text-[15px]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Equipment */}
      <section className="border-t border-slate-200 py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Similar Equipment</h3>
              <p className="text-slate-500 text-[15px]">Complementary assets for your marine operations.</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  currentIndex === 0 ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-500 hover:bg-white hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  currentIndex >= maxIndex ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-500 hover:bg-white hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                →
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              className="flex gap-6"
              initial={false}
              animate={{ x: `calc(-${currentIndex * (100 / (visibleCount))}%)` }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              {similarEquipment.map((item, i) => {
                // Determine image securely
                let imageUrl = "/marine-diesel-engine.jpg"
                if (item.images) {
                  if (Array.isArray(item.images) && item.images.length > 0 && typeof item.images[0] === 'string') {
                    imageUrl = item.images[0]
                  } else if (typeof item.images === 'string' && item.images.trim() !== '') {
                    try {
                      const parsed = JSON.parse(item.images)
                      if (Array.isArray(parsed) && parsed.length > 0) imageUrl = parsed[0]
                      else if (typeof parsed === 'string') imageUrl = parsed
                    } catch {
                      const splitImgs = item.images.split(',').map((u: string) => u.trim()).filter(Boolean)
                      if (splitImgs.length > 0) imageUrl = splitImgs[0]
                    }
                  }
                }

                const tag = item.condition && item.condition.toLowerCase() === 'new' ? 'NEW' : null
                const tagColor = 'bg-green-500'

                return (
                  <div key={item.id || i} className="min-w-[calc(25%-18px)] flex-shrink-0 bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:border-orange-500/30 hover:shadow-lg transition-all">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={item.name || "Equipment"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {tag && (
                        <span className={`absolute top-3 left-3 ${tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase`}>
                          {tag}
                        </span>
                      )}
                    </div>
                    <div className="p-5 space-y-3">
                      <h4 className="text-slate-900 font-bold text-[14px] leading-snug line-clamp-2">{item.name || "Equipment"}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-[11px] font-semibold">SKU: MM-EQ-{item.id}</span>
                        <Link 
                          href={`/marketplace/category/${item.id}`}
                          className="text-orange-500 text-[12px] font-bold hover:text-orange-400 transition-colors"
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

      <Footer />
    </main>
  )
}
