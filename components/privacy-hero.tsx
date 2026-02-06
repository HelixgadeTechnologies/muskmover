"use client"

import { motion } from "framer-motion"

export default function PrivacyHero() {
    return (
        <section className="bg-[#020817] py-24 md:py-32 flex items-center justify-center text-center">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base">
                        Musk Mover Ltd
                    </p>
                    <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">
                        Effective Date: February 14th, 2024
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
