import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { doctors } from "@/data/doctors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export function DoctorsSection() {
  return (
    <section className="section-space section-soft">
      <div className="site-container">
        <SectionHeading eyebrow="Nossa equipe médica" title="Profissionais que cuidam de você" description="Conheça parte da equipe e escolha o profissional de acordo com a especialidade." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.slug} className="card overflow-hidden p-5 text-center">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-emerald-100 to-slate-100 text-3xl font-black text-emerald-800">{doctor.initials}</div>
              <h3 className="mt-5 text-xl font-bold">{doctor.name}</h3>
              <p className="mt-1 text-sm font-semibold text-emerald-700">{doctor.specialty}</p>
              <p className="mt-1 text-xs text-slate-500">{doctor.crm}</p>
              <p className="mt-4 min-h-20 text-sm leading-6 text-slate-500">{doctor.bio}</p>
              <ButtonLink href={whatsappUrl(`Olá! Gostaria de agendar uma consulta com ${doctor.name}.`)} icon={CalendarDays} variant="secondary" className="mt-5 w-full">Agendar consulta</ButtonLink>
              <Link href={`/medicos/${doctor.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Ver perfil <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center"><ButtonLink href="/medicos">Conhecer toda a equipe</ButtonLink></div>
      </div>
    </section>
  );
}
