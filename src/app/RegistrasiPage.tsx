import React from "react";
import RegistrasiSection from "@/components/RegistrasiSection";

const RegistrasiPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Formulir Pendaftaran</h1>
      <RegistrasiSection />
    </div>
  );
};

export default RegistrasiPage;
