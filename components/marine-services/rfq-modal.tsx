"use client"

import { useState, useEffect } from "react"
import { X, Send, CheckCircle2, ShieldCheck, Phone, Mail, Building, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RfqModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export default function RfqModal({ isOpen, onClose, initialService }: RfqModalProps) {
  const [selectedService, setSelectedService] = useState(initialService || "General Marine Services Inquiry")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [timeline, setTimeline] = useState("Immediate (Within 7-14 Days)")
  const [details, setDetails] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService)
    }
  }, [initialService])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 900)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setName("")
    setCompany("")
    setEmail("")
    setPhone("")
    setDetails("")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 my-8">
        
        {/* Header */}
        <div className="bg-[#050B20] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-red-400 tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>Official Muskmover Tender & Service Desk</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Request Service Proposal &amp; Technical Quote
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Submit your technical specifications, charter dates, or procurement requirements directly to our operations superintendents.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Successfully Transmitted</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Thank you, <strong>{name || "Customer"}</strong>. Our marine operations team has received your request regarding <strong>{selectedService}</strong> and will contact you within 24 hours with technical specifications and commercial rates.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left max-w-md mx-auto mb-6 text-xs text-slate-600 space-y-1.5">
                <div><strong>Reference Service:</strong> {selectedService}</div>
                <div><strong>Client:</strong> {company ? `${company} (${email})` : email}</div>
                <div><strong>Target Mobilization:</strong> {timeline}</div>
              </div>
              <Button
                onClick={handleReset}
                className="bg-[#050B20] text-white hover:bg-black px-8 py-2 rounded-none font-semibold text-sm"
              >
                Close & Return
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Service Target Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Service / Scope of Work *
                </label>
                <input
                  type="text"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full h-11 px-4 text-sm font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g. Offshore Supply Vessels (OSV) / Valves Up to 12''"
                />
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="e.g. Engr. David Okafor"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="e.g. Delta Exploration Ltd"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="david@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Deployment / Mobilization Window
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full h-11 px-4 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="Immediate (Within 7-14 Days)">Immediate (Emergency / Within 7-14 Days)</option>
                  <option value="Upcoming Month (Within 30 Days)">Upcoming Month (Within 30 Days)</option>
                  <option value="Long-term Tender / Project Scheduled">Long-term Tender / Project Scheduled</option>
                  <option value="Periodic Supply Contract">Periodic Supply / Retainership Contract</option>
                </select>
              </div>

              {/* Technical Scope / Details */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Scope Details &amp; Operational Requirements
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Detail vessel specifications, required bollard pull, volume of chemical/petroleum haulage, pipeline corridor, valve class sizes, or required personnel..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
                >
                  {isSubmitting ? (
                    <span>Transmitting Proposal Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request for Quotation (RFQ)</span>
                    </>
                  )}
                </Button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  All technical inquiries are handled under strict NDA and processed by licensed marine superintendents.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}
