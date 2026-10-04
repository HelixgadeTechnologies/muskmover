"use client"

import { useState } from "react"
import Header from "@/components/header"
import MarineServicesHero from "@/components/marine-services/hero"
import MarineServicesCatalog from "@/components/marine-services/catalog"
import MarineCompliance from "@/components/marine-services/compliance"
import MarineQuoteForm from "@/components/marine-services/quote-form"
import RfqModal from "@/components/marine-services/rfq-modal"
import ServicesExcellence from "@/components/services-excellence"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function MarineServicesPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("General Marine Services Inquiry")

  const handleOpenRfq = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle)
    }
    setIsRfqOpen(true)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <MarineServicesHero onOpenRfq={handleOpenRfq} />

      {/* Complete Interactive 6-Division Services Catalog */}
      <MarineServicesCatalog onSelectServiceForRfq={handleOpenRfq} />

      {/* Compliance, NSCDC License & Quality Assurances */}
      <MarineCompliance />

      {/* Direct In-Page Service Proposal / RFQ Form */}
      <MarineQuoteForm />

      {/* Standards of Excellence */}
      <ServicesExcellence />

      {/* Equipment Marketplace CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Fast RFQ Modal for Individual Service Inquiries */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialService={selectedService}
      />
    </main>
  )
}
