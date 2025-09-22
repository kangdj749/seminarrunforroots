"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left space-y-6"
        >
          <span className="text-sm md:text-base tracking-widest uppercase text-green-600 font-semibold">
            Home Care Islami & Profesional
          </span>

          <h1 className="font-bold leading-tight text-[clamp(2rem,6vw,3.5rem)] text-green-700">
            Saatnya Sehat dengan Nyaman,  
            <span className="block text-gray-800">
              Tanpa Perlu ke Rumah Sakit!
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Kesehatan keluarga adalah segalanya. Tapi antre panjang di rumah sakit sering bikin lelah, 
            rawan infeksi, dan boros waktu.  
            Dengan <span className="font-semibold text-green-700">Nusa Home Care</span>, 
            Anda bisa mendapatkan perawatan kesehatan profesional langsung di rumah.  
            👉 Aman, higienis, personal, dan tetap hangat bersama keluarga.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-green-600 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              <a href="/registrasi">
                Konsultasi Gratis
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-green-600 text-green-600 rounded-2xl px-8 py-4 text-lg font-semibold hover:bg-green-100 transition"
            >
              <a href="#layanan">Lihat Layanan</a>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center"
        >
          <div className="relative w-full max-w-md h-full">
            <Image
              src="/nusa-home-care.png"
              alt="Nusa Home Care - Perawatan di Rumah"
              fill
              className="object-cover drop-shadow-2xl rounded-[2rem]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
