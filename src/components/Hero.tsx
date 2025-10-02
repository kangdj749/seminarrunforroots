"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const [registrasiLink, setRegistrasiLink] = useState("/registrasi")
  const { scrollY } = useScroll()

  // Parallax transformations — lebih besar biar kelihatan jelas
  const bgY = useTransform(scrollY, [0, 600], ["0%", "50%"])
  const treeY = useTransform(scrollY, [0, 600], ["0%", "20%"])
  const contentY = useTransform(scrollY, [0, 500], ["0%", "-20%"])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const fundriserFromLink = urlParams.get("fundriser")

      if (fundriserFromLink) {
        localStorage.setItem("fundriser", fundriserFromLink)
        setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(fundriserFromLink)}`)
      } else {
        const stored = localStorage.getItem("fundriser")
        if (stored) {
          setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(stored)}`)
        }
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <motion.div
          style={{ y: bgY, willChange: "transform" }}
          className="absolute inset-0 -z-20 bg-gradient-to-b from-green-600 via-orange-400/60 to-green-900/80"
        />

        {/* Animated Earth Illustration */}
        <motion.img
          src="/earth_heat_trees_illustration.svg"
          alt="Bumi memanas dan pohon bertumbuh"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          style={{ y: bgY, willChange: "transform" }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.25, 0.18] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Growing Tree Animation */}
        <motion.div
          style={{ y: treeY, willChange: "transform" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-[url('/tree_growth.svg')] bg-contain bg-no-repeat"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.05, 1], opacity: [0.2, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          style={{ y: contentY, willChange: "transform" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6 space-y-6 max-w-3xl"
        >
          <h1 className="font-extrabold leading-tight text-[clamp(1.8rem,6vw,3.5rem)] drop-shadow-xl">
            🌍 Bumi Panas, Masa Depan Kita Cemas
            <br />
            <span className="text-green-200 text-[clamp(1.4rem,4vw,2rem)]">
              Seminar Pra-Event Run for Roots 2025
            </span>
          </h1>

          <p className="text-base md:text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
            Krisis iklim bukan cerita masa depan — <span className="font-semibold text-orange-100">itu sedang terjadi sekarang</span>.
            Mari bersama akademisi, mahasiswa, dan masyarakat bergerak untuk bumi yang lestari 🌿
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-400 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              <a href={registrasiLink}>🎟️ Daftar Sekarang</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-2xl px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              <a href="#detail-acara">📅 Simpan Tanggal</a>
            </Button>
          </div>

          {/* Event Info */}
          <div className="mt-6 text-green-100 text-sm md:text-base space-y-1">
            <div>🗓️ 25 Oktober 2025</div>
            <div>📍 Bandung — Aula Kampus (TBA)</div>
          </div>
        </motion.div>
      </section>

    </>
  )
}
