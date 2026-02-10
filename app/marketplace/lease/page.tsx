"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Check, ChevronDown, MapPin, ArrowLeft, ArrowRight, ShieldCheck, Truck, Package, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const steps = [
  { label: "EQUIPMENT", number: 1, completed: true },
  { label: "LEASE DETAILS", number: 2, active: true },
  { label: "CONFIRMATION", number: 3 },
]

export default function LeasePage() {
  const [crewRequested, setCrewRequested] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50/50">
      <Header />

      {/* Progress Stepper */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <Image src="/ship-anchor-system.jpg" alt="Equipment" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Lease Enquiry: 150T Double Drum Offshore Winch
                </h2>
                <p className="text-slate-500 text-[13px] font-medium">Reference ID: MMR-EQ-2024-0842</p>
              </div>
            </div>
            <span className="hidden md:flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-[12px] font-bold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              HIGHLY AVAILABLE
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Forms */}
          <div className="flex-1 space-y-10">
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
                      placeholder="e.g. Niger Delta Oil Services Ltd"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Industry Sector</label>
                    <div className="relative">
                      <select className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] font-medium appearance-none outline-none focus:ring-2 focus:ring-orange-500">
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
                      placeholder="e.g. John Adeyemi"
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Person Phone</label>
                    <input
                      type="tel"
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
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Proposed End Date</label>
                    <input
                      type="date"
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
                    placeholder="Mention any specific modifications, fuel requirements, or site constraints..."
                    className="w-full p-4 bg-white border border-slate-200 rounded-none text-[14px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-y"
                  />
                </div>

                {/* Crew Toggle */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setCrewRequested(!crewRequested)}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      crewRequested ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        crewRequested ? "translate-x-6" : "translate-x-1"
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
              <Link href="/marketplace/category/1">
                <Button variant="outline" className="border-slate-200 text-slate-700 font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-8 bg-white hover:bg-slate-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Step
                </Button>
              </Link>
              <Link href="/marketplace/lease/confirmation">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-10 shadow-lg shadow-orange-500/20">
                  Submit Enquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-slate-400 text-[13px] leading-relaxed">
              By submitting, you agree to Musk Mover&apos;s corporate leasing terms and conditions.<br />
              Our team typically responds within <strong className="text-slate-700">4 business hours</strong>.
            </p>
          </div>

          {/* Right Column - Summary Sidebar */}
          <div className="w-full lg:w-[360px] shrink-0 space-y-6">
            {/* Lease Summary Card */}
            <div className="bg-white border border-slate-100 rounded-none overflow-hidden">
              <div className="bg-slate-900 text-white p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[13px] font-black tracking-widest uppercase">Lease Summary</h4>
                  <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-slate-400 text-[12px]">Real-time availability based on selected dates</p>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Equipment Base Rate</span>
                  <span className="font-bold text-orange-600 text-[15px]">₦ 45,000 / <span className="text-slate-400 text-[12px]">Day</span></span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Selected Duration</span>
                  <span className="font-bold text-slate-900 text-[15px]">0 Days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Operator Support</span>
                  <span className="font-bold text-slate-400 text-[15px]">Not Selected</span>
                </div>

                {/* Select Dates CTA */}
                <div className="bg-orange-50 border-2 border-dashed border-orange-200 p-5 text-center rounded-none">
                  <p className="text-[10px] font-bold text-orange-600 tracking-widest uppercase mb-1">Availability Estimate</p>
                  <p className="text-xl font-black text-orange-600 mb-1">SELECT DATES</p>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Required for Calculation</p>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between pt-3">
                  <span className="text-[13px] font-bold text-slate-900 tracking-widest uppercase">Estimated Subtotal</span>
                  <span className="text-2xl font-black text-slate-300">₦ —.—</span>
                </div>
                <p className="text-right text-[11px] text-slate-400">*Excludes VAT and Logistics</p>
              </div>
            </div>

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
