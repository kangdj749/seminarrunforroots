import Image from "next/image";
import { motion } from "framer-motion";

export default function FiturBelCerdasV2() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" // penting untuk samain tinggi
        >
          
          {/* Kolom Kiri - Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-full max-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
              <Image
                src="/image/ui-belcerdas.png"
                alt="BelCerdas"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 80vw, 450px"
              />
            </div>
          </motion.div>

          {/* Kolom Kanan - Fitur */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/30 w-full h-full flex flex-col justify-center transition-transform duration-500 hover:shadow-2xl hover:-translate-y-1">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 drop-shadow-sm">
                Fitur Unggulan BelCerdas 🚀
              </h2>
              <ul className="space-y-4 text-gray-800 font-medium">
                {[
                  "Tampilan modern & responsif",
                  "Filter jadwal otomatis (Normal, Ramadhan)",
                  "Jam real-time & pengaturan bel fleksibel",
                  "Copy Jadwal melewati hari libur",
                  "Pengumuman audio custom",
                  "Sistem login & aktivasi aman",
                  "Kompatibel dengan Windows & Raspberry Pi"
                ].map((fitur, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✔</span>
                    <span>{fitur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
