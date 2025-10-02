"use client"

import { motion } from "framer-motion"
import { ScrollText, Video, Brain, MessagesSquare, Music, Leaf, Megaphone, Camera } from "lucide-react"

export default function TimelineSection() {
  const timeline = [
    {
      time: "08.00",
      icon: <ScrollText className="w-5 h-5 text-green-700" />,
      title: "Pembukaan & Sambutan",
    },
    {
      time: "08.35",
      icon: <Video className="w-5 h-5 text-green-700" />,
      title: "Video Teaser Krisis Iklim",
    },
    {
      time: "08.45",
      icon: <Brain className="w-5 h-5 text-green-700" />,
      title: "Seminar Utama (2 Narasumber)",
    },
    {
      time: "09.40",
      icon: <MessagesSquare className="w-5 h-5 text-green-700" />,
      title: "Diskusi Panel Aktivis & Akademisi",
    },
    {
      time: "10.40",
      icon: <Music className="w-5 h-5 text-green-700" />,
      title: "Monolog & Penampilan Musik",
    },
    {
      time: "11.00",
      icon: <Leaf className="w-5 h-5 text-green-700" />,
      title: "Deklarasi Komitmen Mahasiswa",
    },
    {
      time: "11.10",
      icon: <Megaphone className="w-5 h-5 text-green-700" />,
      title: "Promo Run for Roots 2025",
    },
    {
      time: "11.30",
      icon: <Camera className="w-5 h-5 text-green-700" />,
      title: "Foto Bersama & Penutupan",
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-snug">
            🕒 Susunan Acara (Highlight)
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-200 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8">
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
                {/* Icon + dot */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center bg-white border-4 border-green-500 rounded-full w-10 h-10 shadow-md hover:animate-pulse transition`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`ml-14 md:w-5/12 ${
                    idx % 2 === 0 ? "md:ml-0 md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4 hover:shadow-md transition">
                    <p className="text-green-700 font-semibold text-sm mb-1">{item.time}</p>
                    <p className="text-gray-800 text-base md:text-lg font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
