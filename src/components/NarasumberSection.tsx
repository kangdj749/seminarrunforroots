"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const speakers = [
  {
    name: "Pepep DW",
    role: "Dosen, Penulis Buku dan Aktivis Lingkungan",
    img: "/pepep.jpg",
  },
  {
    name: "Nunuh Sutisna",
    role: "Manusia Pohon, Aktivis Lingkungan",
    img: "/nunuh.jpg",
  },
  {
    name: "Siti Hannah",
    role: "Tim Advokasi WALHI Jawa Barat",
    img: "/siti.jpg",
  },
  {
    name: "Fuad “Iekor” Jamaluddin Rahmat",
    role: "Moderator — MAHAPEKA",
    img: "/fuad.jpg",
  },
  {
    name: "Perwakilan Dinas Lingkungan Hidup (DLH)",
    role: "Dinas Lingkungan Hidup Kota Bandung",
    img: "/dlh-logo.png",
    isLogo: true,
  },
  {
    name: "Perwakilan BAZNAS",
    role: "Badan Amil Zakat Nasional",
    img: "/baznas-logo.jpg",
    isLogo: true,
  },
]

export default function NarasumberSection() {
  return (
    <section
      id="narasumber"
      className="py-20 px-4 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Narasumber Seminar
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Yuk kenalan dengan para pembicara inspiratif di <b>Seminar Krisis Iklim</b> — 
          mereka hadir membawa pengalaman dan solusi nyata untuk masa depan bumi 🌍.
        </p>

        {/* Grid Card Narasumber */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {speakers.map((spk, i) => (
            <motion.div
              key={spk.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="aspect-square relative bg-green-50">
                <Image
                  src={spk.img}
                  alt={spk.name}
                  fill
                  className={`object-${spk.isLogo ? "contain p-6" : "cover"}`}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-green-700">{spk.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{spk.role}</p>
              </div>

              {spk.isLogo && (
                <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Instansi
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Himbauan Eco Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto max-w-2xl bg-green-50 border border-green-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-green-800"
        >
          <span className="text-3xl">♻️</span>
          <p className="text-sm sm:text-base font-medium">
            <b>Seminar minim sampah!</b> Setiap peserta wajib membawa{" "}
            <b>tumblr dan tempat makan pribadi.</b>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
