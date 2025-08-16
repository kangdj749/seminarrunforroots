// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// Komponen landing page
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

interface SheetSection {
  elements: any[];
}

interface SheetData {
  [key: string]: SheetSection;
}

export default function Home() {
  const [sheetData, setSheetData] = useState<SheetData>({});
  const router = useRouter();

  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({ duration: 1000, once: true });

    // Ambil data dari Google Sheet
    const sheetId = "YOUR_SPREADSHEET_ID";
    const sections = ["Hero", "Fitur", "Harga", "Kontak", "Testimoni"];

    const fetchSheetData = async () => {
      try {
        const data: SheetData = {};
        await Promise.all(
          sections.map(async (section) => {
            const res = await fetch(`https://opensheet.elk.sh/${sheetId}/${section}`);
            const json = await res.json();
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
    <main className="flex flex-col items-center w-full">
      <section className="w-full" data-aos="fade-up">
        <Hero data={sheetData["Hero"]?.elements} />
      </section>
      <section className="w-full bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
        <Features data={sheetData["Fitur"]?.elements} />
      </section>
      <section className="w-full" data-aos="fade-up">
        <Benefits data={sheetData["Benefit"]?.elements} />
      </section>
      <section className="w-full bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
        <Demo />
      </section>
      <section className="w-full" data-aos="fade-up">
        <Pricing data={sheetData["Harga"]?.elements} />
      </section>
      <section className="w-full bg-primary text-white" data-aos="fade-up">
        <CTA />
      </section>
      <footer className="w-full bg-gray-900 text-white">
        <Footer />
      </footer>
    </main>
  );
}
