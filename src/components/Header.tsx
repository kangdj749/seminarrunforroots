"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight">
          BelCerdas
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          <a href="#coba_gratis" className="hover:text-blue-600 transition">Coba Gratis</a>
          <a href="#fitur" className="hover:text-blue-600 transition">Fitur</a>
          <a href="#benefit" className="hover:text-blue-600 transition">Benefit</a>
          <a href="#harga" className="hover:text-blue-600 transition">Harga</a>
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
              <a href="#coba_gratis" className="hover:text-blue-600 transition">Coba Gratis</a>
              <a href="#fitur" className="hover:text-blue-600 transition">Fitur</a>
              <a href="#benefit" className="hover:text-blue-600 transition">Benefit</a>
              <a href="#harga" className="hover:text-blue-600 transition">Harga</a>
              <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
