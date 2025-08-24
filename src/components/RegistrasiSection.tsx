"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

// ====== Sumber data paket ======
const PACKAGES = [
  { name: "Guru Lokal", basePrice: 100000, period: "/sesi (60 Menit)" },
  { name: "Native Speaker (Bule)", basePrice: 150000, period: "/sesi (60 Menit)" },
] as const;

const PROGRAMS = [
  "Private English Lessons (Tatap Muka)",
  "Online Private English Lessons",
  "Online Private English Lessons with a Native Speaker",
  "Indonesian Language Program for Foreigners",
  "Online Daily Conversation Bahasa Indonesia Course for Foreigners",
];

type PackageName = (typeof PACKAGES)[number]["name"];
const paketEnum = z.enum(["Guru Lokal", "Native Speaker (Bule)"]);

// ====== Validasi Zod ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  nowa: z.string().min(8, "Nomor WA terlalu pendek").regex(/^[0-9+]+$/, "Hanya angka atau tanda +"),
  program: z.string().min(2, "Wajib pilih program"),
  paket: paketEnum,
});
type FormValues = z.infer<typeof formSchema>;

// ====== Util ======
const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const getPkg = (name?: string) => PACKAGES.find((p) => p.name === name) ?? PACKAGES[0];

// ====== Ganti URL sesuai WebApp GAS kamu ======
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx12F-aiJNAmea6ijmhFD5DyF-I74oo6fCtSqpWZavE910m9BL5ZfwmbeovLFFqtbc/exec";

export default function RegistrasiSection() {
  const searchParams = useSearchParams();
  const paketQuery = (searchParams.get("paket") as PackageName) || "Guru Lokal";

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
      program: "",
      paket: "Guru Lokal",
    },
    mode: "onBlur",
  });

  // Prefill paket dari URL
  useEffect(() => {
    if (PACKAGES.some((p) => p.name === paketQuery)) {
      setValue("paket", paketQuery, { shouldValidate: true });
    }
  }, [paketQuery, setValue]);

  const selected = (watch("paket") as PackageName | undefined) ?? "Guru Lokal";
  const selectedPkg = useMemo(() => getPkg(selected), [selected]);

  const originalPrice = selectedPkg.basePrice;

  const handleSubmitForm = async (data: FormValues) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      // 1) Kirim ke Google Sheets
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          nama: data.nama,
          email: data.email,
          nowa: data.nowa,
          program: data.program,
          paket: data.paket,
        }),
      });

      if (!res.ok) throw new Error("Gagal simpan ke Google Sheets");

      // 2) Lanjut ke WhatsApp
      const msg = [
        "Halo Admin, saya telah mendaftar.",
        "",
        `Nama: ${data.nama}`,
        `Email: ${data.email}`,
        `No WA: ${data.nowa}`,
        `Pilihan Program: ${data.program}`,
        `Paket: ${data.paket}`,
        `Harga: ${formatIDR(originalPrice)} per sesi`,
        "",
      ].join("\n");

      window.location.href = `https://wa.me/6281290678188?text=${encodeURIComponent(msg)}`;
    } catch (err) {
      alert("Terjadi kesalahan saat mengirim data. Coba lagi ya 🙏");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 py-16 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-blue-700 text-center">Form Registrasi</h2>
          <p className="text-sm text-slate-500 text-center mt-1">
            Lengkapi data berikut untuk melanjutkan.
          </p>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-6 space-y-5">
            <FormInput
              label="Nama Lengkap"
              register={register("nama")}
              error={errors.nama?.message}
              placeholder="cth: Budi Santoso"
            />
            <FormInput
              label="Email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
              placeholder="namamu@email.com"
            />
            <FormInput
              label="No WhatsApp"
              register={register("nowa")}
              error={errors.nowa?.message}
              placeholder="cth: 08123456789"
            />

            {/* Select Program */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pilihan Program</label>
              <select
                {...register("program")}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              >
                <option value="">-- Pilih Program --</option>
                {PROGRAMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.program && (
                <p className="mt-1 text-sm text-red-500">{errors.program.message}</p>
              )}
            </div>

            {/* Select Paket */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Paket</label>
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
              {errors.paket && <p className="mt-1 text-sm text-red-500">{errors.paket.message}</p>}
            </div>

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
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-300"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
