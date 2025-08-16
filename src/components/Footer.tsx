"use client";

type FooterSectionProps = {
  brandName?: string;
  tagline?: string;
  links?: { label: string; href: string }[];
};

export default function Footer({
  brandName = "BelCerdas",
  tagline = "Solusi Bel Otomatis & Pembinaan Karakter Sekolah",
  links = [
    { label: "Fitur", href: "#fitur" },
    { label: "Kontak", href: "#kontak" },
    { label: "Ketentuan", href: "#terms" },
  ],
}: FooterSectionProps) {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-10 mt-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h4 className="text-2xl font-bold mb-2 tracking-wide">{brandName}</h4>
        <p className="mb-4 text-sm opacity-80">{tagline}</p>

        <div className="flex justify-center flex-wrap gap-4 text-sm mt-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:underline hover:text-sky-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
