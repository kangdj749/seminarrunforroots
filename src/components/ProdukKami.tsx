import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const produk = [
  {
    nama: "Bolu Oval Premium",
    deskripsi: "Bolu lembut dengan tekstur istimewa, jadi favorit siapa pun.",
    gambar: "/bolulemon.jpeg",
  },
  {
    nama: "Bolu Jadul Big Circle",
    deskripsi:
      "Rasa manis legit, ukuran besar, sempurna menemani momen bersama keluarga besar.",
    gambar: "/bolulemon.jpeg",
  },
  {
    nama: "Bolu Ketan Item Lumer (New)",
    deskripsi: "Kekinian dan Kedisinian.",
    gambar: "/bolulemon.jpeg",
  },
]

export default function ProdukKami() {
  const whatsappNumber = "6289677078084" // tanpa 0
  const defaultMessage = encodeURIComponent("Halo, saya ingin pesan Bolu Rindu Bandung 🍰")

  return (
    <section className="py-16 bg-[var(--color-bg-main)]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Produk Kami
          </h2>
          <p className="text-[var(--color-text-main)] max-w-xl mx-auto text-base md:text-lg">
            Setiap bolu dibuat dengan penuh cinta & resep turun-temurun untuk
            menghadirkan rasa yang tak terlupakan.
          </p>
        </motion.div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produk.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              {/* Gambar */}
              <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Isi Card */}
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {item.nama}
                </h3>
                <p className="text-[var(--color-text-main)] text-base md:text-lg leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button className="bg-[var(--color-primary)] text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
            🔘 Pesan Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
