"use client"

import { motion } from "framer-motion"
import { ThermometerSun, CloudRain, Building2 } from "lucide-react"

export default function WhySeminarSection() {
  const facts = [
    {
      icon: <ThermometerSun className="w-8 h-8 text-orange-600" />,
      text: "+4 °C kenaikan suhu rata-rata dalam 25 tahun terakhir",
    },
    {
      icon: <CloudRain className="w-8 h-8 text-orange-600" />,
      text: "Curah hujan ekstrem & tak menentu",
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      text: "Urban heat island makin memperparah kondisi kota",
    },
  ]

  return (
    <section id="why-seminar" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-snug">
            <span className="text-orange-600">🔥 Suhu Naik,</span> Hujan Tak Menentu, <br />
            <span className="text-green-700">Masa Depan Kita Taruhannya</span>
          </h2>
        </motion.div>

        {/* Paragraf Edukasi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-10 text-center"
        >
          Bandung yang dulu sejuk kini makin panas. Suhu rata-rata melonjak dari{" "}
          <strong>23,1 °C (tahun 2000)</strong> menjadi sekitar{" "}
          <strong>27,1 °C menjelang 2025</strong>. Hujan datang tak tentu, cuaca ekstrem semakin sering.
          Ini bukan perubahan kecil — ini tanda krisis iklim nyata yang memengaruhi kehidupan kita semua.
        </motion.p>

        {/* Fakta Singkat */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {facts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md hover:-translate-y-1 transition"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="bg-orange-50 rounded-full p-4 mb-3 shadow-inner group-hover:animate-pulse"
              >
                {fact.icon}
              </motion.div>
              <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Penutup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold shadow-md">
            ➡️ Saatnya berhenti jadi penonton, dan mulai jadi bagian dari solusi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
