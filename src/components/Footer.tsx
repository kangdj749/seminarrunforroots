"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-900 text-white pt-16 pb-8 overflow-hidden">
      {/* 🌿 Background Illustration - Leaf & Root Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 600"
        >
          <g stroke="white" strokeWidth="0.5" fill="none" strokeLinecap="round">
            {/* Akar melengkung */}
            <path d="M0 500 C200 450, 600 550, 800 500" />
            <path d="M0 550 C250 500, 550 600, 800 550" />
            {/* Daun melengkung kiri */}
            <path d="M120 480 C130 460, 150 460, 160 480 C150 470, 130 470, 120 480Z" />
            <path d="M620 480 C630 460, 650 460, 660 480 C650 470, 630 470, 620 480Z" />
            {/* Daun kecil bertaburan */}
            <circle cx="100" cy="450" r="3" />
            <circle cx="700" cy="470" r="3" />
            <circle cx="400" cy="530" r="4" />
            <circle cx="250" cy="520" r="2" />
            <circle cx="560" cy="500" r="2" />
          </g>
        </svg>
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              🌱 Run for Roots 2025
            </h3>
            <p className="text-green-100 text-sm md:text-base leading-relaxed max-w-sm">
              <span className="font-semibold text-green-50">Run for Roots</span> adalah gerakan kolaboratif
              yang menggabungkan olahraga, edukasi, dan aksi penghijauan. Bersama, kita berlari dan menanam
              untuk bumi yang lebih lestari 🌍
            </p>
          </motion.div>

          {/* Kontak + Sosmed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-3">Kontak Panitia</h4>

            <div className="flex items-center gap-3 text-green-100">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:gdhuafa@gmail.com"
                className="hover:text-green-300 transition-colors"
              >
                gdhuafa@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-green-100">
              <Phone className="w-5 h-5" />
              <a
                href="https://wa.me/6281322817712"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
                +62 813-2281-7712 (WhatsApp)
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://instagram.com/grahadhuafa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-green-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://facebook.com/gdi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-green-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Hashtags */}
        <div className="text-center mb-8 relative">
          <p className="text-green-200 text-sm mb-1">Hashtag Resmi:</p>
          <p className="font-semibold text-green-50 text-sm md:text-base">
            #RunForRoots2025 &nbsp; #LariUntukBumi &nbsp; #CharityRunBandung
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-200 relative">
          <p>© {new Date().getFullYear()} Run for Roots. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with 💚 in Bandung</p>
        </div>
      </div>
    </footer>
  )
}
