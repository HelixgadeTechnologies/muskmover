"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Download, ArrowRight, Mail, Phone, Clock, ShieldCheck, Package, MapPin, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const steps = [
  { label: "EQUIPMENT", number: 1, completed: true },
  { label: "LEASE DETAILS", number: 2, completed: true },
  { label: "CONFIRMATION", number: 3, active: true },
]

const enquirySummary = {
  equipment: "150T Double Drum Heavy-Duty Offshore Winch",
  referenceId: "MMR-EQ-2024-0842",
  company: "Niger Delta Oil Services Ltd",
  contact: "John Adeyemi",
  email: "john@nigerdelaoil.com",
  phone: "+234 801 234 5678",
  sector: "Oil & Gas",
  location: "Onne Port, Rivers State",
  startDate: "March 15, 2024",
  endDate: "June 15, 2024",
  duration: "92 Days",
  crewRequested: true,
  baseRate: "₦ 45,000 / Day",
  estimatedTotal: "₦ 4,140,000",
}

export default function LeaseConfirmationPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <Header />

      {/* Progress Stepper */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-slate-200" />
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
            Your lease enquiry has been received. Our team will review your request and respond within <strong className="text-slate-700">4 business hours</strong>.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-[13px] font-bold px-5 py-2.5 rounded-none">
            <FileText className="w-4 h-4" />
            Reference: {enquirySummary.referenceId}
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
                  <Image src="/ship-anchor-system.jpg" alt="Equipment" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{enquirySummary.equipment}</h4>
                  <p className="text-slate-500 text-[13px]">Reference: {enquirySummary.referenceId}</p>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Company</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.company}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Contact Person</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.contact}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> Email</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.email}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> Phone</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.phone}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Industry Sector</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.sector}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-500 text-[14px] flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Project Location</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.location}</span>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Start Date</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.startDate}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">End Date</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.endDate}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Total Duration</span>
                  <span className="font-bold text-orange-600 text-[14px]">{enquirySummary.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 text-[14px]">Crew/Operator Requested</span>
                  <span className={`font-bold text-[14px] ${enquirySummary.crewRequested ? "text-green-600" : "text-slate-400"}`}>
                    {enquirySummary.crewRequested ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-500 text-[14px]">Base Rate</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.baseRate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Cost Summary */}
            <div className="bg-white border border-slate-100 rounded-none overflow-hidden">
              <div className="bg-slate-900 text-white p-6">
                <h4 className="text-[13px] font-black tracking-widest uppercase mb-1">Cost Estimate</h4>
                <p className="text-slate-400 text-[12px]">Subject to final review</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 text-[13px]">Base Rate × {enquirySummary.duration}</span>
                  <span className="font-bold text-slate-900 text-[14px]">{enquirySummary.estimatedTotal}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 text-[13px]">Operator Support</span>
                  <span className="font-bold text-slate-400 text-[14px]">TBD</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 text-[13px]">Logistics & Delivery</span>
                  <span className="font-bold text-slate-400 text-[14px]">TBD</span>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-black text-slate-900 tracking-widest uppercase">Estimated Total</span>
                    <span className="text-xl font-black text-orange-600">{enquirySummary.estimatedTotal}</span>
                  </div>
                  <p className="text-right text-[11px] text-slate-400 mt-1">*Final quote will be provided by our team</p>
                </div>
              </div>
            </div>

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
          <Button variant="outline" className="border-slate-200 text-slate-700 font-bold text-[13px] tracking-widest uppercase rounded-none h-12 px-8 bg-white hover:bg-slate-50">
            <Download className="w-4 h-4 mr-2" />
            Download Summary
          </Button>
          <Link href="/marketplace/category">
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
