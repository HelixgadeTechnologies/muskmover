import Header from "@/components/header"
import Hero from "@/components/hero"
import EcommerceTrustBar from "@/components/ecommerce-trust-bar"
import ShopByCategory from "@/components/shop-by-category"
import CategoryProductSection from "@/components/category-product-section"
import EcommercePromoBanner from "@/components/ecommerce-promo-banner"
import RentOrBuySteps from "@/components/rent-or-buy-steps"
import Testimonials from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"
import OurPartners from "@/components/our-partners"
import HomeCTA from "@/components/home-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 1. Primary Marketplace Hero Section with Live Search */}
      <Hero />

      {/* 2. E-Commerce Trust & Guarantee Bar */}
      <EcommerceTrustBar />

      {/* 3. Visual Shop By Category Grid */}
      <ShopByCategory />

      {/* 4. Category: Offshore Vessels & Fleet (Populated from Live Backend) */}
      <CategoryProductSection
        categoryId="vessels"
        title="Offshore Vessels & Fleet"
        subtitle="Platform Supply Vessels, Tugboats, Barges, and Crew Boats ready for charter and direct purchase."
        subcategories={["All", "PSV / Supply", "Tugs", "Barges", "Crew Boats"]}
      />

      {/* 5. E-Commerce Promotional Banner */}
      <EcommercePromoBanner />

      {/* 6. Category: Heavy Cargo Equipment & Winches */}
      <CategoryProductSection
        categoryId="cargo-equipment"
        title="Heavy Cargo & Deck Machinery"
        subtitle="Anchor winches, deck cranes, mud pumps, and subsea lifting equipment."
        subcategories={["All", "Winches & Cranes", "Pumps & Hydraulics", "Lifting"]}
        bgDark={true}
      />

      {/* 7. Category: Marine Engines & Power Systems */}
      <CategoryProductSection
        categoryId="propulsion"
        title="Marine Engines & Power Systems"
        subtitle="CAT marine generators, diesel propulsion engines, and azimuth thrusters."
        subcategories={["All", "Generators", "Propulsion Engines", "Thrusters"]}
      />

      {/* 8. Category: Safety, Diving & Navigation Gear */}
      <CategoryProductSection
        categoryId="safety"
        title="Safety, Diving & Navigation Gear"
        subtitle="SOLAS approved lifeboats, subsea ROV units, marine radar, and air diving spreads."
        subcategories={["All", "Lifeboats & SOLAS", "Subsea ROVs", "Radar & Navigation"]}
        bgDark={true}
      />

      {/* 9. Order & Charter Process Steps */}
      <RentOrBuySteps />

      {/* 10. Industry Partners & Alliances */}
      <OurPartners />

      {/* 11. Customer Trust & Social Proof */}
      <WhyChooseUs />
      <Testimonials />

      {/* 12. Final Call To Action */}
      <HomeCTA />

      {/* 13. E-Commerce Footer */}
      <Footer />
    </main>
  )
}
