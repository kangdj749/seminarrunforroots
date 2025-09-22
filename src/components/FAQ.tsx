"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Apakah bisa pesan layanan mendadak?",
    a: "Bisa. Tim kami siap datang sesuai kebutuhan Anda, bahkan untuk kondisi urgent."
  },
  {
    q: "Apakah alat yang digunakan steril?",
    a: "Ya, semua alat selalu dalam kondisi steril dan sesuai standar medis."
  },
  {
    q: "Apakah melayani di luar Bandung?",
    a: "Fokus utama Bandung & sekitarnya, tapi bisa menjangkau area lain sesuai permintaan."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-16 bg-gradient-to-b from-white via-green-50 to-white"
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
            FAQ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering diajukan seputar layanan Nusa Home Care.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-green-100 rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left px-6 py-4 text-green-700 font-medium focus:outline-none"
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
