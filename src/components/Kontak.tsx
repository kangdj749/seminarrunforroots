import { motion } from "framer-motion"
import { MapPin, Phone, Instagram, Clock } from "lucide-react"

const kontak = [
  {
    icon: <MapPin className="w-6 h-6 text-[var(--color-primary)]" />,
    label: "Toko Utama",
    value: "Jl. Sekeloa tengah No. 1A/152C, Kel. Lebak Gede, Kec. Coblong, Kota Bandung",
  },
  {
    icon: <Phone className="w-6 h-6 text-[var(--color-primary)]" />,
    label: "WhatsApp",
    value: "0896-7707-8084",
  },
  {
    icon: <Instagram className="w-6 h-6 text-[var(--color-primary)]" />,
    label: "Instagram",
    value: "@rindubolubandung",
  },
  {
    icon: <Clock className="w-6 h-6 text-[var(--color-primary)]" />,
    label: "Jam Buka",
    value: "08.00 – 21.00 WIB",
  },
]

export default function Kontak() {
  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-bg-accent)] via-[var(--color-bg-main)] to-[var(--color-bg-accent)]">
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
            Lokasi & Kontak
          </h2>
          <p className="text-[var(--color-text-main)] text-base md:text-lg max-w-xl mx-auto">
            Temukan kami di Bandung atau hubungi langsung melalui WhatsApp & Instagram.
          </p>
        </motion.div>

        {/* Grid Kontak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {kontak.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              >
                {item.icon}
                <div>
                  <p className="font-semibold text-[var(--color-primary)] text-base md:text-lg">
                    {item.label}
                  </p>
                  <p className="text-[var(--color-text-main)] text-sm md:text-base">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map / Gambar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9289428756587!2d107.613!3d-6.886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMTAuNiJTIDEwN8KwMzYnNDcuMSJF!5e0!3m2!1sid!2sid!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
