import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function TentangKami() {
  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-bg-main)] via-[var(--color-bg-accent)] to-[var(--color-bg-main)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8 sm:p-12 border border-white/40 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Icon + Heading */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] leading-snug">
                Tentang Kami
              </h3>
            </div>

            {/* Content */}
            <p className="text-base md:text-lg text-[var(--color-text-main)] max-w-2xl mx-auto leading-relaxed space-y-4">
              <span className="block mb-4">
                Rindu Bolu Bandung lahir dari sebuah kerinduan: menghadirkan cita rasa otentik Bandung yang lembut, manis, dan selalu meninggalkan kesan mendalam.
              </span>
              <span className="block mb-4">
                Kami percaya, oleh-oleh bukan sekadar makanan—tapi bahasa cinta untuk keluarga, sahabat, dan kolega.
              </span>
              <span className="block">
                👉 Dengan bahan pilihan & resep turun-temurun, kami menjaga kualitas di setiap potongan bolu.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
