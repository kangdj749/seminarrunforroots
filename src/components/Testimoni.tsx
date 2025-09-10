import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const testimonis = [
  {
    teks: "Bolu selembut ini belum pernah saya coba, benar-benar bikin kangen Bandung!",
    nama: "Wiwin, Tangerang",
  },
  {
    teks: "Rindu Bolu Bandung selalu jadi oleh-oleh wajib kalau pulang ke rumah.",
    nama: "Ai, Tasik Malaya",
  },
]

export default function Testimoni() {
  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-bg-accent)] via-[var(--color-bg-main)] to-[var(--color-bg-accent)]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Kata Mereka
          </h2>
          <p className="text-[var(--color-text-main)] text-base md:text-lg">
            Cerita manis dari para pelanggan setia Rindu Bolu Bandung.
          </p>
        </motion.div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonis.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-[var(--color-primary)] mt-1" />
                <p className="text-[var(--color-text-main)] text-base md:text-lg leading-relaxed">
                  “{item.teks}”
                </p>
              </div>
              <span className="text-sm md:text-base font-semibold text-[var(--color-primary)] self-end">
                – {item.nama}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
