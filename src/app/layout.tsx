import "./globals.css";
import type { Metadata } from "next";
import { GlobalToaster } from "@/components/GlobalToaster"

export const metadata: Metadata = {
  title: "NHC – Nusa Home Care",
  description: "Care Islami, Sentuhan Hati",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <GlobalToaster /> {/* harus ada supaya toast muncul di semua halaman */}
      </body>
    </html>
  );
}
