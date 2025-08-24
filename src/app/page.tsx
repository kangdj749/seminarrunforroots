"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FeatureV2Section from "@/components/FeatureV2Section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CarouselSpacing } from "@/components/Testimonials";
import { VideoCarousel } from "@/components/Videocarousel";
import { CallToAction } from "@/components/CalltoAction";


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
      <Header/>

      <main className="overflow-x-hidden">
        <section id="daftarsekarang" className="py-7 px-6 sm:px-12 md:px-20 bg-white shadow-inner" >
            <Hero/>  
            <FeatureV2Section/>
        </section>

        <section id="layanan" className="py-20 px-6 sm:px-12 md:px-20 bg-white shadow-inner">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <Features />
            </div>
        
          <div id="metoda" className="max-w-6xl mx-auto" data-aos="fade-up">
            <Benefits />
          </div>
        </section>

        <section id="investasi" className="py-20 px-6 sm:px-12 md:px-20 bg-blue-50">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <Pricing />
          </div>
        </section>

        <section id="testimoni" className="py-20 px-6 sm:px-12 md:px-20 bg-blue-50">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <CarouselSpacing />
          </div>
        </section>

        <section className="py-20 px-6 sm:px-12 md:px-20 bg-blue-80">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <VideoCarousel />
          </div>
        </section>

        <section className="py-20 px-6 sm:px-12 md:px-20 bg-blue-50">
          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <CallToAction />
          </div>
        </section>

        
      </main>

      <footer id="kontak" className="bg-blue-900 text-white py-10 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <Footer/>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
