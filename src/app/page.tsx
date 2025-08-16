"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import FAQSection from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FeatureV2Section from "@/components/FeatureV2Section";
import Footer from "@/components/Footer";
import TrialPromo from "@/components/TrialPromo";
import ContactSection from "@/components/ContactSection";

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
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight">BelCerdas</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#coba_gratis" className="hover:text-blue-600 transition">Coba Gratis</a>
            <a href="#fitur" className="hover:text-blue-600 transition">Fitur</a>
            <a href="#harga" className="hover:text-blue-600 transition">Harga</a>
            <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section id="coba_gratis" >
            <Hero/>  
            <FeatureV2Section/>
        </section>

        <section id="fitur" className="py-20 px-6 sm:px-12 md:px-20 bg-white shadow-inner">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <Features />
            <Benefits />
          </div>
        </section>

        <section id="harga" className="py-20 px-6 sm:px-12 md:px-20 bg-blue-50">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <Pricing />
            <div className="mt-20" data-aos="fade-up" data-aos-delay="300">
              <FAQSection />
            </div>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-12 md:px-20 bg-blue-100">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <TrialPromo />
          </div>
        </section>
      </main>

      <footer id="kontak" className="bg-blue-900 text-white py-10 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <ContactSection />
          <Footer/>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
