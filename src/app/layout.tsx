import "./globals.css";
import type { Metadata } from "next";
import { GlobalToaster } from "@/components/GlobalToaster"

export const metadata: Metadata = {
  title: "Seminar Pra Event Run For Roots",
  description: "Seminar Pra Event Run For Roots 2025 in Bandung by Laz GDI and NBL",
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
