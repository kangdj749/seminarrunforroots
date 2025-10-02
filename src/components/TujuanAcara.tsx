"use client"

import { motion } from "framer-motion"
import { TrendingUp, Handshake, Sprout, Trees } from "lucide-react"

export default function TujuanAcara() {
  const tujuan = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-700" />,
      text: "Meningkatkan kesadaran tentang krisis iklim di Indonesia, khususnya Jawa Barat",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-700" />,
      text: "Mengajak kolaborasi mahasiswa, akademisi, komunitas, dan masyarakat",
    },
    {
      icon: <Sprout className="w-8 h-8 text-green-700" />,
      text: "Mengenalkan gerakan Run for Roots sebagai wadah aksi penghijauan",
    },
    {
      icon: <Trees className="w-8 h-8 text-green-700" />,
      text: "Meluaskan gerakan “1 Orang 1 Pohon” untuk pemulihan lingkungan",
    },
  ]

  return (
    <section id="tujuan" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-snug">
            ✨ Bersama, Kita Bisa Jadi Titik Balik
          </h2>
        </motion.div>

        {/* Grid Tujuan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {tujuan.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-md hover:-translate-y-1 transition"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="bg-green-100 rounded-full p-4 mb-4 shadow-inner flex items-center justify-center group-hover:animate-pulse"
              >
                {item.icon}
              </motion.div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
