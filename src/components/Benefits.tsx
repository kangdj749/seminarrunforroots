import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Personalized Lessons",
    description: "Materi menyesuaikan kebutuhan Anda."
  },
  {
    icon: "📅",
    title: "Flexible Schedule",
    description: "Pilih waktu yang sesuai dengan aktivitas Anda."
  },
  {
    icon: "💬",
    title: "Interactive & Real Conversations",
    description: "Fokus pada percakapan nyata, bukan hanya teori."
  },
  {
    icon: "📊",
    title: "Progress Monitoring",
    description: "Pantau perkembangan Anda atau anak Anda setiap sesi."
  },
  {
    icon: "👩‍🏫",
    title: "Professional & Friendly Tutors",
    description: "Guru berpengalaman yang peduli dengan hasil."
  },
  
];

const WhyBelCerdasSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        >
          Metode Belajar – The Happy Way
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-lg mb-12"
        >
          Kami percaya, belajar bahasa tidak harus kaku. Metode kami adalah kombinasi antara fun & effective.
        </motion.p>

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

export default WhyBelCerdasSection;
