"use client"

import { useState } from "react"
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function MarineQuoteForm() {
  const [division, setDivision] = useState("Marine Fleet & Vessel Supply")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    timeline: "Within 30 Days",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#050B20] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct Info & Value Proposition */}
            <div className="lg:col-span-5 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#050B20] to-[#101A38]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Procurement &amp; Charters</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                  Let&apos;s Discuss Your Next Offshore Campaign or Supply Run
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Whether you require an immediate vessel charter, certified valve supply, emergency oil spill containment, or long-term pipeline surveillance, our operations desk is ready to respond.
                </p>

                {/* Direct Contact Points */}
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-red-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">24/7 Operations Desk</div>
                      <div className="text-white font-bold mt-0.5">+234 812 000 0000 / +234 803 000 0000</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-red-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Official RFP &amp; Charters</div>
                      <div className="text-white font-bold mt-0.5">operations@muskmover.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-red-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Operational Shorebase</div>
                      <div className="text-white font-bold mt-0.5">Lagos &amp; Port Harcourt Operational Hubs, Nigeria</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400">
                Guaranteed response within 1 business day for commercial tenders and technical RFQs.
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-slate-900">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you. Your RFP for <strong>{division}</strong> has been assigned to our senior marine superintendents. We will be in contact shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        timeline: "Within 30 Days",
                        message: ""
                      })
                    }}
                    className="bg-[#050B20] text-white hover:bg-black font-semibold text-xs px-6 py-2.5 rounded-lg"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Request an Official Service Proposal
                  </h4>

                  {/* Division Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Primary Service Division *
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full h-11 px-4 text-sm font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Marine Fleet & Vessel Supply">1. Marine Fleet &amp; Vessel Supply (OSV, DSV, Tugboats, Barges)</option>
                      <option value="Offshore Support & Installation">2. Offshore Support &amp; Rig Moves (Mooring, Houseboats, Logistics)</option>
                      <option value="Maritime Security & RoW Surveillance">3. Maritime Security &amp; RoW (NSCDC Licensed, Pipeline Surveillance)</option>
                      <option value="Specialized Haulage & Industrial Road Transport">4. Specialized Haulage (Petroleum Gas, White Products, Waste)</option>
                      <option value="Safety, Lab & Chemical Supplies">5. Safety, Lab &amp; Chemical Supplies (PPE, Analar, Fire Safety)</option>
                      <option value="Mechanical Parts & Environmental Spill Control">6. Mechanical Parts &amp; Oil Spill Control (Valves, Flanges, Booms)</option>
                    </select>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full h-11 px-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Contractor *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. TotalEnergies, Chevron, Seplat..."
                        className="w-full h-11 px-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="w-full h-11 px-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full h-11 px-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  {/* Requirements & Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Scope of Work, Quantities &amp; Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required dates, technical specs, valve dimensions, chemical grade, location coordinates, or guard strength..."
                      className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit RFP to Operations Desk</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
