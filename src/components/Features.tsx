import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Bel Otomatis",
    description: "Atur jadwal bel harian dan spesial seperti Ramadhan secara mudah.",
    icon: "🔔",
  },
  {
    title: "Public Address",
    description: "Sampaikan pengumuman langsung ke speaker sekolah secara fleksibel.",
    icon: "📢",
  },
  {
    title: "Pembinaan Karakter",
    description: "Putar pesan inspiratif dan pembinaan karakter otomatis setiap hari.",
    icon: "🌟",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
