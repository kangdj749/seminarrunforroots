"use client"

import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export default function TentangEvent() {
  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 border border-green-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Icon + Heading */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-700 leading-snug">
                Tentang Event
              </h3>
            </div>

            {/* Content */}
            <div className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-6">
              <p>
                <span className="font-semibold text-green-700">Run for Roots 2025</span> bukan sekadar charity run biasa. 
                Ini adalah gerakan kolaborasi anak muda, keluarga, komunitas, dan pecinta alam 
                yang peduli pada kesehatan sekaligus kelestarian lingkungan.
              </p>

              <ul className="text-left md:text-center space-y-3">
                <li>✨ Setiap tiketmu = donasi untuk penghijauan di pesisir Subang & lahan kritis Bandung.</li>
                <li>✨ Lari bareng, seru-seruan, musik asik, sampai aksi nyata buat bumi.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
