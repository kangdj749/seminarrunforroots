"use client"

import { useState, useEffect, Suspense } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

// --- define literal tuples for z.enum (as const) ---
const GENDERS = ["Laki-laki", "Perempuan"] as const
const METHODS = ["Individu", "Delegasi Kampus/Organisasi"] as const

// ====== Schema Zod ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  nohp: z
    .string()
    .min(8, "Nomor HP terlalu pendek")
    .regex(/^[0-9+]+$/, "Hanya angka atau tanda +"),
  institusi: z.string().min(2, "Asal kampus/institusi wajib diisi"),
  prodi: z.string().min(2, "Program studi / jabatan wajib diisi"),
  gender: z.enum(GENDERS, { message: "Wajib pilih jenis kelamin" }),
  metode: z.enum(METHODS, { message: "Wajib pilih metode pendaftaran" }),
  fundriser: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

// ====== Config (ubah sesuai kebutuhan) ======
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpTrtFed2L3_t9nPWpDfX3he4oesTDIgZ-4ZkWDkWp9IsS2f87a1wtRQuWsFhWmuAB/exec"
const WHATSAPP_ADMIN = "6281322817712" // WA panitia

export default function RegistrasiSectionWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading form...</div>}>
      <RegistrasiSection />
    </Suspense>
  )
}

function RegistrasiSection() {
  const [submitting, setSubmitting] = useState(false)
  const [activeFundriser, setActiveFundriser] = useState("Tanpa Fundriser")

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: { fundriser: "Tanpa Fundriser" as string },
  })

  // Ambil fundriser dari query / localStorage (client-only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const fundriserFromLink = urlParams.get("fundriser")
      const stored = localStorage.getItem("fundriser")
      const finalFundriser = fundriserFromLink || stored || "Tanpa Fundriser"

      setActiveFundriser(finalFundriser)
      setValue("fundriser", finalFundriser)

      if (fundriserFromLink) {
        localStorage.setItem("fundriser", fundriserFromLink)
      }
    }
  }, [setValue])

  const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
    if (submitting) return
    setSubmitting(true)

    try {
      // Save to Google Sheets via WebApp
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any),
      })

      if (!res.ok) throw new Error("Gagal simpan ke Google Sheets")

      toast.success("Registrasi berhasil ✅", {
        description: "Anda akan diarahkan ke WhatsApp panitia...",
      })

      // redirect to WA with summary message
      setTimeout(() => {
        const msg = [
          "Halo Panitia Seminar Run for Roots 🌿, saya ingin mendaftar:",
          `Nama: ${data.nama}`,
          `Email: ${data.email}`,
          `No HP: ${data.nohp}`,
          `Asal Kampus/Institusi: ${data.institusi}`,
          `Prodi/Jabatan: ${data.prodi}`,
          `Jenis Kelamin: ${data.gender}`,
          `Metode Pendaftaran: ${data.metode}`,
          data.fundriser ? `Fundriser: ${data.fundriser}` : "",
        ].join("\n")

        window.location.href = `https://wa.me/${WHATSAPP_ADMIN}?text=${encodeURIComponent(
          msg
        )}`
      }, 1200)
    } catch (err) {
      console.error(err)
      toast.error("Registrasi Gagal ❌", {
        description: "Terjadi kesalahan saat mengirim data. Coba lagi ya 🙏",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="registrasi"
      className="py-20 px-4 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            Form Registrasi Seminar
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Lengkapi data di bawah untuk mengikuti seminar pra-event Run for Roots 2025.
          </p>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8 space-y-6">
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
              placeholder="cth: email@gmail.com"
            />

            <FormInput
              label="No HP / WhatsApp"
              register={register("nohp")}
              error={errors.nohp?.message}
              placeholder="cth: 08123456789"
            />

            <FormInput
              label="Asal Kampus / Institusi"
              register={register("institusi")}
              error={errors.institusi?.message}
              placeholder="cth: Universitas Bandung"
            />

            <FormInput
              label="Program Studi / Jabatan"
              register={register("prodi")}
              error={errors.prodi?.message}
              placeholder="cth: Ilmu Komunikasi / Dosen"
            />

            <FormSelect
              label="Jenis Kelamin"
              register={register("gender")}
              error={errors.gender?.message}
              options={Array.from(GENDERS)}
            />

            <FormSelect
              label="Metode Pendaftaran"
              register={register("metode")}
              error={errors.metode?.message}
              options={Array.from(METHODS)}
            />

            <input type="hidden" {...register("fundriser")} />

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white font-semibold py-3 hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Mengirim...
                </>
              ) : (
                "Daftar Sekarang — Gratis"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ========= Helper Components =========
function FormInput({ label, register, error, type = "text", placeholder }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

function FormSelect({ label, register, error, options }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        {...register}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
