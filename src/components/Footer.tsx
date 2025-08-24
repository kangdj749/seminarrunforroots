import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-white to-indigo-50">
      {/* Main Footer */}
      <div className="container px-6 md:px-12 lg:px-20 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand & Tagline */}
        <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
          <Image 
            src="/logo_hec.png" 
            width={56} 
            height={56} 
            alt="HEC" 
            className="mx-auto md:mx-0" 
          />
          <p className="text-sm text-slate-600 max-w-xs text-center md:text-left">
            <strong>Happy English Course</strong> – Bandung & Bali.  
            Belajar bahasa Inggris & Indonesia dengan cara yang menyenangkan, efektif, dan personal.
          </p>
        </div>

        {/* Kontak */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-slate-800">Kontak Kami</h4>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>📍 Bandung & Bali, Indonesia</li>
            <li>
              📱 WhatsApp:{" "}
              <Link
                className="underline text-indigo-600 font-medium"
                href="https://wa.me/6281290678188"
                target="_blank"
              >
                +62 812 9067 8188
              </Link>
            </li>
            <li>📧 Email: hello@happyenglishcourse.id</li>
          </ul>
        </div>

        {/* Navigasi + CTA mini */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-slate-800">Navigasi</h4>
          <ul className="space-y-1 text-sm text-slate-600">
            <li><a href="#layanan" className="hover:text-indigo-600">Layanan</a></li>
            <li><a href="#investasi" className="hover:text-indigo-600">Investasi</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-600">Testimoni</a></li>
            <li><a href="#metoda" className="hover:text-indigo-600">Metoda Belajar</a></li>
          </ul>

          <div className="mt-4">
            <Link
              href="https://wa.me/6281290678188"
              target="_blank"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 container px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Happy English Course. All rights reserved.
        </p>
        <div className="flex gap-4 text-slate-500">
          <Link href="https://www.instagram.com/bandungenglishcourse/" target="_blank">
            <FaInstagram className="w-5 h-5 hover:text-pink-500" />
          </Link>
          <Link href="https://www.youtube.com/@bagjakurniawan6655" target="_blank">
            <FaYoutube className="w-5 h-5 hover:text-red-500" />
          </Link>
          <Link href="https://wa.me/6281290678188" target="_blank">
            <FaWhatsapp className="w-5 h-5 hover:text-green-500" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
