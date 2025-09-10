import { Instagram, Phone } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--color-bg-main)] to-[var(--color-bg-accent)] text-[var(--color-text-main)]">
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
              Rindu Bolu Bandung
            </h2>
            <p className="text-sm md:text-base">
              Rindu yang Lembut, Oleh-oleh Asli Bandung.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/rindubolubandung"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition shadow"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@rindubolubandung"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition shadow"
            >
              <SiTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6289677078084"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition shadow"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 mt-8 pt-6 text-center text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Rindu Bolu Bandung. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
