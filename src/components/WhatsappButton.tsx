export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700"
    >
      💬 WhatsApp
    </a>
  );
}
