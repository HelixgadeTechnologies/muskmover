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

// Curated E-Commerce Fallbacks for instant rich visuals
const vesselFallbacks = [
  {
    id: 101,
    title: "DP2 Platform Supply Vessel (PSV)",
    category: "VESSELS",
    details: "850 sqm clear deck area, 45 pax accommodation, ideal for deepwater offshore logistics.",
    image: "/large-cargo-ship.png",
    status: "available",
    acquisitionType: "LEASE OR BUY",
    priceDisplay: "₦3,500,000 / day",
    year: 2023,
    weightOrCapacity: "3,200 DWT",
    location: "Lagos Free Zone",
    condition: "Classed DP2",
  },
  {
    id: 102,
    title: "150T Anchor Handling Tug Supply (AHTS)",
    category: "VESSELS",
    details: "150 Tons bollard pull with high capacity winch for offshore rig towing and positioning.",
    image: "/large-container-ship.jpg",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦2,800,000 / day",
    year: 2022,
    weightOrCapacity: "150T Pull",
    location: "Port Harcourt Hub",
    condition: "Excellent",
  },
  {
    id: 103,
    title: "Damen Fast Crew Supplier (FCS 3307)",
    category: "VESSELS",
    details: "33 knot speed, 80 crew capacity, aluminum hull for rapid offshore crew transfers.",
    image: "/hero-ocean.jpg",
    status: "available",
    acquisitionType: "LEASE OR BUY",
    priceDisplay: "₦1,200,000 / day",
    year: 2023,
    weightOrCapacity: "80 Pax",
    location: "Warri Offshore Hub",
    condition: "Like New",
  },
  {
    id: 104,
    title: "Heavy Duty Deck Cargo Barge (300ft x 90ft)",
    category: "VESSELS",
    details: "10,000 DWT payload capacity with reinforced deck for pipe laying and heavy equipment.",
    image: "/large-cargo-ship.png",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦950,000 / day",
    year: 2021,
    weightOrCapacity: "10,000 DWT",
    location: "Bonny Island Base",
    condition: "Operational",
  },
]

const cargoFallbacks = [
  {
    id: 201,
    title: "Heavy Duty Anchor Handling Winch",
    category: "CARGO & MACHINERY",
    details: "250 Ton load capacity hydraulic winch system for anchor positioning and towing.",
    image: "/ship-anchor-system.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦450,000 / day",
    year: 2023,
    weightOrCapacity: "250 Tons",
    location: "Port Harcourt Hub",
    condition: "New",
  },
  {
    id: 202,
    title: "Offshore Pedestal Deck Crane 50T",
    category: "CARGO & MACHINERY",
    details: "50 Ton max lift capacity with 35m lattice boom for marine vessel deck loading.",
    image: "/hydraulic-pump-equipment.jpg",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦600,000 / day",
    year: 2022,
    weightOrCapacity: "50 Tons",
    location: "Lagos Hub",
    condition: "Certified",
  },
  {
    id: 203,
    title: "High-Pressure Mud Pump F-1600",
    category: "CARGO & MACHINERY",
    details: "5000 PSI operating pressure triplex mud pump for offshore drilling mud circulation.",
    image: "/hydraulic-pump-equipment.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦380,000 / day",
    year: 2021,
    weightOrCapacity: "5000 PSI",
    location: "Warri Hub",
    condition: "Refurbished",
  },
  {
    id: 204,
    title: "Subsea Cable Laying Carousel (1500T)",
    category: "CARGO & MACHINERY",
    details: "1,500 Ton storage capacity carousel with drive towers for subsea umbilical deployment.",
    image: "/ship-anchor-system.jpg",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦850,000 / day",
    year: 2022,
    weightOrCapacity: "1,500 Tons",
    location: "Onne Port Hub",
    condition: "Excellent",
  },
]

const propulsionFallbacks = [
  {
    id: 301,
    title: "CAT 3516B Marine Power System",
    category: "ENGINES & POWER",
    details: "2000 ekW continuous output diesel generator set for vessel primary power.",
    image: "/marine-diesel-engine.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦320,000 / day",
    year: 2022,
    weightOrCapacity: "2000 ekW",
    location: "Port Harcourt Hub",
    condition: "Zero Hours",
  },
  {
    id: 302,
    title: "Wärtsilä 9L20 Marine Propulsion Engine",
    category: "ENGINES & POWER",
    details: "1800 kW heavy fuel oil marine diesel main engine with gearbox and digital controls.",
    image: "/marine-diesel-engine.jpg",
    status: "available",
    acquisitionType: "DIRECT PURCHASE",
    priceDisplay: "₦65,000,000 Sale",
    year: 2021,
    weightOrCapacity: "1800 kW",
    location: "Lagos Free Zone",
    condition: "Serviced",
  },
  {
    id: 303,
    title: "Schottel Azimuth Thruster SRP 1515",
    category: "ENGINES & POWER",
    details: "1500 HP 360-degree steerable thruster unit for DP2 dynamic positioning vessels.",
    image: "/marine-diesel-engine.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦400,000 / day",
    year: 2022,
    weightOrCapacity: "1500 HP",
    location: "Warri Hub",
    condition: "Certified",
  },
  {
    id: 304,
    title: "Cummins KTA50-M2 Main Engine",
    category: "ENGINES & POWER",
    details: "1600 HP heavy duty marine propulsion engine engineered for tugboats and supply craft.",
    image: "/marine-diesel-engine.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦280,000 / day",
    year: 2023,
    weightOrCapacity: "1600 HP",
    location: "Port Harcourt Base",
    condition: "New",
  },
]

const safetyFallbacks = [
  {
    id: 401,
    title: "SOLAS TEMPSC Lifeboat System (80 Pax)",
    category: "SAFETY & NAVIGATION",
    details: "Totally enclosed motor-propelled survival craft certified for 80 persons offshore.",
    image: "/large-cargo-ship.png",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦150,000 / day",
    year: 2023,
    weightOrCapacity: "80 Persons",
    location: "Lagos Port Hub",
    condition: "SOLAS Certified",
  },
  {
    id: 402,
    title: "Work Class Subsea ROV Unit (3000m)",
    category: "SAFETY & SUBSEA",
    details: "3,000m depth rated dual manipulator arm subsea ROV with HD sonar & UHD cameras.",
    image: "/large-container-ship.jpg",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦1,800,000 / day",
    year: 2022,
    weightOrCapacity: "3,000m Depth",
    location: "Warri Offshore Base",
    condition: "Operational",
  },
  {
    id: 403,
    title: "FURUNO S-Band Marine Radar & AIS System",
    category: "SAFETY & NAVIGATION",
    details: "96 NM range dual radar system with integrated Class A AIS transponder and ARPA.",
    image: "/ship-anchor-system.jpg",
    status: "available",
    acquisitionType: "BUY OR LEASE",
    priceDisplay: "₦85,000 / day",
    year: 2023,
    weightOrCapacity: "96 NM Range",
    location: "Port Harcourt Hub",
    condition: "New in Box",
  },
  {
    id: 404,
    title: "Surface Supplied Air Diving Spread",
    category: "SAFETY & SUBSEA",
    details: "IMCA compliant air diving control container, decompression chamber & high-pressure compressor.",
    image: "/hydraulic-pump-equipment.jpg",
    status: "available",
    acquisitionType: "LEASE ONLY",
    priceDisplay: "₦420,000 / day",
    year: 2022,
    weightOrCapacity: "50m Depth",
    location: "Onne Offshore Hub",
    condition: "IMCA Certified",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 1. Primary Marketplace Hero Section (Preserved) */}
      <Hero />

      {/* 2. E-Commerce Trust & Guarantee Bar */}
      <EcommerceTrustBar />

      {/* 3. Visual Shop By Category Grid */}
      <ShopByCategory />

      {/* 4. Category 1: Offshore Vessels & Fleet */}
      <CategoryProductSection
        categoryId="vessels"
        title="Offshore Vessels & Fleet"
        subtitle="Platform Supply Vessels, Tugboats, Barges, and Crew Boats ready for charter and direct purchase."
        subcategories={["All", "PSV / Supply", "Tugs", "Barges", "Crew Boats"]}
        fallbackItems={vesselFallbacks}
      />

      {/* 5. E-Commerce Promotional Banner */}
      <EcommercePromoBanner />

      {/* 6. Category 2: Heavy Cargo Equipment & Winches */}
      <CategoryProductSection
        categoryId="cargo-equipment"
        title="Heavy Cargo & Deck Machinery"
        subtitle="Anchor winches, deck cranes, mud pumps, and subsea lifting equipment."
        subcategories={["All", "Winches & Cranes", "Pumps & Hydraulics", "Lifting"]}
        fallbackItems={cargoFallbacks}
        bgDark={true}
      />

      {/* 7. Category 3: Marine Engines & Power Systems */}
      <CategoryProductSection
        categoryId="propulsion"
        title="Marine Engines & Power Systems"
        subtitle="CAT marine generators, diesel propulsion engines, and azimuth thrusters."
        subcategories={["All", "Generators", "Propulsion Engines", "Thrusters"]}
        fallbackItems={propulsionFallbacks}
      />

      {/* 8. Category 4: Safety, Diving & Navigation Gear */}
      <CategoryProductSection
        categoryId="safety"
        title="Safety, Diving & Navigation Gear"
        subtitle="SOLAS approved lifeboats, subsea ROV units, marine radar, and air diving spreads."
        subcategories={["All", "Lifeboats & SOLAS", "Subsea ROVs", "Radar & Navigation"]}
        fallbackItems={safetyFallbacks}
        bgDark={true}
      />

      {/* 9. Order & Charter Process Steps */}
      <RentOrBuySteps />

      {/* 10. Industry Partners & Alliances */}
      <OurPartners />

      {/* 11. Customer Trust & Social Proof */}
      <WhyChooseUs />
      <Testimonials />

      {/* 11. Final Call To Action */}
      <HomeCTA />

      {/* 12. E-Commerce Footer */}
      <Footer />
    </main>
  )
}
