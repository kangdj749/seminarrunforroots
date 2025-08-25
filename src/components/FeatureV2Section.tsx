import { motion } from "framer-motion";

export default function FiturBelCerdasV2() {
  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-lg p-8 sm:p-10 md:p-12 border border-white/40 w-full flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Judul Atas */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-gray-900 leading-snug">
              Banyak siswa dan orang tua menghadapi tantangan seperti:
            </h3>

            {/* List Fitur */}
            <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-slate-600 font-medium">
              {[
                "Anak pintar grammar, tapi takut berbicara bahasa Inggris",
                "Orang dewasa ingin mahir bahasa Inggris, tapi kesibukan membuat belajar jadi sulit",
                "Ekspatriat di Bandung & Bali ingin memahami Bahasa Indonesia, tapi kesulitan menemukan kursus yang fleksibel",
                "Kursus massal terasa membosankan, kurang personal, dan hasilnya tidak maksimal",
              ].map((fitur, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center space-x-3"
                >
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-left max-w-2xl">{fitur}</span>
                </li>
              ))}
            </ul>

            {/* Judul Bawah */}
            <div className="mt-12 space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Apakah Anda pernah mengalami hal yang sama?
              </h3>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Jika iya,{" "}
                <span className="text-[#1E3A8A]">
                  Happy English Course
                </span>{" "}
                adalah jawabannya.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
