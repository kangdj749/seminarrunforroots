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
  BookOpen,
  Mic,
} from "lucide-react"

export default function TimelineSection() {
  const timeline = [
    {
      time: "07.30 – 08.00",
      icon: <ScrollText className="w-5 h-5 text-green-700" />,
      title: "Registrasi Peserta",
      desc: "Peserta melakukan registrasi dan pengambilan starter pack.",
    },
    {
      time: "08.00 – 08.20",
      icon: <Mic className="w-5 h-5 text-green-700" />,
      title: "Pembukaan & Sambutan",
      desc: "Sambutan dari panitia, perwakilan Dinas Lingkungan Hidup, dan BAZNAS.",
    },
    {
      time: "08.20 – 08.25",
      icon: <BookOpen className="w-5 h-5 text-green-700" />,
      title: "Pembacaan Ayat Suci Al-Qur’an",
      desc: "Mengawali acara dengan lantunan ayat suci dan doa bersama.",
    },
    {
      time: "08.25 – 08.35",
      icon: <Music className="w-5 h-5 text-green-700" />,
      title: "Menyanyikan Lagu Indonesia Raya",
      desc: "Seluruh peserta berdiri menyanyikan lagu kebangsaan Indonesia Raya.",
    },
    {
      time: "08.35 – 08.45",
      icon: <Video className="w-5 h-5 text-green-700" />,
      title: "Video Teaser Krisis Iklim",
      desc: "Pemutaran video singkat tentang kondisi krisis iklim dan lingkungan global.",
    },
    {
      time: "08.45 – 09.15",
      icon: <Users className="w-5 h-5 text-green-700" />,
      title: "Narasumber 1",
      desc: "Pemaparan materi utama dari narasumber pertama.",
    },
    {
      time: "09.15 – 09.45",
      icon: <Users className="w-5 h-5 text-green-700" />,
      title: "Narasumber 2",
      desc: "Sesi lanjutan bersama narasumber kedua.",
    },
    {
      time: "09.45 – 09.50",
      icon: <Video className="w-5 h-5 text-green-700" />,
      title: "Video Aktivis Lingkungan",
      desc: "Menampilkan para aktivis muda yang menyuarakan kampanye krisis iklim.",
    },
    {
      time: "09.50 – 10.50",
      icon: <MessagesSquare className="w-5 h-5 text-green-700" />,
      title: "Diskusi Panel",
      desc: "Diskusi panel dua pakar, mahasiswa aktivis lingkungan, dan moderator.",
    },
    {
      time: "10.50 – 11.00",
      icon: <Mic className="w-5 h-5 text-green-700" />,
      title: "Monolog (Mengenai Krisis Iklim)",
      desc: "Monolog reflektif mengenai dampak dan urgensi aksi nyata terhadap krisis iklim.",
    },
    {
      time: "11.00 – 11.30",
      icon: <Music className="w-5 h-5 text-green-700" />,
      title: "Penampilan Musik",
      desc: "Persembahan musik bertema bumi dan kepedulian lingkungan.",
    },
    {
      time: "11.30 – 11.40",
      icon: <Leaf className="w-5 h-5 text-green-700" />,
      title: "Deklarasi Mahasiswa",
      desc: "Mahasiswa bersama-sama menyatakan komitmen menjaga bumi, dipimpin salah satu ketua BEM.",
    },
    {
      time: "11.40 – 11.50",
      icon: <Megaphone className="w-5 h-5 text-green-700" />,
      title: "Promosi Event Run for Roots",
      desc: "Promosi kegiatan ‘Run for Roots’ disertai pemutaran video singkat.",
    },
    {
      time: "11.50 – 11.55",
      icon: <ScrollText className="w-5 h-5 text-green-700" />,
      title: "Do’a Bersama",
      desc: "Menutup acara dengan doa dan harapan kebaikan untuk bumi.",
    },
    {
      time: "11.55 – 12.00",
      icon: <Camera className="w-5 h-5 text-green-700" />,
      title: "Foto Bersama",
      desc: "Foto bersama seluruh peserta, panitia, dan narasumber.",
    },
    {
      time: "12.00 – 12.05",
      icon: <Leaf className="w-5 h-5 text-green-700" />,
      title: "Penutupan",
      desc: "Ucapan terima kasih dan penutupan resmi acara.",
    },
  ]

  return (
    <section id="susunan-acara" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6 md:px-12">
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

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-200 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center bg-white border-4 border-green-500 rounded-full w-10 h-10 shadow-md hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>

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
