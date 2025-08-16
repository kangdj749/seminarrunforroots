// src/components/FormSection.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nama: string;
  email: string;
  nowa: string;
  instansi: string;
  alamat: string;
}

const FormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    nowa: "",
    instansi: "",
    alamat: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showGift, setShowGift] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setShowGift(false);

    try {
      const response = await fetch("/api/daftar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Pendaftaran berhasil. Terima kasih!");
        setFormData({
          nama: "",
          email: "",
          nowa: "",
          instansi: "",
          alamat: "",
        });
        setShowGift(true);
      } else {
        setMessage("❌ Gagal: " + (result.message || "Terjadi kesalahan."));
      }
    } catch (error) {
      setMessage("❌ Error saat mengirim data. Pastikan backend aktif.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Daftar Sekarang
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "nama", type: "text", placeholder: "Nama Lengkap" },
          { name: "email", type: "email", placeholder: "Email Aktif" },
          { name: "nowa", type: "text", placeholder: "Nomor WhatsApp" },
          { name: "instansi", type: "text", placeholder: "Instansi / Sekolah" },
          { name: "alamat", type: "text", placeholder: "Alamat Asal" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {isLoading ? "Mengirim..." : "Daftar Sekarang"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}

      {showGift && (
        <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl shadow text-center animate-fade-in">
          <h2 className="text-xl font-semibold text-yellow-800">
            🎉 Akses Trial Aktif!
          </h2>
          <p className="mt-2 text-gray-700">
            Terima kasih sudah daftar! Kamu mendapatkan masa trial gratis 💡
          </p>
          <p className="mt-2 text-gray-700">
            Yuk dukung pengembangan BelCerdas dengan traktir kopi ☕
          </p>

          <img
            src="/kopi-virtual.png"
            alt="Traktir Kopi"
            className="mx-auto mt-4 w-24"
          />

          <a
            href="https://saweria.co/namakamu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
          >
            Traktir Kopi Sekarang ☕
          </a>

          <p className="mt-2 text-sm text-gray-500">
            Berapapun dukunganmu sangat berarti 🙏
          </p>
        </div>
      )}
    </div>
  );
};

export default FormSection;
