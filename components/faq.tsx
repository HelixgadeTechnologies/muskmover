"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const faqs = [
  {
    question: "How do I know if I'm qualified to rent a vessel or equipment?",
    answer:
      "Most listings require a valid marine license or relevant certification. Our verification system will prompt you to upload required documents before booking. For larger commercial vessels, additional certifications (like STCW for crewed operations) may be needed. Each listing clearly states requirements, and our team can pre-verify your qualifications before you book.",
  },
  {
    question: "What happens if there's damage during my rental?",
    answer:
      "All rentals are covered by our comprehensive marine insurance. In the event of damage, our support team will guide you through the reporting process. Minor wear and tear is usually covered, while more significant incidents are handled through the insurance provider according to our terms and conditions.",
  },
  {
    question: "How much does it cost to list my vessel or equipment on Musk Mover?",
    answer:
      "Listing your vessel or equipment on Musk Mover is completely free. We only charge a small processing fee once a rental or sale is successfully completed through our platform. This ensures our interests are aligned with yours in getting your items booked or sold.",
  },
  {
    question: "Can I rent equipment in a different country, and how does customs work?",
    answer:
      "Yes, we operate across 200+ ports worldwide. For international rentals, our team can assist with the necessary maritime documentation and customs clearance processes. We work with local logistics partners to ensure a smooth transition of equipment across international borders.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-slate-900 text-center mb-16 tracking-tight uppercase">FAQ</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
                <div
                  className={`border border-slate-100 rounded-[20px] overflow-hidden transition-all duration-300 ${isOpen ? "shadow-lg shadow-slate-100/50" : "hover:border-slate-200"
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left transition-colors bg-white"
                  >
                    <span className={`text-[17px] font-bold transition-colors ${isOpen ? "text-[#050B20]" : "text-[#050B20]"
                      }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#050B20] text-white" : "bg-slate-50 text-slate-400"
                      }`}>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4 translate-x-0.5" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <p className="text-[15px] text-slate-400 leading-relaxed font-normal max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
