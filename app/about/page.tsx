import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import ProblemSolved from "@/components/problem-solved"
import WhyDifferent from "@/components/why-different"
import Principles from "@/components/principles"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <AboutHero />
            <ProblemSolved />
            <WhyDifferent />
            <Principles />

            <ScrollReveal delay={0.1}>
                <FAQ />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <Testimonials />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <CTASection />
            </ScrollReveal>

            <Footer />
        </main>
    )
}
