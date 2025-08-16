// src/components/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Papa from "papaparse";

interface HeroContent {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  image_url?: string;
}

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroContent | null>(null);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/1TIYTzqKjncuSStyJEUIoQztiWaAwKrs7lCJd2fVWqP4/gviz/tq?tqx=out:csv&gid=89330865"
    )
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const firstRow = parsed.data[0] as any;

        setHeroData({
          title: firstRow.title,
          subtitle: firstRow.subtitle,
          cta_text: firstRow.cta_text,
          cta_link: firstRow.cta_link,
          image_url: firstRow.image_url,
        });
      });
  }, []);

  if (!heroData) return null;

  const getCTAUrl = (link: string) => {
    if (!link || link.trim() === "") return "/registrasi?paket=Trial";
    return link.startsWith("http") || link.startsWith("/") ? link : `/registrasi?paket=${link}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 md:py-28">
      {/* Decorative blur orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container relative mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            {heroData.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            {heroData.subtitle}
          </p>
          <div className="flex justify-center md:justify-start">
            <a href={getCTAUrl(heroData.cta_link)}>
              <Button
                size="lg"
                className="px-8 py-6 text-base sm:text-lg rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {heroData.cta_text || "Coba Gratis"}
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        {heroData.image_url && (
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src={heroData.image_url}
                alt="Ilustrasi BelCerdas"
                className="w-full max-w-sm sm:max-w-md rounded-3xl shadow-xl border border-gray-100 object-cover"
              />
              {/* subtle shadow glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/50"></div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
