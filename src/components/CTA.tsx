"use client"

import { motion } from "framer-motion"

export default function EmotionalCTASection() {
  return (
    <section
      id="cta"
      className="relative w-full py-16 px-6 bg-gradient-to-br from-green-700 via-green-800 to-sky-900 text-white text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          💚 Bumi Butuh Kita, Sekarang. Bukan Nanti.
        </h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90">
          Krisis iklim bukan isu jauh di Antartika — ia terjadi di halaman rumah kita sendiri.
          Suara dan langkah kecilmu bisa menjadi bagian dari perubahan besar.
          Mari hadir, dengarkan, bersuara, dan bergerak bersama untuk masa depan yang lestari 🌱
        </p>

        <motion.a
          href="/registrasi"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white-50 text-green-800 font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-green-50 transition text-lg"
        >
          👉 DAFTAR SEKARANG — GRATIS
        </motion.a>
      </motion.div>

      {/* Dekorasi background ringan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
