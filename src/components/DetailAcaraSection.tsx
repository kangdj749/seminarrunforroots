"use client"

import { motion } from "framer-motion"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DetailAcaraSection() {
  const details = [
    {
      icon: <CalendarDays className="w-6 h-6 text-green-700" />,
      label: "Tanggal",
      value: "Sabtu, 25 Oktober 2025",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-700" />,
      label: "Waktu",
      value: "07.30 – 12.05 WIB",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-700" />,
      label: "Lokasi",
      value: "UIN SGD(Kampus 1) / Aula Auditorium Abdjan Soelaeman",
    },
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      label: "Peserta",
      value: "Mahasiswa, akademisi, komunitas, masyarakat umum (±300 peserta)",
    },
  ]

  return (
    <section id="detail-acara" className="py-20 bg-white">
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
            📅 Catat Tanggalnya & Hadir Bersama Kami
          </h2>
        </motion.div>

        {/* Detail List */}
        <div className="bg-green-50 rounded-3xl shadow-lg border border-green-100 p-6 sm:p-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {details.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0 group-hover:animate-pulse">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-green-700 font-semibold">{item.label}</p>
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full px-8 py-5 hover:scale-105 transition shadow-md"
            >
              ✨ <a href="/registrasi" className="ml-2">Daftar Sekarang — Gratis</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
