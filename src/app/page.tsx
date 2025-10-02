"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Header"
import Hero from "@/components/Hero"
import TentangKami from "@/components/TentangKami"
import Footer from "@/components/Footer"
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"
import TimelineSection from "@/components/TimelineSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import OrganizerSection from "@/components/OrganizerSection";
import TujuanAcara from "@/components/TujuanAcara";
import DetailAcaraSection from "@/components/DetailAcaraSection";
import EmotionalCTASection from "@/components/CTA";


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

          {/* Kenapa */}
          <section id="kenapa">
            <WhyJoinSection />
          </section>
          
          {/* Tentang Kami */}
          <section id="tentang">
            <TentangKami />
          </section>

          {/* Tujuan Acara */}
          <section id="tujuan">
            <TujuanAcara />
          </section>
    
          {/* Detail Acara */}
          <section id="detail-acara">
            <DetailAcaraSection />
          </section>

          {/* Timeline */}
          <section id="susunan-acara">
            <TimelineSection />
          </section>

          {/* CTA */}
          <section id="cta">
            <EmotionalCTASection />
          </section>

           {/* Organizer */}
          <section id="organizer">
            <OrganizerSection />
          </section>

                 
          {/* Footer */}
          <Footer />
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
