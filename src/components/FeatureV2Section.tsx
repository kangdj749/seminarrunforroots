import Image from "next/image";
import { motion } from "framer-motion";

export default function FiturBelCerdasV2() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100">
  <div className="container mx-auto px-6 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl text-center shadow-lg p-8 border border-white/30 w-full h-full flex flex-col justify-center transition-transform duration-500 hover:shadow-2xl hover:-translate-y-1">
        
        {/* Judul Atas */}
        <h3 className="text-2xl font-bold mb-6 text-gray-900 drop-shadow-sm">
          Banyak siswa dan orang tua menghadapi tantangan seperti:
        </h3>

        {/* List Fitur */} 
        <ul className="text-slate-500 text-xs md:text-base mt-4 leading-relaxed text-center">
          {[
            "Anak pintar grammar, tapi takut berbicara bahasa Inggris",
            "Orang dewasa ingin mahir bahasa Inggris, tapi kesibukan membuat belajar jadi sulit",
            "Ekspatriat di Bandung & Bali ingin memahami Bahasa Indonesia, tapi kesulitan menemukan kursus yang fleksibel",
            "Kursus massal terasa membosankan, kurang personal, dan hasilnya tidak maksimal",
          ].map((fitur, i) => (
            <li 
              key={i} 
              className="flex justify-center items-center space-x-2"
            >
              <span className="text-green-500">✔</span>
              <span className="text-center">{fitur}</span>
            </li>
          ))}
        </ul>

        {/* Judul Bawah */}
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 drop-shadow-sm">
          Apakah Anda pernah mengalami hal yang sama?
        </h3>
        <h3 className="text-2xl font-bold text-gray-900 drop-shadow-sm">
          Jika iya, <span className="text-[#1E3A8A]">Happy English Course</span> adalah jawabannya.
        </h3>
      </div>
    </motion.div>
  </div>
</section>

  );
}
