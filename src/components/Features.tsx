import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


const features = [
  {
    title: "Private English Lessons (Tatap Muka)",
    description: "Atur jadwal bel harian dan spesial seperti Ramadhan secara mudah.",
    icon: "👩‍🏫",
  },
  {
    title: "Online Private English Lessons",
    description: "Sampaikan pengumuman langsung ke speaker sekolah secara fleksibel.",
    icon: "💻",
  },
  {
    title: "Online Private English Lessons with a Native Speaker",
    description: "Putar pesan inspiratif dan pembinaan karakter otomatis setiap hari.",
    icon: "🌍",
  },
  {
    title: "Indonesian Language Program for Foreigners",
    description: "Intensive program designed for foreigners who want to master Indonesian, both for daily life and professional needs.",
    icon: "🇮🇩 ",
  },
  {
    title: "Online Daily Conversation Bahasa Indonesia Course for Foreigners",
    description: "Putar pesan inspiratif dan pembinaan karakter otomatis setiap hari.",
    icon: "🗣️",
  },
  
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        >
          Layanan
        </motion.h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default FeaturesSection;
