"use client"

import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Pencil, ArrowRight, Mail, Phone, Clock, ShieldCheck, Package, MapPin, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const steps = [
  { label: "EQUIPMENT", number: 1, completed: true },
  { label: "LEASE DETAILS", number: 2, completed: true },
  { label: "CONFIRMATION", number: 3, active: true },
]

function formatDate(raw: string) {
  if (!raw) return "—"
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })
}

function ConfirmationContent() {
  const searchParams = useSearchParams()

  const equipmentId    = searchParams.get("equipmentId") ?? ""
  const equipmentName  = searchParams.get("equipmentName") ?? "Equipment"
  const equipmentSku   = searchParams.get("equipmentSku") ?? "—"
  const equipmentImage = searchParams.get("equipmentImage") ?? "/ship-anchor-system.jpg"
  const company        = searchParams.get("company") ?? "—"
  const contactPerson  = searchParams.get("contactPerson") ?? "—"
  const renterEmail    = searchParams.get("renterEmail") ?? "—"
  const phone          = searchParams.get("phone") ?? "—"
  const industrySector = searchParams.get("industrySector") ?? "—"
  const projectLocation= searchParams.get("projectLocation") ?? "—"
  const startDate      = searchParams.get("startDate") ?? ""
  const endDate        = searchParams.get("endDate") ?? ""
  const crewRequested  = searchParams.get("crewRequested") === "true"
  const requirements   = searchParams.get("requirements") ?? ""
  const durationDays   = searchParams.get("durationDays") ?? "0"
  const totalPrice     = Number(searchParams.get("totalPrice") ?? "0")

  const editHref = equipmentId
    ? `/marketplace/lease?equipmentId=${equipmentId}`
    : "/marketplace/lease"

  return (
    <main className="min-h-screen bg-slate-50/50">
      <Header />

      {/* Progress Stepper */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-orange-500" />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.completed || step.active
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">

        {/* Success Banner */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 mb-3">
            Enquiry Submitted Successfully
          </h1>
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-lg mx-auto">
            Your lease enquiry has been received. Our team will review your request and respond within{" "}
            <strong className="text-slate-700">4 business hours</strong>.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-[13px] font-bold px-5 py-2.5 rounded-none">
            <FileText className="w-4 h-4" />
            Reference: {equipmentSku}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Enquiry Summary */}
          <div className="lg:col-span-2 space-y-8">

            {/* Equipment Details */}
            <div className="bg-white border border-slate-100 rounded-none p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Package className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 tracking-widest uppercase">Equipment Details</h3>
              </div>
              <div className="flex items-center gap-5 p-5 bg-slate-50 border border-slate-100">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                  <Image src={equipmentImage} alt={equipmentName} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{equipmentName}</h4>
                  <p className="text-slate-500 text-[13px]">Reference: {equipmentSku}</p>
                </div>
              </div>
            </div>

            {/* Company & Contact Info */}
            <div className="bg-white border border-slate-100 rounded-none p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 tracking-widest uppercase">Company & Contact</h3>
              </div>
              <div className="space-y-0">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Company</span>
                  <span className="font-bold text-slate-900 text-[14px]">{company}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Contact Person</span>
                  <span className="font-bold text-slate-900 text-[14px]">{contactPerson}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> Email</span>
                  <span className="font-bold text-slate-900 text-[14px]">{renterEmail}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> Phone</span>
                  <span className="font-bold text-slate-900 text-[14px]">{phone}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Industry Sector</span>
                  <span className="font-bold text-slate-900 text-[14px]">{industrySector}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Project Location</span>
                  <span className="font-bold text-slate-900 text-[14px]">{projectLocation}</span>
                </div>
              </div>
            </div>

            {/* Lease Terms */}
            <div className="bg-white border border-slate-100 rounded-none p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 tracking-widest uppercase">Lease Terms</h3>
              </div>
              <div className="space-y-0">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Start Date</span>
                  <span className="font-bold text-slate-900 text-[14px]">{formatDate(startDate)}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">End Date</span>
                  <span className="font-bold text-slate-900 text-[14px]">{formatDate(endDate)}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Total Duration</span>
                  <span className="font-bold text-orange-600 text-[14px]">
                    {durationDays} {Number(durationDays) === 1 ? "Day" : "Days"}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Crew/Operator Requested</span>
                  <span className={`font-bold text-[14px] ${crewRequested ? "text-green-600" : "text-slate-400"}`}>
                    {crewRequested ? "Yes" : "No"}
                  </span>
                </div>
                {requirements && (
                  <div className="py-3">
                    <span className="text-slate-500 text-[14px] block mb-2">Special Requirements</span>
                    <p className="text-slate-900 font-semibold text-[14px] leading-relaxed bg-slate-50 border border-slate-100 p-3">
                      {requirements}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* What Happens Next */}
            <div className="bg-white border border-slate-100 rounded-none p-6">
              <h4 className="text-[13px] font-black text-slate-900 tracking-widest uppercase mb-5">What Happens Next?</h4>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-bold text-[12px]">1</div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">Team Review</p>
                    <p className="text-[12px] text-slate-500">Our leasing specialists will review your request</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-bold text-[12px]">2</div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">Custom Quote</p>
                    <p className="text-[12px] text-slate-500">You&apos;ll receive a detailed quote via email</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-bold text-[12px]">3</div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">Agreement & Dispatch</p>
                    <p className="text-[12px] text-slate-500">Sign the lease and equipment ships to your site</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-orange-50 border border-orange-200 rounded-none p-6 text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <p className="text-[13px] font-bold text-slate-900 mb-1">Expected Response Time</p>
              <p className="text-2xl font-black text-orange-600">4 Hours</p>
              <p className="text-[11px] text-slate-500 mt-1">During business hours (Mon–Fri)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-200 mt-12">
          <Link href={editHref}>
            <Button variant="outline" className="border-slate-200 text-slate-700 font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-8 bg-white hover:bg-slate-50">
              <Pencil className="w-4 h-4 mr-2" />
              Edit Order
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-10 shadow-lg shadow-orange-500/20">
              Browse More Equipment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function LeaseConfirmationPage() {
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
      <ConfirmationContent />
    </Suspense>
  )
}
