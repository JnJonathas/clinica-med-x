import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/clinic";

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl("Olá! Gostaria de obter informações e agendar um atendimento na MED-X.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a MED-X pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white shadow-[0_16px_35px_rgba(5,150,105,.4)] transition hover:scale-105 hover:bg-emerald-700"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
