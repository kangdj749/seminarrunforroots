import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 sm:py-16 text-center text-white rounded-2xl shadow-xl mx-4 sm:mx-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Judul */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          🚀 Siap Mulai Belajar Bahasa dengan Cara Menyenangkan?
        </h2>
        
        {/* Paragraf */}
        <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
          Jangan tunggu sampai besok. Mulailah hari ini dan lihat perubahan nyata dalam 1 bulan ke depan.
        </p>
        
        {/* Tombol CTA */}
        
        <Link
          href="/registrasi?paket=💼%20Guru%20Lokal"
          className="px-6 py-3 bg-[#c0cef5] hover:bg-[#22d3ee] transition duration-200 rounded-xl font-semibold shadow-md"
        >
          Daftar Sekarang
        </Link>
        
        
      </div>
    </section>
  )
}
