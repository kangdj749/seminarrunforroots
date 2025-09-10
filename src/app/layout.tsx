import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RBB – Rindu Bolu Bandung",
  description: "Rindu yang lembut, oleh-oleh asli bandung.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
