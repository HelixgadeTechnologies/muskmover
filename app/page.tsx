import Header from "@/components/header"
import Hero from "@/components/hero"
import BrowseByType from "@/components/browse-by-type"
import SearchedVessels from "@/components/searched-vessels"
import RentOrBuySteps from "@/components/rent-or-buy-steps"
import Testimonials from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"
import HomeAbout from "@/components/home-about"
import HomeServices from "@/components/home-services"
import HomePrinciples from "@/components/home-principles"
import EquipmentMarketplace from "@/components/equipment-marketplace"
import HomeCTA from "@/components/home-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Primary Marketplace Section */}
      <Hero />
      <div className="bg-slate-50/50">
        <BrowseByType />
        <SearchedVessels />
        <EquipmentMarketplace />
        <RentOrBuySteps />
      </div>

      {/* Company Services & About Subsection */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Beyond the Marketplace
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto italic">
            Muskmover offers a comprehensive ecosystem of maritime solutions, 
            providing strategic excellence across Nigeria's offshore and marine operations.
          </p>
        </div>
        
        <HomeAbout />
        <HomeServices />
        <HomePrinciples />
      </section>

      {/* Trust & Social Proof */}
      <WhyChooseUs />
      <Testimonials />
      
      <HomeCTA />
      <Footer />
    </main>
  )
}

