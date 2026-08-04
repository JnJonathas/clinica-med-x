import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { doctors } from "@/data/doctors";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export const metadata: Metadata = { title: "Médicos" };

export default function DoctorsPage() {
  return (
    <>
      <PageHero eyebrow="Equipe médica" title="Profissionais que cuidam de você" description="Conheça especialidades, registros profissionais, experiência e dias de atendimento." image="/images/recepcao.webp" imageAlt="Ambiente acolhedor da clínica" />
      <section className="section-space section-soft">
        <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.slug} className="card p-6 text-center">
              <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-emerald-100 to-slate-100 text-4xl font-black text-emerald-800">{doctor.initials}</div>
              <h2 className="mt-5 text-xl font-bold">{doctor.name}</h2><p className="mt-1 font-semibold text-emerald-700">{doctor.specialty}</p><p className="mt-1 text-xs text-slate-500">{doctor.crm}</p>
              <p className="mt-4 text-sm leading-7 text-slate-500">{doctor.bio}</p>
              <ButtonLink href={whatsappUrl(`Olá! Gostaria de agendar com ${doctor.name}.`)} icon={CalendarDays} variant="secondary" className="mt-5 w-full">Agendar consulta</ButtonLink>
              <Link href={`/medicos/${doctor.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Ver perfil <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
