import Header from "@/components/header"
import PrivacyHero from "@/components/privacy-hero"
import PrivacyContent from "@/components/privacy-content"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Privacy Policy | MuskMover Marketplace",
    description: "Read our privacy policy to understand how MuskMover Ltd collects, uses, and safeguards your personal information.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PrivacyHero />
            <PrivacyContent />
            <CTASection />
            <Footer />
        </main>
    )
}
