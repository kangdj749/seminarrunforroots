"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// === Validasi form ===
const formSchema = z.object({
  nama: z.string().min(2, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  nowa: z.string().min(2, "No Whatsapp belum diisi"),
  institusi: z.string().min(2, "Nama institusi wajib diisi"),
  paket: z.string().min(1, "Paket belum dipilih"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrasiSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [paketDariUrl, setPaketDariUrl] = useState("Basic");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      email: "",
      nowa: "",
      institusi: "",
      paket: "",
    },
  });

  // Ambil nilai paket dari URL saat pertama kali render
  useEffect(() => {
    const paket = searchParams.get("paket") || "Basic";
    setPaketDariUrl(paket);
    setValue("paket", paket);
  }, [searchParams, setValue]);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    router.push("/welcome");
  };

  const generateWhatsAppLink = (data: FormData) => {
    const pesan = `Halo Admin, saya telah mendaftar.

Nama: ${data.nama}
Email: ${data.email}
No Wa: ${data.nowa}
Institusi: ${data.institusi}
Paket: ${data.paket}

Mohon info selanjutnya, terima kasih.`;
    return `https://wa.me/6281224128899?text=${encodeURIComponent(pesan)}`;
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const endpoint =
        "https://script.google.com/macros/s/AKfycbxdUuznagS6MZHKJspiBRLVFv74hSz2CA_ofiZeNNaPk1uQ_SwrGH4xmW7ozdS58MrzlQ/exec";

      const formData = new URLSearchParams();
      formData.append("nama", data.nama);
      formData.append("email", data.email);
      formData.append("nowa", data.nowa);
      formData.append("institusi", data.institusi);
      formData.append("paket", data.paket);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormData(data);

        if (data.paket.toLowerCase() === "trial") {
          setIsDialogOpen(true);
        } else {
          const waLink = generateWhatsAppLink(data);
          window.location.href = waLink;
        }
      } else {
        alert("Gagal mengirim data. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Gagal koneksi:", error);
      alert("Terjadi kesalahan, periksa koneksi internet Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <Card className="rounded-2xl shadow-lg border border-gray-200">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Formulir Registrasi
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Daftarkan sekolah Anda dan pilih paket yang sesuai.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input id="nama" {...register("nama")} />
              {errors.nama && (
                <p className="text-sm text-red-500">{errors.nama.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="nowa">No Whatsapp</Label>
              <Input id="nowa" {...register("nowa")} />
              {errors.nowa && (
                <p className="text-sm text-red-500">{errors.nowa.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="institusi">Sekolah / Institusi</Label>
              <Input id="institusi" {...register("institusi")} />
              {errors.institusi && (
                <p className="text-sm text-red-500">
                  {errors.institusi.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="paket">Paket yang Dipilih</Label>
              <Input
                id="paket"
                disabled
                value={paketDariUrl}
                className="bg-gray-100 cursor-not-allowed"
                {...register("paket")}
              />
              {errors.paket && (
                <p className="text-sm text-red-500">{errors.paket.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Mengirim...
                </>
              ) : (
                "🚀 Kirim Registrasi"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terima Kasih Telah Mendaftar 🎉</DialogTitle>
            <DialogDescription>
              Dukung produk lokal seperti kami agar terus berkembang. Mau
              traktir kopi kami?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseDialog}>
              Nanti saja
            </Button>
            <a
              href="https://lynk.id/kangdj/6wlywy073j90/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Yuk, Traktir Kopi ☕</Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrasiSection;
