"use client"

import { Mail, MapPin, Phone, Globe } from "lucide-react"

export default function TermsContent() {
    const sections = [
        {
            title: "1. Company Overview",
            content: "Musk Mover Ltd. provides a marketplace for marine vessel rentals and sales, boat services, and other marine-related activities based in Lagos and Rivers my marine marketplace and store."
        },
        {
            title: "2. Use of Website",
            content: "You agree to:",
            items: [
                "Use the website for lawful purposes only.",
                "Maintain the confidentiality of your account information.",
                "Provide accurate, current, and complete information when registering.",
                "Not interfere with the website's functionality or security measures."
            ]
        },
        {
            title: "3. Services",
            content: "All services are subject to:",
            items: [
                "Availability",
                "Operational safety requirements",
                "Regulatory standards",
                "Applicable marine laws and regulations",
                "Musk Mover Ltd reserves the right to modify services and pricing without notice."
            ]
        },
        {
            title: "4. Intellectual Property",
            content: "All content on the website including text, images, graphics, and logos and software, is the property of Musk Mover Pty Ltd and may not be reproduced, distributed, or used without prior written permission."
        },
        {
            title: "5. Limitation of Liability",
            content: "Musk Mover Ltd shall not be liable for:",
            items: [
                "Indirect, incidental, or consequential damages.",
                "Losses due to unforeseen circumstances or equipment failure.",
                "Accuracy of information provided by third-party service providers."
            ]
        },
        {
            title: "6. Third-Party Services",
            content: "We may utilize third-party website links and vendors for certain services. Musk Mover Pty Ltd. is not responsible for the independent actions of third parties or any loss or damage incurred as a result."
        },
        {
            title: "7. Confidentiality",
            content: "Any non-public information exchanged during service engagement shall be treated as confidential by both parties as required by law."
        },
        {
            title: "8. Governing Law",
            content: "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria."
        },
        {
            title: "9. Termination",
            content: "We reserve the right to suspend or terminate access to the website and services for violations of these Terms or applicable laws."
        },
        {
            title: "10. Amendments",
            content: "Musk Mover Ltd reserves to update these Terms at any time. Continued use of the website constitutes acceptance of updated terms."
        }
    ]

    return (
        <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Introduction */}
                <div className="mb-16">
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base italic">
                        These Terms and Conditions govern your use of the Musk Mover Ltd website and services. By accessing our website or engaging our services, you agree to be bound by these terms.
                    </p>
                </div>

                {/* Dynamic Sections */}
                {sections.map((section, index) => (
                    <div key={index} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">{section.title}</h2>
                        <p className="text-slate-600 mb-6 text-sm md:text-base">{section.content}</p>
                        {section.items && (
                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                {/* Section 11: Contact Information */}
                <div className="mb-16 p-8 border border-slate-100 rounded-[12px] bg-slate-50/50">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Contact Information</h2>
                    <p className="font-semibold text-slate-900 mb-6">Musk Mover Pty Ltd</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-600">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span className="text-sm md:text-base">Lekki, Delta, Nigeria.</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <Phone className="w-5 h-5 text-red-500" />
                            <span className="text-sm md:text-base">+234 807 354 8926 | +234 906 094 5385</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <Mail className="w-5 h-5 text-red-500" />
                            <span className="text-sm md:text-base">muskmoverltd@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <Globe className="w-5 h-5 text-red-500" />
                            <span className="text-sm md:text-base">www.muskmover.ng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
