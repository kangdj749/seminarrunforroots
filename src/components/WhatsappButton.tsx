"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const phoneNumber = "6289677078084" // nomor WA tanpa 0 depan

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Halo Rindu Bolu Bandung 👋, saya mau pesan bolu."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <motion.div
        initial={{ scale: 0, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[var(--color-primary)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.div>
    </a>
  )
}
