import Header from "@/components/header"
import HomeHero from "@/components/home-hero"
import HomeAbout from "@/components/home-about"
import HomeWhyChooseUs from "@/components/home-why-choose-us"
import HomeServices from "@/components/home-services"
import HomePrinciples from "@/components/home-principles"
import HomeCTA from "@/components/home-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeWhyChooseUs />
      <HomeServices />
      <HomePrinciples />
      <HomeCTA />
      <Footer />
    </main>
  )
}
