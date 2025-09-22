"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// ====== Layanan Nusa Home Care ======
const SERVICES = [
  "Perawatan Luka Kompleks",
  "Infus Booster & Terapi Vitamin",
  "Dokter & Perawat ke Rumah",
  "Nebulizer / Terapi Uap",
  "Perawatan Ibu & Bayi",
  "Fisioterapi & Rehabilitasi Medis",
  "Akupuntur & Bekam Islami",
  "Ambulans 24 Jam",
] as const;

// ====== Validasi Zod ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  nowa: z
    .string()
    .min(8, "Nomor WA terlalu pendek")
    .regex(/^[0-9+]+$/, "Hanya angka atau tanda +"),
  layanan: z.string().min(2, "Wajib pilih layanan"),
  catatan: z.string().optional(),
});
type FormValues = z.infer<typeof formSchema>;

// ====== Ganti URL sesuai WebApp GAS kamu ======
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyHLtvtwSkt1DfOAcWZTGCpFdIiUNEwvwRlkLhyocXo6lNbMfmF0LcK6N1WWfIzyhz/exec"; // ganti dengan link WebApp GAS
const WHATSAPP_ADMIN = "62882000015029"; // WA admin (tanpa 0)

export default function RegistrasiSection() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      nowa: "",
      layanan: "",
      catatan: "",
    },
    mode: "onBlur",
  });

  const handleSubmitForm = async (data: FormValues) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      // 1) Simpan ke Google Sheets
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          nama: data.nama,
          nowa: data.nowa,
          layanan: data.layanan,
          catatan: data.catatan || "",
        }),
      });

      if (!res.ok) throw new Error("Gagal simpan ke Google Sheets");

      // 2) success toast (sonner)
      toast.success("Registrasi berhasil ✅", {
        description: "Anda akan diarahkan ke WhatsApp...",
      });

      // 3) Redirect ke WhatsApp setelah jeda singkat
      setTimeout(() => {
        const msg = [
          "Halo Admin, saya ingin daftar layanan Nusa Home Care 🌿",
          "",
          `Nama: ${data.nama}`,
          `No WA: ${data.nowa}`,
          `Layanan: ${data.layanan}`,
          data.catatan ? `Catatan: ${data.catatan}` : "",
        ].join("\n");

        window.location.href = `https://wa.me/${WHATSAPP_ADMIN}?text=${encodeURIComponent(
          msg
        )}`;
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Registrasi Gagal ❌", {
        description: "Terjadi kesalahan saat mengirim data. Coba lagi ya 🙏",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="form-registrasi"
      className="py-16 px-4 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center">
            Form Registrasi
          </h2>
          <p className="text-sm text-gray-600 text-center mt-1">
            Lengkapi data berikut untuk konsultasi gratis & pesan layanan.
          </p>

          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="mt-6 space-y-5"
          >
            <FormInput
              label="Nama Lengkap"
              register={register("nama")}
              error={errors.nama?.message}
              placeholder="cth: Budi Santoso"
            />

            <FormInput
              label="No WhatsApp"
              register={register("nowa")}
              error={errors.nowa?.message}
              placeholder="cth: 08123456789"
            />

            {/* Select Layanan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pilih Layanan
              </label>
              <select
                {...register("layanan")}
                className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option value="">-- Pilih Layanan --</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.layanan && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.layanan.message}
                </p>
              )}
            </div>

            {/* Catatan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catatan (opsional)
              </label>
              <textarea
                {...register("catatan")}
                rows={3}
                placeholder="cth: Jadwal kunjungan sore hari"
                className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white font-semibold py-3 hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Mengirim...
                </>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ========= Helper Components =========
function FormInput({
  label,
  register,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
