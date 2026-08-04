import Image from "next/image";
import { CalendarDays, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { clinic, whatsappUrl } from "@/data/clinic";

export function Hero() {
  return (
    <section className="hero-building medx-grid text-white">
      <Image src="/images/hero-clinica.webp" alt="Fachada contemporânea de uma clínica médica" fill priority sizes="100vw" className="hero-photo object-cover" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="site-container relative z-10 flex min-h-[640px] items-center py-16 lg:py-24">
        <div className="max-w-[610px]">
          <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">Policlínica MED-X</span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
            Cuidado que você confia, <span className="text-emerald-300">saúde que você sente.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Consultas, especialidades e exames com atendimento humanizado, estrutura moderna e agendamento fácil em Itaipuaçu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappUrl("Olá! Gostaria de agendar uma consulta na MED-X.")} icon={MessageCircle} className="bg-emerald-500 hover:bg-emerald-400">
              Agendar consulta
            </ButtonLink>
            <ButtonLink href="/especialidades" variant="light" icon={CalendarDays}>
              Ver especialidades
            </ButtonLink>
          </div>

          <div className="glass-panel mt-10 grid gap-4 rounded-2xl p-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <div><span className="block text-xs text-white/55">Localização</span><strong className="text-sm">Itaipuaçu, Maricá</strong></div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <div><span className="block text-xs text-white/55">Atendimento</span><strong className="text-sm">Seg. a sex. 07h–18h</strong></div>
            </div>
            <div className="flex gap-3 sm:col-span-2 lg:col-span-1">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <div><span className="block text-xs text-white/55">WhatsApp</span><strong className="text-sm">{clinic.whatsapp}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
