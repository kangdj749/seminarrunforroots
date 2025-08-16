"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface TrialPromoSectionProps {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  footerNote?: string;
}

const TrialPromoSection: React.FC<TrialPromoSectionProps> = ({
  headline = "🎁 Promo Trial Terbatas!",
  description =
    "Nikmati versi trial BelCerdas secara gratis selama 7 hari. Rasakan kemudahan sistem bel otomatis, public address, dan fitur karakter!",
  ctaLabel = "Coba Gratis Sekarang",
  footerNote = "Dukung produk lokal, bantu kami berkembang lebih baik! ☕",
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  const handleLanjutkan = () => {
    setOpen(false);
    router.push("/registrasi?paket=Trial");
  };

  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
          {headline}
        </h2>
        <p className="text-lg mb-6 text-blue-900">{description}</p>

        {/* Tombol CTA */}
        <button
          onClick={handleOpenDialog}
          className="text-lg px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white shadow-lg hover:scale-105 transition-transform"
        >
          {ctaLabel}
        </button>

        <p className="mt-4 text-sm text-blue-800">{footerNote}</p>
      </div>

      {/* Dialog sederhana */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Terima Kasih atas Dukungan Anda! 🙌
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Anda akan diarahkan ke formulir registrasi paket Trial.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleLanjutkan}
                className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrialPromoSection;
