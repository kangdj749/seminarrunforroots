"use client";

import { Button } from "@/components/ui/button";

interface Props {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: Props) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-green-600">Nusa Home Care</h1>
        <div className="space-x-4">
          <Button variant="ghost">Layanan</Button>
          <Button variant="ghost">Harga</Button>
          <Button variant="ghost">Testimoni</Button>
          <Button onClick={onOpenRegister} className="bg-green-600 hover:bg-green-700">
            Daftar
          </Button>
        </div>
      </div>
    </nav>
  );
}
