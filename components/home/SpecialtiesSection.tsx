import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialties } from "@/data/specialties";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SpecialtiesSection() {
  return (
    <section className="section-space section-soft">
      <div className="site-container">
        <SectionHeading eyebrow="Nossas especialidades" title="Diversas áreas da medicina para cuidar da sua saúde" description="Navegue pelas especialidades, entenda quando procurar atendimento e agende com facilidade." align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ slug, name, shortDescription, icon: Icon }) => (
            <Link key={slug} href={`/especialidades/${slug}`} className="card group p-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl font-bold">{name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{shortDescription}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Saiba mais <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-9 text-center"><ButtonLink href="/especialidades">Ver todas as especialidades</ButtonLink></div>
      </div>
    </section>
  );
}
