import { motion } from "framer-motion";
import Link from "next/link";
import pricingData from "../data/pricingData.json";

export default function PricingSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Pilih Paket BelCerdas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {pricingData.map((paket, index) => {
            const hargaDiskon = paket.hargaAwal > 0 
              ? Math.round(paket.hargaAwal * 0.7) 
              : 0;
            return (
              <motion.div
                key={paket.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition"
              >
                {/* Badge Diskon */}
                {paket.hargaAwal > 0 && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    -30%
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {paket.nama}
                </h3>

                {/* Harga */}
                <div className="mb-4">
                  {paket.hargaAwal > 0 ? (
                    <>
                      <span className="text-gray-400 line-through text-lg block">
                        Rp {paket.hargaAwal.toLocaleString("id-ID")}
                      </span>
                      <span className="text-3xl font-bold text-blue-600">
                        Rp {hargaDiskon.toLocaleString("id-ID")}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-blue-600">
                      Rp 0
                    </span>
                  )}
                  <span className="text-sm text-gray-500 ml-1">
                    {paket.periode}
                  </span>
                </div>

                {/* Fitur */}
                <ul className="flex-1 mb-6 space-y-2 text-gray-700">
                  {paket.fitur.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tombol */}
                <Link
                  href={`/registrasi?paket=${encodeURIComponent(paket.nama)}`}
                  className="inline-block bg-blue-600 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                >
                  Pilih Paket
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
