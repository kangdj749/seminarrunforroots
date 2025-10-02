"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function OrganizerSection() {
  return (
    <section
      id="organizer"
      className="relative w-full py-16 px-6 bg-gradient-to-b from-white to-green-50 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
          🏃 Tentang Run for Roots 2025
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-medium text-green-700">Run for Roots</span> adalah gerakan kolaboratif yang
          menggabungkan olahraga, edukasi, dan aksi nyata penghijauan. Melalui kegiatan lari dan penanaman pohon,
          kami mengajak masyarakat ikut menanam harapan untuk bumi yang lebih hijau.
        </p>

        <motion.a
          href="https://runforroots.grahadhuafa.org" // Ganti dengan URL sebenarnya
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition text-lg"
        >
          🌐 Pelajari Lebih Lanjut tentang Run for Roots
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Dekorasi background lembut */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-0 w-40 h-40 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
