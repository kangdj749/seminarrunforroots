"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Syringe,
  Stethoscope,
  Wind,
  Baby,
  Accessibility,
  Leaf,
  Ambulance
} from "lucide-react"

const services = [
  {
    icon: <Activity className="w-8 h-8 text-green-600" />,
    title: "Perawatan Luka Kompleks",
    desc: "Luka diabetes, kanker, pasca operasi, hingga luka yang sulit sembuh."
  },
  {
    icon: <Syringe className="w-8 h-8 text-green-600" />,
    title: "Infus Booster & Terapi Vitamin",
    desc: "Menjaga stamina & meningkatkan daya tahan tubuh."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-green-600" />,
    title: "Dokter & Perawat ke Rumah",
    desc: "Konsultasi dan tindakan medis tanpa repot."
  },
  {
    icon: <Wind className="w-8 h-8 text-green-600" />,
    title: "Nebulizer / Terapi Uap",
    desc: "Solusi sesak napas dan masalah pernapasan."
  },
  {
    icon: <Baby className="w-8 h-8 text-green-600" />,
    title: "Perawatan Ibu & Bayi",
    desc: "Pijat bayi & perawatan pasca persalinan."
  },
  {
    icon: <Accessibility className="w-8 h-8 text-green-600" />,
    title: "Fisioterapi & Rehabilitasi Medis",
    desc: "Pemulihan pasca stroke atau cedera."
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Akupuntur & Bekam Islami",
    desc: "Terapi tambahan dengan pendekatan holistik."
  },
  {
    icon: <Ambulance className="w-8 h-8 text-green-600" />,
    title: "Ambulans 24 Jam",
    desc: "Siap siaga untuk kondisi darurat."
  }
]

export default function Layanan() {
  return (
    <section
      id="layanan"
      className="py-16 bg-gradient-to-b from-green-50 via-white to-green-50"
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
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami hadir untuk memberikan layanan medis terbaik dengan sentuhan penuh kepedulian.  
            Semua layanan ditangani oleh tenaga medis berizin & berpengalaman.
          </p>
        </motion.div>

        {/* Grid Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-green-100 shadow-sm hover:shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
