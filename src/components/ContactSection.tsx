"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const waMessage = encodeURIComponent(
    "Halo admin BelCerdas, saya ingin tanya-tanya lebih lanjut."
  );
  const waLink = `https://wa.me/6281224128899?text=${waMessage}`; // Ganti nomor sesuai kebutuhan

  return (
    <section
      id="kontak"
      className="bg-gradient-to-br from-white to-blue-50 py-20 px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Masih Bingung? Konsultasi Sekarang
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kami siap bantu kebutuhan sekolah, kantor, atau rumah Anda. Klik tombol
          di bawah untuk langsung terhubung via WhatsApp.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white"
            asChild
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
