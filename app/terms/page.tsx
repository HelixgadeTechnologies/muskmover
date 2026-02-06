import Header from "@/components/header"
import TermsHero from "@/components/terms-hero"
import TermsContent from "@/components/terms-content"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Terms & Conditions | MuskMover Marketplace",
    description: "Read our terms and conditions to understand the rules and guidelines for using MuskMover Ltd's website and services.",
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <TermsHero />
            <TermsContent />
            <CTASection />
            <Footer />
        </main>
    )
}
