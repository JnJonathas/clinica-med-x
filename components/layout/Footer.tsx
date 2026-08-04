import Link from "next/link";
import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { clinic, whatsappUrl } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.1fr_.8fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Atendimento humanizado, profissionais qualificados e tecnologia para cuidar de você e da sua família.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={clinic.instagram} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
            <a href={clinic.facebook} aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Navegação</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link href="/sobre" className="hover:text-white">Sobre a clínica</Link>
            <Link href="/especialidades" className="hover:text-white">Especialidades</Link>
            <Link href="/exames" className="hover:text-white">Exames</Link>
            <Link href="/medicos" className="hover:text-white">Médicos</Link>
            <Link href="/convenios" className="hover:text-white">Convênios</Link>
            <Link href="/galeria" className="hover:text-white">Galeria</Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Fale conosco</h2>
          <div className="mt-5 grid gap-4 text-sm text-white/70">
            <a href={`tel:+${clinic.phoneRaw}`} className="flex gap-3 hover:text-white"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {clinic.phone}</a>
            <a href={whatsappUrl("Olá! Gostaria de falar com a MED-X.")} className="flex gap-3 hover:text-white"><MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {clinic.whatsapp}</a>
            <a href={`mailto:${clinic.email}`} className="flex gap-3 break-all hover:text-white"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {clinic.email}</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Local e horário</h2>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/70">
            <span className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {clinic.address.street}, {clinic.address.city} - {clinic.address.state}</span>
            <span className="flex gap-3"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {clinic.hours.weekdays}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Policlínica MED-X Diagnósticos. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
            <Link href="/contato" className="hover:text-white">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
