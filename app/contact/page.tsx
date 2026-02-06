import Header from "@/components/header"
import ContactHero from "@/components/contact-hero"
import ContactInfoForm from "@/components/contact-info-form"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Contact Us | MuskMover Marketplace",
    description: "Get in touch with the MuskMover team for any inquiries regarding marine vessel and equipment rentals or sales.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <ContactHero />
            <ContactInfoForm />
            <FAQ />
            <CTASection />
            <Footer />
        </main>
    )
}
