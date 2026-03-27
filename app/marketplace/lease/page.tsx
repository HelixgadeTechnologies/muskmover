"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, ChevronDown, MapPin, ArrowLeft, ArrowRight, ShieldCheck, Truck, Package, Calendar, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const steps = [
  { label: "EQUIPMENT", number: 1, completed: true },
  { label: "LEASE DETAILS", number: 2, active: true },
  { label: "CONFIRMATION", number: 3 },
]

const DEFAULT_IMAGE = "/ship-anchor-system.jpg"

function getFirstImage(images: any): string {
  if (!images) return DEFAULT_IMAGE
  if (Array.isArray(images) && images.length > 0 && typeof images[0] === "string") return images[0]
  if (typeof images === "string" && images.trim() !== "") {
    try {
      const parsed = JSON.parse(images)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed[0]
      if (typeof parsed === "string") return parsed
    } catch {
      const parts = images.split(",").map((u: string) => u.trim()).filter(Boolean)
      if (parts.length > 0) return parts[0]
    }
  }
  return DEFAULT_IMAGE
}

function LeasePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const equipmentId = searchParams.get("equipmentId")

  const [equipment, setEquipment] = useState<any>(null)
  const [equipmentLoading, setEquipmentLoading] = useState(!!equipmentId)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    company: "",
    industrySector: "Oil & Gas",
    contactPerson: "",
    phone: "",
    renterEmail: "",
    projectLocation: "",
    startDate: "",
    endDate: "",
    crewRequested: false,
    requirements: ""
  })

  useEffect(() => {
    if (!equipmentId) return
    async function fetchEquipment() {
      try {
        const res = await fetch(`https://musk-backend.onrender.com/api/equipment/${equipmentId}`)
        const json = await res.json()
        setEquipment(json.data || json)
      } catch (err) {
        console.error("Failed to fetch equipment", err)
      } finally {
        setEquipmentLoading(false)
      }
    }
    fetchEquipment()
  }, [equipmentId])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        id: 0,
        orderNumber: `ORD-${Date.now()}`,
        renterName: formData.contactPerson,
        renterEmail: formData.renterEmail,
        equipmentId: equipmentId ? Number(equipmentId) : 0,
        vesselId: 0,
        startDate: formData.startDate,
        endDate: formData.endDate,
        totalPrice: 0,
        status: "PENDING",
        paymentStatus: "UNPAID",
        company: formData.company,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        industrySector: formData.industrySector,
        projectLocation: formData.projectLocation,
        totalDuration: "TBD",
        crewRequested: formData.crewRequested
      }

      const res = await fetch('https://musk-backend.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit order')

      // Calculate duration in days
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const durationDays = Math.max(0, Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)))

      // Build confirmation URL with all form data + equipment context
      const params = new URLSearchParams({
        equipmentId: equipmentId ?? "",
        equipmentName: equipment?.name ?? "",
        equipmentSku: equipmentSku,
        equipmentImage: equipmentImage,
        equipmentStatus: equipment?.status ?? "",
        company: formData.company,
        industrySector: formData.industrySector,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        renterEmail: formData.renterEmail,
        projectLocation: formData.projectLocation,
        startDate: formData.startDate,
        endDate: formData.endDate,
        crewRequested: String(formData.crewRequested),
        requirements: formData.requirements,
        durationDays: String(durationDays),
      })
      router.push(`/marketplace/lease/confirmation?${params.toString()}`)
    } catch (error) {
      console.error(error)
      alert("Failed to submit enquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const equipmentName = equipment?.name ?? "Lease Enquiry"
  const equipmentSku = equipment ? `MM-EQ-${equipment.id}` : "MMR-EQ-2024-0842"
  const equipmentImage = getFirstImage(equipment?.images)
  const isAvailable = equipment?.status?.toLowerCase() === "available"

  const backHref = equipmentId
    ? `/marketplace/category/${equipmentId}`
    : "/marketplace/category/1"

  return (
    <main className="min-h-screen bg-slate-50/50">
      <Header />

      {/* Progress Stepper */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-slate-200" />
            <div className="absolute top-5 left-[10%] w-[40%] h-0.5 bg-orange-500" />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.completed
                      ? "bg-orange-500 text-white"
                      : step.active
                      ? "bg-orange-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step.completed ? <Check className="w-5 h-5" /> : step.number}
                </div>
                <span
                  className={`text-[11px] font-bold tracking-widest uppercase ${
                    step.active ? "text-orange-600" : step.completed ? "text-slate-700" : "text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          {equipmentLoading ? (
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-slate-200 animate-pulse shrink-0" />
              <div className="space-y-2">
                <div className="h-5 w-64 bg-slate-200 animate-pulse rounded" />
                <div className="h-3 w-40 bg-slate-100 animate-pulse rounded" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image src={equipmentImage} alt={equipmentName} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {equipment ? `Lease Enquiry: ${equipmentName}` : "Lease Enquiry"}
                  </h2>
                  <p className="text-slate-500 text-[13px] font-medium">Reference ID: {equipmentSku}</p>
                  {equipment?.company?.name && (
                    <p className="text-slate-400 text-[12px] mt-0.5">
                      Listed by <span className="font-semibold text-slate-600">{equipment.company.name}</span>
                      {equipment.company.location && ` · ${equipment.company.location}`}
                    </p>
                  )}
                </div>
              </div>
              <span
                className={`hidden md:flex items-center gap-2 text-[12px] font-bold px-4 py-2 rounded-full border ${
                  isAvailable
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-orange-50 border-orange-200 text-orange-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-500" : "bg-orange-500"}`}
                />
                {equipment?.status?.toUpperCase() ?? "AVAILABLE"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Forms */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-10">
            {/* Company Information */}
            <div className="bg-white border border-slate-100 rounded-none p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Package className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 tracking-widest uppercase">Company Information</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Company Legal Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Niger Delta Oil Services Ltd"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Industry Sector</label>
                    <div className="relative">
                      <select
                        name="industrySector"
                        value={formData.industrySector}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] font-medium appearance-none outline-none focus:ring-2 focus:ring-orange-500">
                        <option>Oil & Gas</option>
                        <option>Marine Transport</option>
                        <option>Construction</option>
                        <option>Government / Military</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Person Name</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Adeyemi"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Person Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +234 801 234 5678"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Person Email</label>
                    <input
                      type="email"
                      name="renterEmail"
                      value={formData.renterEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john@company.com"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Company Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +234 1 234 5678"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Company Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. leasing@nigerdelaoil.com"
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Primary Project Site Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Onne Port, Rivers State"
                      className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Leasing Specifics */}
            <div className="bg-white border border-slate-100 rounded-none p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 tracking-widest uppercase">Leasing Specifics</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Proposed Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Proposed End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Specific Technical Needs / Custom Requirements
                  </label>
                  <textarea
                    rows={4}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Mention any specific modifications, fuel requirements, or site constraints..."
                    className="w-full p-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-y"
                  />
                </div>

                {/* Crew Toggle */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, crewRequested: !formData.crewRequested })}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      formData.crewRequested ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        formData.crewRequested ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="text-[14px] font-semibold text-slate-700">
                    Request Musk Mover Certified Crew/Operator for this equipment
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <Link href={backHref}>
                <Button type="button" variant="outline" className="border-slate-200 text-slate-700 font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-8 bg-white hover:bg-slate-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Step
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting} className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-10 shadow-lg shadow-orange-500/20">
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                ) : (
                  <>Submit Enquiry <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-slate-400 text-[13px] leading-relaxed">
              By submitting, you agree to Musk Mover&apos;s corporate leasing terms and conditions.<br />
              Our team typically responds within <strong className="text-slate-700">4 business hours</strong>.
            </p>
          </form>

          {/* Right Column - Summary Sidebar */}
          <div className="w-full lg:w-[360px] shrink-0 space-y-6">

            {/* Equipment Rates Card (shown when equipment is loaded) */}
            {equipment && (equipment.dailyRate || equipment.monthlyRate) && (
              <div className="bg-white border border-slate-100 rounded-none p-6">
                <h4 className="text-[13px] font-black text-slate-900 tracking-widest uppercase mb-5">Lease Rates</h4>
                <div className="grid grid-cols-2 gap-4">
                  {equipment.dailyRate && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Daily Rate</p>
                      <p className="text-[22px] font-black text-slate-900">${equipment.dailyRate.toLocaleString()}</p>
                    </div>
                  )}
                  {equipment.monthlyRate && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Rate</p>
                      <p className="text-[22px] font-black text-slate-900">${equipment.monthlyRate.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Why Lease With Us */}
            <div className="bg-white border border-slate-100 rounded-none p-6">
              <h4 className="text-[13px] font-black text-slate-900 tracking-widest uppercase mb-5">Why Lease With Us?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700">24/7 Technical Support & Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700">Rapid Deployment to Any Coastal Site</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700">Fully Insured Equipment Fleet</span>
                </div>
              </div>
            </div>

            {/* Network Coverage */}
            <div className="bg-white border border-slate-100 rounded-none overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image src="/general-cargo-vessel.jpg" alt="Network Coverage" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-slate-900/40" />
              </div>
              <div className="p-5 text-center">
                <p className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">
                  Network Coverage: 🇳🇬 Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function LeasePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-slate-50/50 flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600" />
        </div>
        <Footer />
      </main>
    }>
      <LeasePageContent />
    </Suspense>
  )
}
