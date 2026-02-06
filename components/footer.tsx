"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-white pt-24 pb-12 px-4 md:px-8 border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Branding */}
          <div>
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Musk Mover</h4>
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Musk Mover Logo"
                width={120}
                height={120}
                className="w-24 h-24"
              />
            </div>
            <h5 className="text-[17px] font-bold text-slate-900 mb-6">Connect With Us</h5>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-900 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5 fill-current" />
              </Link>
              <Link href="#" className="text-slate-900 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5 fill-current" />
              </Link>
              <Link href="#" className="text-slate-900 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-900 hover:text-red-600 transition-colors">
                <Linkedin className="w-5 h-5 fill-current" />
              </Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[15px] text-slate-600 hover:text-slate-900">About Us</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Services</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">FAQs</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Terms</Link></li>
              <li><Link href="/contact" className="text-[15px] text-slate-600 hover:text-slate-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Get in Touch</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Help center</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Live chat</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">How it works</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Brands */}
          <div>
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Our Brands</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Gulf Craft</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Damen</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Ice Floe</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Bristol Bay</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Nichols Brothers</Link></li>
              <li><Link href="#" className="text-[15px] text-slate-600 hover:text-slate-900">Gladding-Hearn</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <p className="text-[14px] text-slate-500 font-medium">
            © 2026 muskmover.ng. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[14px] text-slate-500 font-medium">
            <Link href="/terms" className="hover:text-slate-900">Terms & Conditions</Link>
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <Link href="/privacy" className="hover:text-slate-900">Privacy Notice</Link>
          </div>

          {/* Back to Top Button */}
          <AnimatePresence>
            {isVisible && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-14 h-14 bg-[#EF4444] rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-500/30 hover:bg-red-600 hover:scale-110 active:scale-95 transition-all z-[100]"
                title="Back to Top"
              >
                <ArrowUp className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  )
}
