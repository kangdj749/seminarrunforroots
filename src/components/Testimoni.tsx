"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const testimonis = [
  {
    teks: "Alhamdulillah, ibu saya lebih tenang dirawat di rumah. Perawat Nusa Home Care sangat sabar dan ramah.",
    nama: "Ibu Lina, Bandung",
  },
  {
    teks: "Anak saya sering kambuh asmanya, tapi sejak ada layanan nebulizer ke rumah, saya tidak panik lagi.",
    nama: "Pak Yusuf, Cimahi",
  },
]

export default function Testimoni() {
  return (
    <section
      id="testimoni"
      className="py-16 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Testimoni
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Cerita nyata dari keluarga yang sudah merasakan layanan Nusa Home Care.
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
              className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md p-6 md:p-8 flex flex-col space-y-4 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  “{item.teks}”
                </p>
              </div>
              <span className="text-sm md:text-base font-semibold text-green-700 self-end">
                – {item.nama}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
