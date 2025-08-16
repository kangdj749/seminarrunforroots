"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Papa from "papaparse";

export type PricingItem = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
};

const PricingSection: React.FC = () => {
  const [pricingData, setPricingData] = useState<PricingItem[]>([]);
  const router = useRouter();

  async function fetchPricingData(): Promise<PricingItem[]> {
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/1TIYTzqKjncuSStyJEUIoQztiWaAwKrs7lCJd2fVWqP4/gviz/tq?tqx=out:csv&gid=0"
    );
    const csvText = await res.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const data = result.data as any[];
          const parsed = data.map((row) => ({
            name: row.name?.trim(),
            price: row.price?.trim(),
            period: row.period?.trim(),
            features: row.features
              ? row.features.split(";").map((f: string) => f.trim())
              : [],
            highlight: row.highlight?.toLowerCase() === "true",
          }));
          resolve(parsed);
        },
      });
    });
  }

  useEffect(() => {
    fetchPricingData().then(setPricingData);
  }, []);

  const handleSelectPackage = (name: string) => {
    router.push(`/registrasi?paket=${encodeURIComponent(name)}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
          Pilih Paket Sesuai Kebutuhan Anda
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((pkg, index) => (
            <motion.div
              key={index}
              className={
                pkg.highlight
                  ? "rounded-2xl border-2 border-primary shadow-xl bg-white/90 backdrop-blur-md"
                  : "rounded-2xl border border-gray-200 shadow-md bg-white"
              }
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-transparent shadow-none border-none">
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 tracking-wide ${
                      pkg.highlight ? "text-primary" : "text-blue-950"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-extrabold mb-4">
                    {pkg.price}
                    <span className="text-sm font-medium text-gray-500">
                      {pkg.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6 text-left">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`w-full py-2 rounded-xl font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-100 hover:bg-gray-200 text-blue-950"
                    }`}
                  >
                    {pkg.name === "Trial" ? "Coba Gratis" : "Pilih Paket"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tips Psikologis & Marketing */}
        <div className="mt-20 bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-200 max-w-4xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            💡 Tips Psikologis untuk Memilih Paket
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Trial:</strong> Coba semua fitur gratis selama 7 hari.
              Tanpa komitmen, tanpa risiko.
            </li>
            <li>
              <strong>Paket Bulanan:</strong> Cocok untuk yang ingin fleksibel &
              ringan di awal.
            </li>
            <li>
              <strong>Paket 3 / 6 Bulan:</strong> Tidak perlu repot perpanjang,
              cukup bayar sekali dan langsung jalan.
            </li>
            <li>
              <strong>1 Tahun:</strong> Hemat hingga 25% dibanding bulanan.
              Pilihan cerdas untuk penggunaan jangka panjang.
            </li>
            <li>
              <strong>Lifetime:</strong> Sekali bayar, pakai selamanya. Tidak
              perlu aktivasi ulang atau perpanjangan lagi.
            </li>
            <li>
              Gunakan tombol seperti <em>"Coba Gratis"</em> atau{" "}
              <em>"Pilih Paket Hemat"</em> untuk membuat keputusan lebih cepat.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
