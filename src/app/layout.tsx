import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEC – Happy English Course",
  description: "Belajar bahasa Inggris & Indonesia dengan cara yang menyenangkan, efektif, dan personal.",
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
