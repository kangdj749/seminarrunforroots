"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm py-1 border-b border-gray-200">
  <div className="container mx-auto px-3 flex items-center justify-between h-14">
    
    {/* Logo di kiri */}
    <div className="flex items-center">
      <Image
        src="/logo_hec.png"
        alt="Happy English Course"
        width={40} height={40}
        className="h-8 w-auto"
      />
    </div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-5 text-sm md:text-base">
      <a href="#daftarsekarang" className="hover:text-blue-600 transition">Daftar Sekarang</a>
      <a href="#layanan" className="hover:text-blue-600 transition">Layanan</a>
      <a href="#metoda" className="hover:text-blue-600 transition">Metoda Belajar</a>
      <a href="#investasi" className="hover:text-blue-600 transition">Investasi</a>
      <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
    </nav>

    {/* Mobile Button */}
    <button
      className="md:hidden p-2 text-blue-700"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu with Animation */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white/95 backdrop-blur-sm shadow-md border-t border-gray-200 overflow-hidden"
      >
        <nav className="flex flex-col space-y-3 px-6 py-4 text-sm">
          <a href="#daftarsekarang" className="hover:text-blue-600 transition">Daftar Sekarang</a>
          <a href="#layanan" className="hover:text-blue-600 transition">Layanan</a>
          <a href="#metoda" className="hover:text-blue-600 transition">Metoda</a>
          <a href="#investasi" className="hover:text-blue-600 transition">Investasi</a>
          <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
</header>



  );
}
