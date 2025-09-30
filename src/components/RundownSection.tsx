"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function RundownSection() {
  const items = [
    "Charity Run 2,5K, 5K dan 10K",
    "Booth Komunitas & Sponsor (Green Booth)",
    "Bazaar / Food Court",
    "Live music & penampilan guest star",
    "Charity untuk penanaman mangrove & pohon (simbolis penyerahan bibit tanaman)",
    "Photo booth & spot instagrammable",
    "Aksi Penanaman Mangrove & Pohon bersama peserta & relawan (Pasca Event)",
  ]

  return (
    <section id="rundown" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Bentuk Kegiatan
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Run for Roots 2025 bukan sekadar lari, tapi juga tempat seru-seruan, 
            berbagi, menikmati musik, kuliner, sampai aksi nyata menanam pohon 
            untuk bumi 🌱
          </p>
        </motion.div>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-white border border-green-100 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-base md:text-lg">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
