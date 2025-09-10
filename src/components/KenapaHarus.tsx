import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const alasan = [
  "Tekstur super lembut, beda dari yang lain",
  "Resep khas Bandung yang otentik",
  "Cocok untuk semua momen & hampers",
]

export default function KenapaHarus() {
  return (
    <section className="py-16 bg-[var(--color-bg-main)]">
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
            Kenapa Harus Rindu Bolu Bandung?
          </h2>
          <p className="text-[var(--color-text-main)] text-base md:text-lg max-w-xl mx-auto">
            Karena setiap potongannya adalah rasa rindu yang terjawab ✨
          </p>
        </motion.div>

        {/* List Alasan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alasan.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
              <p className="text-[var(--color-text-main)] text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
