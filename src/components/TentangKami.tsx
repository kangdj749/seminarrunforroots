import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function TentangKami() {
  return (
    <section
      id="tentang"
      className="py-16 bg-gradient-to-b from-[var(--color-bg-main)] via-[var(--color-bg-accent)] to-[var(--color-bg-main)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8 sm:p-12 border border-white/40 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Icon + Heading */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] leading-snug">
                Tentang Kami
              </h3>
            </div>

            {/* Content */}
            <div className="text-base md:text-lg text-[var(--color-text-main)] max-w-3xl mx-auto leading-relaxed space-y-6">
              <p>
                <strong>Nusa Home Care</strong> adalah layanan kesehatan Islami yang menghadirkan perawatan medis profesional langsung ke rumah Anda. 
                Terinspirasi dari nilai <em>caring</em> dalam Islam, kami percaya bahwa merawat bukan hanya soal fisik, 
                tapi juga menyentuh aspek psikologis dan spiritual.
              </p>

              <p>
                Dengan tenaga medis berizin dan berpengalaman, kami siap memberikan layanan lengkap mulai dari perawatan luka, 
                dokter dan perawat ke rumah, fisioterapi, perawatan ibu & bayi, hingga layanan darurat 24 jam. 
                Semua dengan sentuhan Islami, penuh kepedulian, dan harga transparan.
              </p>

              <p>
                Kami hadir untuk keluarga yang ingin sehat dengan nyaman, tanpa antre panjang di rumah sakit. 
                Bersama Nusa Home Care, Anda akan merasakan aman, higienis, dan hangatnya perawatan di rumah sendiri.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
