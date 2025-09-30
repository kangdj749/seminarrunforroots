"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">🌱 Run for Roots 2025</h3>
            <p className="text-green-100 text-sm md:text-base leading-relaxed max-w-sm">
              Charity Run sehat & seru, sekaligus aksi nyata menanam pohon dan
              mangrove untuk bumi lebih hijau.
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
              <a href="mailto:gdhuafa@gmail.com" className="hover:underline">
                gdhuafa@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-green-100">
              <Phone className="w-5 h-5" />
              <a
                href="https://wa.me/6281322817712"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +62 813-2281-7712 (WhatsApp)
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/grahadhuafa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/gdi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hashtags */}
        <div className="text-center mb-8">
          <p className="text-green-100 text-sm">Hashtag Resmi:</p>
          <p className="font-semibold text-green-50">
            #RunForRoots2025 &nbsp; #LariUntukBumi &nbsp; #CharityRunBandung
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} Run for Roots. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with 💚 in Bandung</p>
        </div>
      </div>
    </footer>
  )
}
