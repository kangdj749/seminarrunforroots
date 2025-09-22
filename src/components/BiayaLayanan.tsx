"use client"

import { motion } from "framer-motion"
import { Wallet } from "lucide-react"

const prices = [
  { title: "Perawatan Luka", price: "Rp300.000 – Rp500.000" },
  { title: "Dokter ke Rumah", price: "Rp300.000" },
  { title: "Infus & Vitamin", price: "Rp200.000 – Rp250.000" },
  { title: "Nebulizer", price: "Rp200.000 – Rp300.000" },
  { title: "Perawatan Bayi & Pijat Bayi", price: "Rp200.000 – Rp300.000" },
  { title: "Fisioterapi", price: "Rp200.000 – Rp500.000" },
  { title: "Akupuntur & Bekam", price: "Rp500.000 – Rp1.000.000" },
  { title: "Khitan di Rumah", price: "Rp800.000 – Rp2.000.000" },
  { title: "Ambulans 24 Jam", price: "Rp500.000 – Rp2.000.000" },
]

export default function Biaya() {
  return (
    <section
      id="harga"
      className="py-16 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <Wallet className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Biaya Layanan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kesehatan premium kini bisa dinikmati tanpa harus mahal.  
            Tarif layanan transparan, terjangkau, dan sesuai kebutuhan Anda.
          </p>
        </motion.div>

        {/* Grid Harga */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 p-6 flex flex-col text-center"
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Bonus / Promo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-xl font-medium shadow-sm">
            ✨ Bonus: Gratis konsultasi awal + promo paket keluarga hemat
          </div>
        </motion.div>
      </div>
    </section>
  )
}
