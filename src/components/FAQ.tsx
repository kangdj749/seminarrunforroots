"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Apa itu BelCerdas?",
    answer:
      "BelCerdas adalah sistem bel otomatis cerdas yang terintegrasi dengan fitur public address dan pembinaan karakter, cocok untuk sekolah, instansi pemerintahan, perusahaan bahkan untuk pembinaan di keluarga."
  },
  {
    question: "Apakah BelCerdas bisa digunakan di semua sekolah?",
    answer:
      "Ya, BelCerdas dirancang fleksibel untuk berbagai tipe sekolah, mulai dari TK, SD, SMP, hingga SMA, termasuk madrasah dan pesantren, bahkan menunjang pendidikan di level keluarga."
  },
  {
    question: "Apakah bisa diakses dari HP atau browser?",
    answer:
      "Tidak bisa. BelCerdas belum berbasis web, akses dari luar bisa dilakukan melalui remote PC saja oleh user yang sudah terdaftar."
  },
  {
    question: "Bagaimana dengan update fitur dan dukungan teknis?",
    answer:
      "Kami menyediakan update berkala dan dukungan teknis untuk semua pelanggan aktif melalui WhatsApp dan email bahkan kunjungan on site."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Pertanyaan yang Sering Diajukan
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-purple-50 transition-colors duration-200"
              >
                <span className="text-base font-medium text-gray-800">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
