"use client";

import { useRouter } from "next/navigation";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
};

const PricingCard = ({ name, price, features }: PricingCardProps) => {
  const router = useRouter();

  const handleSelectPackage = () => {
    router.push(`/registrasi?paket=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
      <ul className="text-gray-700 mb-6 space-y-2">
        {features.map((f, idx) => (
          <li key={idx} className="text-sm">
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleSelectPackage}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Pilih Paket
      </button>
    </div>
  );
};

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 500.000",
      features: ["Fitur 1", "Fitur 2", "Fitur 3"],
    },
    {
      name: "Premium",
      price: "Rp 1.000.000",
      features: ["Fitur 1", "Fitur 2", "Fitur 3", "Fitur 4"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Pilih Paket</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
