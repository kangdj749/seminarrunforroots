"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HybridWhatsAppCTA() {
  const whatsappNumber = "62882000015029" // nomor WA tanpa 0
  const defaultMessage = encodeURIComponent(
    "Halo, saya ingin konsultasi layanan Nusa Home Care 🏡"
  )

  return (
    <>
      {/* Sticky CTA Bar (mobile only) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-green-600 text-white px-4 py-3 shadow-2xl flex items-center justify-between rounded-t-2xl">
          <span className="font-medium text-sm">
            🌿 Konsultasi Gratis & Pesan Layanan
          </span>
          <Button
            asChild
            className="bg-white text-green-700 font-semibold rounded-xl px-4 py-2 hover:bg-green-100 transition"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Floating Button (desktop only) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all">
          <MessageCircle className="w-7 h-7" />
        </div>
      </motion.a>
    </>
  )
}
