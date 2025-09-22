"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Header"
import Hero from "@/components/Hero"
import TentangKami from "@/components/TentangKami"
import Testimoni from "@/components/Testimoni"
import Footer from "@/components/Footer"
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"
import Layanan from "@/components/Layanan";
import Biaya from "@/components/BiayaLayanan";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";


interface SheetData {
  [key: string]: { elements: any[] };
}

const LandingPage: React.FC = () => {
  const [sheetData, setSheetData] = useState<SheetData>({});
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const sheetId = "YOUR_SPREADSHEET_ID";
    const sections = ["Hero", "Fitur", "Harga", "Kontak", "Testimoni"];

    const fetchSheetData = async () => {
      try {
        const data: SheetData = {};
        await Promise.all(
          sections.map(async (section) => {
            const response = await fetch(`https://opensheet.elk.sh/${sheetId}/${section}`);
            const json = await response.json();
            data[section] = { elements: json };
          })
        );
        setSheetData(data);
      } catch (err) {
        console.error("Error fetching sheet data:", err);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <main className="relative">
          {/* Navbar */}
          <Navbar />
    
          {/* Hero */}
          <section id="hero">
            <Hero />
          </section>
    
          {/* Tentang Kami */}
          <section id="tentang">
            <TentangKami />
          </section>
    
          {/* Layanan */}
          <section id="layanan">
            <Layanan />
          </section>

          {/* Produk Kami */}
          <section id="biaya">
            <Biaya />
          </section>

          {/* Testimoni */}
          <section id="testimoni">
            <Testimoni />
          </section>
    

          {/* FAQ */}
          <section id="faq">
            <FAQ />
          </section>

        {/* CTA */}
          <section>
            <CTA />
          </section>
         
         
          {/* Footer */}
          <Footer />
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
