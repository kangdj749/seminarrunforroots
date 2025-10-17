"use client"

import { motion } from "framer-motion"
import {
  ScrollText,
  Video,
  Users,
  Brain,
  MessagesSquare,
  Music,
  Leaf,
  Megaphone,
  Camera,
} from "lucide-react"

export default function TimelineSection() {
  const timeline = [
    {
      time: "08.00",
      icon: <ScrollText className="w-5 h-5 text-green-700" />,
      title: "Pembukaan & Sambutan",
      desc: "Sambutan dari panitia, Dinas Lingkungan Hidup, dan BAZNAS.",
    },
    {
      time: "08.35",
      icon: <Video className="w-5 h-5 text-green-700" />,
      title: "Video Teaser Krisis Iklim",
      desc: "Pemutaran video singkat tentang kondisi lingkungan & perubahan iklim.",
    },
    {
      time: "08.45",
      icon: <Users className="w-5 h-5 text-green-700" />,
      title: "Seminar Utama",
      desc: "Narasumber dari akademisi, aktivis lingkungan, dan lembaga sosial (DLH & BAZNAS).",
    },
    {
      time: "09.40",
      icon: <MessagesSquare className="w-5 h-5 text-green-700" />,
      title: "Diskusi Panel Interaktif",
      desc: "Dialog inspiratif antara narasumber dan peserta seputar aksi nyata untuk bumi.",
    },
    {
      time: "10.40",
      icon: <Music className="w-5 h-5 text-green-700" />,
      title: "Monolog & Penampilan Musik",
      desc: "Pertunjukan seni bertema bumi dari komunitas muda kreatif.",
    },
    {
      time: "11.00",
      icon: <Leaf className="w-5 h-5 text-green-700" />,
      title: "Deklarasi Komitmen Mahasiswa",
      desc: "Penandatanganan komitmen hijau oleh peserta dan panitia.",
    },
    {
      time: "11.10",
      icon: <Megaphone className="w-5 h-5 text-green-700" />,
      title: "Promo Run for Roots 2025",
      desc: "Pemaparan singkat dan ajakan ikut serta di kegiatan lari & tanam pohon.",
    },
    {
      time: "11.30",
      icon: <Camera className="w-5 h-5 text-green-700" />,
      title: "Foto Bersama & Penutupan",
      desc: "Momen kebersamaan seluruh peserta, panitia, dan narasumber.",
    },
  ]

  return (
    <section id="susunan-acara" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-snug">
            🕒 Susunan Acara Seminar Run for Roots
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Rangkaian kegiatan inspiratif yang memadukan edukasi, aksi hijau, dan kolaborasi sosial.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-200 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Icon + Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center bg-white border-4 border-green-500 rounded-full w-10 h-10 shadow-md hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`ml-14 md:w-5/12 ${
                    idx % 2 === 0 ? "md:ml-0 md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-sm border border-green-100 p-5 hover:shadow-md transition">
                    <p className="text-green-700 font-semibold text-sm mb-1">
                      {item.time}
                    </p>
                    <p className="text-gray-900 text-base md:text-lg font-bold">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Himbauan Ramah Lingkungan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-3"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 border border-green-300 px-6 py-3 rounded-2xl text-green-800 font-medium shadow-sm">
            <span>🌿 Setiap peserta wajib membawa <b>tumbler</b> dan <b>tempat makan sendiri</b></span>
          </div>

          <div className="inline-flex items-center gap-3 bg-yellow-100 border border-yellow-300 px-6 py-3 rounded-2xl text-yellow-800 font-medium shadow-sm">
            <span>🍽️ Jangan lupa <b>sarapan atau makan</b> sebelum datang ya, biar tetap semangat!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
