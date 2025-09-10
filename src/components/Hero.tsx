"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const whatsappNumber = "6289677078084" // tanpa 0
  const defaultMessage = encodeURIComponent("Halo, saya ingin pesan Bolu Rindu Bandung 🍰")

  return (
    <section className="relative flex items-center justify-center bg-[var(--color-bg-main)] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left space-y-6"
        >
          <span className="text-sm md:text-base tracking-widest uppercase text-[var(--color-primary)] font-semibold">
            Oleh-oleh Khas Bandung
          </span>

          <h1 className="font-bold leading-tight text-[clamp(2rem,6vw,3.5rem)] text-[var(--color-primary)]">
            Rindu yang Lembut,  
            <span className="block text-[var(--color-text-main)]">
              Oleh-oleh Asli Bandung
            </span>
          </h1>

          <p className="text-base md:text-lg text-[var(--color-text-main)] max-w-xl mx-auto lg:mx-0">
            Setiap gigitan bolu kami adalah kerinduan yang terjawab.  
            Tekstur lembut, rasa khas Bandung, dan selalu bikin ingin kembali.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-[var(--color-primary)] text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan Sekarang
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[var(--color-primary)] text-[var(--color-primary)] rounded-2xl px-8 py-4 text-lg font-semibold hover:bg-[var(--color-bg-accent)] transition"
            >
              <a href="#menu">Lihat Menu</a>
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
              src="/bolu.jpeg"
              alt="Rindu Bolu Bandung"
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
