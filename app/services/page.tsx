import Header from "@/components/header"
import ServicesHero from "@/components/services-hero"
import ServicesList from "@/components/services-list"
import ServicesExcellence from "@/components/services-excellence"
import EquipmentMarketplace from "@/components/equipment-marketplace"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesExcellence />
      <EquipmentMarketplace />
      <CTASection />
      <Footer />
    </main>
  )
}
