"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Muskmover Ltd Logo" width={67} height={56} className="w-[67px] h-14" priority />
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-slate-700 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-8">
          <Link href="/contact">
            <Button
              className="hidden sm:inline-flex bg-[#050B20] text-white px-8 h-11 text-[15px] font-bold rounded-none hover:bg-black transition-all"
            >
              Contact Us
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            {/* Mobile Menu Top Bar */}
            <div className="h-20 px-4 flex items-center justify-between border-b border-gray-100">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image src="/logo.png" alt="Muskmover Ltd Logo" width={48} height={48} className="w-12 h-12" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6 text-slate-900" />
              </Button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 flex items-center justify-between"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-6">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#050B20] text-white h-14 text-lg font-bold rounded-none">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bottom Footer Area (Optional) */}
            <div className="p-8 bg-slate-50 border-t border-gray-100">
              <p className="text-sm text-slate-500 text-center font-medium">
                © 2026 Muskmover Ltd. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
