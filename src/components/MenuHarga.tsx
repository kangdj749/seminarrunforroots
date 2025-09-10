import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const menuData = [
  {
    harga: "Rp. 30rb",
    items: ["Bolu ketan item", "Bolu karamel", "Bolu keju"],
  },
  {
    harga: "Rp. 27rb",
    items: [
      "Bolu marmer",
      "Bolu pandan",
      "Bolu peuyeum",
      "Bolu pisang",
      "Bolu kopi",
      "Bolu lemon",
    ],
  },
  {
    harga: "Rp. 40rb",
    items: ["Ketan item lumer", "Ketan item karamel"],
  },
]

const phoneNumber = "6289677078084" // nomor WA tanpa 0 depan

export default function MenuHarga() {
  return (
    <section className="py-16 bg-[var(--color-bg-accent)]" id="menu">
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Menu & Harga
          </h2>
          <p className="text-[var(--color-text-main)] text-base md:text-lg max-w-xl mx-auto">
            Pilih bolu favoritmu dengan harga spesial ✨
          </p>
        </motion.div>

        {/* Daftar Menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuData.map((menu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              {/* Harga */}
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                {menu.harga}
              </div>

              {/* Item list */}
              <ul className="space-y-3 text-[var(--color-text-main)] text-base md:text-lg font-medium text-center mb-6">
                {menu.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Tombol Pesan */}
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `Halo Rindu Bolu Bandung 👋\nSaya ingin pesan menu dengan harga ${menu.harga}:\n${menu.items
                    .map((item) => `- ${item}`)
                    .join("\n")}\n\nTolong dibantu ya.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl shadow hover:opacity-90 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Pesan via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
