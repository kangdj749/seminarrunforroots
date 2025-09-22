"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold">Nusa Home Care</h3>
            <p className="text-green-100 text-sm md:text-base italic">
              “Care Islami, Sentuhan Hati”
            </p>
            <p className="text-green-100 text-sm leading-relaxed max-w-xs">
              Layanan kesehatan Islami yang menghadirkan perawatan profesional
              langsung ke rumah Anda dengan penuh kepedulian.
            </p>
          </motion.div>

          {/* Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-2">Kontak Kami</h4>
            <div className="flex items-center gap-3 text-green-100">
              <MapPin className="w-5 h-5" />
              <span>Bandung & Sekitarnya</span>
            </div>
            <div className="flex items-center gap-3 text-green-100">
              <Phone className="w-5 h-5" />
              <span>08 8200 0015 029</span>
            </div>
            <div className="flex items-center gap-3 text-green-100">
              <Mail className="w-5 h-5" />
              <span>fatriyani87@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-green-100">
              <Instagram className="w-5 h-5" />
              <span>@pacissulehah</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-xl font-semibold mb-2">Menu Cepat</h4>
            <ul className="space-y-2 text-green-100 text-sm md:text-base">
              <li><a href="#hero" className="hover:underline">Beranda</a></li>
              <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:underline">Layanan</a></li>
              <li><a href="#harga" className="hover:underline">Biaya Layanan</a></li>
              <li><a href="#testimoni" className="hover:underline">Testimoni</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#cta" className="hover:underline">Hubungi Kami</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} Nusa Home Care. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with 💚 in Bandung
          </p>
        </div>
      </div>
    </footer>
  )
}
