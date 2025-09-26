"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Event", href: "#tentang" },
  { name: "Timeline", href: "#timeline" },
  { name: "Bentuk Kegiatan", href: "#rundown" },
  { name: "Biaya", href: "#biaya" },
  { name: "Kenapa Harus Ikut", href: "#kenapa" },
  { name: "Realisasi", href: "#realisasi" },
 
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const fundriser = searchParams.get("fundriser")

  // helper buat bikin link selalu include fundriser (kalau ada)
  const getLink = (href: string) => {
    if (fundriser) {
      return `/?fundriser=${fundriser}${href}`
    }
    return href
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Navbar Wrapper */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          
          {/* Logo + Brand */}
          <a href={getLink("#hero")} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <Image
                src="/RUN_FOR_ROOTS_LOGO_GREEN.png"
                alt="Logo Run for Roots 2025"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-green-700">
              Run for Roots 2025
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={getLink(link.href)}
                className="relative text-gray-700 hover:text-green-700 transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-green-100 shadow-lg"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={getLink(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-green-700 transition text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
