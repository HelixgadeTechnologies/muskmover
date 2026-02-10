"use client"

import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

export default function HomeCTA() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050B20] text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0A1128] p-12 md:p-20 border border-slate-800 relative group">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <ScrollReveal direction="up">
            <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6 leading-tight">
              Ready to scale your offshore operations?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Join dozens of partners who trust Musk Mover for their most critical maritime logistics. Let's build the future together.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white h-14 px-10 text-base font-bold rounded-none">
                Let's Work Together
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
