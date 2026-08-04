import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { clinic, whatsappUrl } from "@/data/clinic";

export function HomeCTA() {
  return (
    <section className="py-10">
      <div className="site-container overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 to-emerald-700 p-8 text-white shadow-[0_26px_70px_rgba(4,89,65,.25)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.16em] text-emerald-200">Pronto para cuidar da sua saúde?</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-5xl">Agende sua consulta de forma rápida e prática.</h2>
            <p className="mt-4 text-white/70">Nossa equipe está pronta para orientar você sobre profissionais, exames e horários.</p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink href={whatsappUrl("Olá! Quero agendar um atendimento na MED-X.")} icon={MessageCircle} className="bg-white text-emerald-900 hover:bg-emerald-50">Falar no WhatsApp</ButtonLink>
            <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-bold hover:bg-white/10"><Phone className="h-5 w-5" /> {clinic.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
