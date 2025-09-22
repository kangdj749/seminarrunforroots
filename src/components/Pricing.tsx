"use client";

interface Props {
  onOpenRegister: () => void;
}

export default function Pricing({ onOpenRegister }: Props) {
  const data = [
    { title: "Perawatan luka", price: "Rp300.000 – Rp500.000" },
    { title: "Dokter ke rumah", price: "Rp300.000" },
    { title: "Infus & vitamin", price: "Rp200.000 – Rp250.000" },
    { title: "Nebulizer", price: "Rp200.000 – Rp300.000" },
    { title: "Perawatan bayi & pijat bayi", price: "Rp200.000 – Rp300.000" },
    { title: "Fisioterapi", price: "Rp200.000 – Rp500.000" },
    { title: "Akupuntur & bekam", price: "Rp500.000 – Rp1.000.000" },
    { title: "Khitan di rumah", price: "Rp800.000 – Rp2.000.000" },
    { title: "Ambulans 24 jam", price: "Rp500.000 – Rp2.000.000" },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Harga Transparan</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow flex justify-between">
              <span>{item.title}</span>
              <span className="font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={onOpenRegister}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
