import Header from "@/components/header"
import Hero from "@/components/hero"
import BrowseByType from "@/components/browse-by-type"
import FindVesselsSection from "@/components/find-vessels-section"
import SearchedVessels from "@/components/searched-vessels"
import WhyChooseUs from "@/components/why-choose-us"
import EquipmentMarketplace from "@/components/equipment-marketplace"
import RentOrBuySteps from "@/components/rent-or-buy-steps"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrowseByType />
      <FindVesselsSection />
      <SearchedVessels />
      <WhyChooseUs />
      <EquipmentMarketplace />
      <RentOrBuySteps />
      <FAQ />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
