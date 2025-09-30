"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const [registrasiLink, setRegistrasiLink] = useState("/registrasi")

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
    <section className="relative h-[90vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg_runforroots2025.jpg"
          alt="Run for Roots 2025 - Fun Run Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-800/40 to-green-900/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-white px-6 space-y-6 max-w-3xl"
      >
        <h1 className="font-extrabold leading-tight text-[clamp(2rem,6vw,3.8rem)] drop-shadow-lg">
          🌱 Run for Roots 2025 <br />
          <span className="text-green-200">Lari Sehat, Tanam Harapan!</span>
        </h1>

        <p className="text-base md:text-lg text-green-100/90 max-w-2xl mx-auto leading-relaxed">
          Ayo ikut charity run yang bukan cuma bikin badan sehat,
          tapi juga bikin bumi kita kembali hijau.
          <span className="block font-semibold text-green-200 mt-2">
            Setiap langkahmu = kontribusi untuk penanaman 5.000 mangrove & pohon di Jawa Barat.
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button
            asChild
            className="bg-green-500 hover:bg-green-400 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            <a href={registrasiLink}>👉 Daftar Sekarang</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
