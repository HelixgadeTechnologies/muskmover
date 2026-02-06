"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactHero() {
    return (
        <section className="relative h-[600px] w-full min-w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Image
                    src="/contact-hero.png"
                    alt="Contact Us Hero"
                    fill
                    className="object-cover object-center w-full h-full"
                    priority
                />
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Contact US
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}
