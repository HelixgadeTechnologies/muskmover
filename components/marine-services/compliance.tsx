"use client"

import { ShieldCheck, Award, FileCheck2, HardHat, Droplets, CheckCircle2 } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function MarineCompliance() {
  const complianceItems = [
    {
      icon: ShieldCheck,
      title: "NSCDC Licensed Security",
      subtitle: "Government Certified Protection",
      description:
        "Fully accredited under the Nigeria Security and Civil Defence Corps (NSCDC) to deploy licensed private security personnel, armed escort vessels, and electronic pipeline surveillance across onshore, swamp, and offshore assets."
    },
    {
      icon: HardHat,
      title: "Target Zero-LTI HSE Commitment",
      subtitle: "Uncompromising Safety Culture",
      description:
        "Every offshore vessel, rig move, diving support operation, and road haulage transit operates under rigorous Permit-to-Work (PTW) frameworks, Toolbox Talks (TBT), and international HSE standards."
    },
    {
      icon: FileCheck2,
      title: "Certified MTC & Chemical Traceability",
      subtitle: "Full Material Documentation",
      description:
        "Mechanical valves (up to 12”), flanges, nozzles, gaskets, and fasteners come with Mill Test Certificates (MTC 3.1). All analytical chemicals are supplied with verified Certificates of Analysis (COA) and MSDS."
    },
    {
      icon: Droplets,
      title: "Environmental & Spill Standards",
      subtitle: "Rapid Response & Containment",
      description:
        "Oil spill containment booms, absorbent pads, and recovery systems comply with ASTM F716/F726 standards and Federal Ministry of Environment guidelines for rapid pollution mitigation."
    }
  ]

  return (
    <section className="py-20 bg-[#050B20] text-white border-y border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Regulatory Standing &amp; Quality Assurances
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Licensed, Certified &amp; Audit-Ready
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              We understand that energy majors and EPC contractors require unquestionable regulatory compliance. Muskmover Ltd operates with verified licenses, class approvals, and audit-proof safety protocols.
            </p>
          </ScrollReveal>
        </div>

        {/* Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceItems.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="bg-slate-900/60 border border-slate-800 hover:border-red-500/50 rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-red-600/5">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase font-extrabold text-red-400 tracking-wider mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>Verified Operational Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* License Highlight Callout */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-red-950/40 via-slate-900/80 to-slate-900/40 border border-red-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Nigeria Security and Civil Defence Corps (NSCDC) Licensed Operator
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Muskmover is legally authorized to provide private security guarding, asset defense, armed security escort coordination, and pipeline right-of-way surveillance throughout Nigeria.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md">
                Official Licensee
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
