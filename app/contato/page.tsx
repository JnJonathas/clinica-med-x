import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { clinic, whatsappUrl } from "@/data/clinic";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Fale com a MED-X" description="Tire dúvidas, consulte horários e inicie seu agendamento com nossa equipe." image="/images/recepcao.webp" imageAlt="Recepção moderna e acolhedora" />
      <section id="horario" className="section-space section-soft">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-4">
            {[
              { label: "WhatsApp", value: clinic.whatsapp, href: whatsappUrl("Olá! Gostaria de falar com a MED-X."), icon: MessageCircle },
              { label: "Telefone", value: clinic.phone, href: `tel:+${clinic.phoneRaw}`, icon: Phone },
              { label: "E-mail", value: clinic.email, href: `mailto:${clinic.email}`, icon: Mail },
              { label: "Endereço", value: `${clinic.address.street}, ${clinic.address.city} - ${clinic.address.state}`, href: "#mapa", icon: MapPin },
              { label: "Horário", value: clinic.hours.weekdays, href: "#horario", icon: Clock3 },
            ].map(({ label, value, href, icon: Icon }) => <a key={label} href={href} className="card flex gap-4 p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-6 w-6" /></span><span><strong className="block">{label}</strong><span className="mt-1 block text-sm leading-6 text-slate-500">{value}</span></span></a>)}
          </div>
          <ContactForm />
        </div>
      </section>
      <section id="mapa" className="pb-20">
        <div className="site-container overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center"><div><span className="eyebrow">Como chegar</span><h2 className="mt-2 text-2xl font-bold">Atendimento em Itaipuaçu</h2><p className="mt-2 text-sm leading-6 text-slate-500">{clinic.address.street}, {clinic.address.city} - {clinic.address.state}</p></div><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic.address.street}, ${clinic.address.city} - ${clinic.address.state}`)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-800/30 px-5 text-sm font-bold text-emerald-950 hover:bg-emerald-50"><MapPin className="h-5 w-5" />Abrir no Google Maps</a></div>
          <iframe title="Mapa da Policlínica MED-X em Itaipuaçu" src={`https://www.google.com/maps?q=${encodeURIComponent(`${clinic.address.street}, ${clinic.address.city} - ${clinic.address.state}`)}&output=embed`} className="h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
