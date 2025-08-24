import React from "react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";


const Example = () => {
  return (
    <BackgroundBeamsWithCollision>
  <section className="w-full bg-transparent py-10 md:py-14">
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-8 mx-auto max-w-4xl">
      
      {/* Judul */}
      <h1 className="text-[#1E3A8A] text-3xl md:text-5xl py-5 font-extrabold leading-snug">
        Happy English Course <span className="text-[#FACC15]">– HEC</span>
      </h1>

      {/* Subjudul Quote */}
      <p className="text-slate-500 text-sm md:text-lg mt-3">
        ✨ “Bahasa adalah jembatan menuju dunia. Kami hadir untuk membangun jembatan itu bersama Anda.”
      </p>

      {/* Narasi */}
      <p className="text-slate-500 text-xs md:text-base mt-4 leading-relaxed">
      Lebih dari sekadar kursus, <span className="font-semibold text-[#FACC15]">HEC</span> menghadirkan pengalaman belajar eksklusif  
      yang dirancang untuk keluarga dan profesional berkelas.
       </p>

      {/* CTA */}
      <div className="mt-6 text-white">
        <Link
          href="/registrasi?paket=💼%20Guru%20Lokal"
          className="px-6 py-3 bg-[#1e3a8a] hover:bg-[#22d3ee] transition duration-200 rounded-xl text-white font-semibold shadow-md"
        >
          Mulai Belajar Sekarang
        </Link>
      </div>
    </div>
  </section>
</BackgroundBeamsWithCollision>



  );
};
export default Example;