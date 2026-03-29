"use client"

import { Mail, MapPin, Phone, Globe } from "lucide-react"

export default function PrivacyContent() {
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We may collect the following categories of information:",
            items: [
                "Account Information",
                "Full name",
                "Email address",
                "Phone number",
                "Country and location details",
                "Any information manually provided through contact forms or other inquiries"
            ]
        },
        {
            title: "2. How We Use Your Information",
            content: "We use collected information to:",
            items: [
                "Respond to inquiries and provide assistance.",
                "Facilitate transactions such as chartering, ship management, marine supply, security services, and engineering services.",
                "Improve website functionality and user experience.",
                "Send periodic updates and news about our services and information.",
                "Maintain security, stability, and operational efficiency."
            ]
        },
        {
            title: "3. Legal Basis for Processing (Nigeria)",
            content: "We process personal data in accordance with:",
            items: [
                "User consent",
                "Contractual necessity",
                "Legitimate business interests",
                "Compliance with applicable Nigerian data protection laws"
            ]
        },
        {
            title: "4. Data Security",
            content: "We implement high-level administrative, technical and organizational security measures to protect personal data against unauthorized access, loss, or misuse, in accordance with industry-best practices and data protection requirements."
        },
        {
            title: "5. Data Retention",
            content: "Personal data is retained only for as long as necessary to:",
            items: [
                "Fulfill the purpose for which it was collected",
                "Meet legal, regulatory, or tax reporting obligations."
            ]
        },
        {
            title: "6. Your Rights",
            content: "You have the right to:",
            items: [
                "Access personal information",
                "Request correction of inaccurate data",
                "Request deletion of data",
                "Object to processing at any time",
                "Revoke consent where previously provided",
                "Exercise your right of data portability in specific cases"
            ]
        },
        {
            title: "7. Changes to This Policy",
            content: "We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date."
        }
    ]

    return (
        <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Introduction */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 underline decoration-slate-200 underline-offset-8">Introduction</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        Muskmover Ltd (&quot;Muskmover&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy of visitors, users, and partners who interact with our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit Muskmover website or engage our services in any manner.
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

                {/* Section 8: Contact Information */}
                <div className="mb-16 p-8 border border-slate-100 rounded-[12px] bg-slate-50/50">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Contact Information</h2>
                    <p className="font-semibold text-slate-900 mb-6">Muskmover Ltd</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-600">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span className="text-sm md:text-base">Port Harcourt, Rivers State, Nigeria</span>
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
                            <span className="text-sm md:text-base">www.muskmover.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
