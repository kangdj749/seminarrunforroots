"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

// ====== Sumber data paket ======
const PACKAGES = [
  { name: "Trial", basePrice: 0, period: "/7 hari" },
  { name: "1 Bulan", basePrice: 49000, period: "/bulan" },
  { name: "3 Bulan", basePrice: 135000, period: "/3 bulan" },
  { name: "6 Bulan", basePrice: 249000, period: "/6 bulan" },
  { name: "1 Tahun", basePrice: 449000, period: "/tahun" },
  { name: "Lifetime", basePrice: 749000, period: "sekali bayar" },
] as const;

type PackageName = typeof PACKAGES[number]["name"];

const paketEnum = z.enum([
  "Trial",
  "1 Bulan",
  "3 Bulan",
  "6 Bulan",
  "1 Tahun",
  "Lifetime",
]);

// ====== Validasi Zod ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  nowa: z
    .string()
    .min(8, "Nomor WA terlalu pendek")
    .regex(/^[0-9+]+$/, "Hanya angka atau tanda +"),
  institusi: z.string().min(2, "Nama institusi minimal 2 karakter"),
  paket: paketEnum,
});
type FormValues = z.infer<typeof formSchema>;

// ====== Util ======
const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

const getPkg = (name: PackageName) => PACKAGES.find((p) => p.name === name)!;
const getDiscounted = (base: number) => Math.round(base * 0.7); // diskon 30%

// ====== Ganti URL sesuai WebApp GAS kamu ======
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz2lETyewb67K00gh8j_qTjAEVaWRW38QF_uMI-xc2gXA1kqxpgpfU-Ibyh5JoaYjOT/exec";

export default function RegistrasiSection() {
  const searchParams = useSearchParams();
  const paketQuery = (searchParams.get("paket") as PackageName) || "Trial";

  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      email: "",
      nowa: "",
      institusi: "",
      paket: "Trial",
    },
    mode: "onBlur",
  });

  // Prefill paket dari URL
  useEffect(() => {
    const valid = PACKAGES.map((p) => p.name as string).includes(paketQuery);
    setValue("paket", (valid ? paketQuery : "Trial") as PackageName, {
      shouldValidate: true,
    });
  }, [paketQuery, setValue]);

  const selected = watch("paket");
  const selectedPkg = useMemo(() => getPkg(selected), [selected]);

  const originalPrice = selectedPkg.basePrice;
  const discountedPrice =
    originalPrice > 0 ? getDiscounted(originalPrice) : 0;

  const handleSubmitForm = async (data: FormValues) => {
    setSubmitting(true);

    try {
      // 1. Kirim ke Google Sheets via Apps Script
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams({
          nama: data.nama,
          email: data.email,
          nowa: data.nowa,
          institusi: data.institusi,
          paket: data.paket,
        }),
      });

      if (!res.ok) throw new Error("Gagal simpan ke Google Sheets");

      // 2. Kalau sukses → lanjut WA
      const msg = [
        "Halo Admin, saya telah mendaftar.",
        "",
        `Nama: ${data.nama}`,
        `Email: ${data.email}`,
        `No WA: ${data.nowa}`,
        `Institusi: ${data.institusi}`,
        `Paket: ${data.paket}`,
        originalPrice > 0
          ? `Harga: ${formatIDR(discountedPrice)} (diskon 30% dari ${formatIDR(
              originalPrice
            )})`
          : "Harga: Gratis / Trial",
        "",
        "Mohon info selanjutnya, terima kasih.",
      ].join("\n");

      const wa = `https://wa.me/6281224128899?text=${encodeURIComponent(msg)}`;
      window.location.href = wa;
    } catch (err) {
      alert("Terjadi kesalahan saat mengirim data. Coba lagi ya beb 🙏");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8">
            <h2 className="text-3xl font-bold text-blue-700 text-center">
              Form Registrasi
            </h2>
            <p className="text-sm text-slate-500 text-center mt-1">
              Lengkapi data berikut untuk melanjutkan.
            </p>

            <form
              onSubmit={handleSubmit(handleSubmitForm)}
              className="mt-6 space-y-5"
            >
              {/* Nama */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  {...register("nama")}
                  placeholder="cth: Budi Santoso"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.nama && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nama.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="namamu@email.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* No WA */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  No WhatsApp
                </label>
                <input
                  {...register("nowa")}
                  placeholder="cth: 08123456789"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.nowa && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nowa.message}
                  </p>
                )}
              </div>

              {/* Institusi */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Sekolah / Institusi
                </label>
                <input
                  {...register("institusi")}
                  placeholder="Nama institusi"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.institusi && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.institusi.message}
                  </p>
                )}
              </div>

              {/* Paket */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Paket
                </label>
                <select
                  {...register("paket")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                >
                  {PACKAGES.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                {errors.paket && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.paket.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>
            </form>
          </div>

          {/* Summary Card */}
          <div className="lg:pl-2">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 lg:sticky lg:top-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-blue-700">
                  Ringkasan Paket
                </h3>
                {originalPrice > 0 && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                    Hemat 30%
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-500">Paket dipilih</p>
                <p className="text-2xl font-extrabold text-blue-900 mt-1">
                  {selectedPkg.name}
                </p>
                <p className="text-sm text-slate-500">{selectedPkg.period}</p>
              </div>

              <div className="mt-6">
                {originalPrice === 0 ? (
                  <p className="text-3xl font-extrabold text-emerald-600">
                    GRATIS
                  </p>
                ) : (
                  <>
                    <div className="text-slate-500 line-through">
                      {formatIDR(originalPrice)}
                    </div>
                    <div className="text-3xl font-extrabold text-blue-700">
                      {formatIDR(discountedPrice)}
                      <span className="ml-2 text-sm font-medium text-slate-500">
                        {selectedPkg.period}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• Data akan dikirim ke admin via WhatsApp</li>
                <li>• Dukungan teknis siap membantu</li>
                <li>• Pembayaran aman & transparan</li>
              </ul>

              <div className="mt-6 rounded-xl text-center border border-dashed border-blue-200 p-4 bg-blue-50/50 text-sm text-blue-800">
                Pastikan data sudah benar sebelum melanjutkan ya 🙏
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
