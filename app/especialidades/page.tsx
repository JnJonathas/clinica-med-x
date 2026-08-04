import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { specialties } from "@/data/specialties";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = { title: "Especialidades" };

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero eyebrow="Especialidades" title="Cuidado especializado para diferentes momentos da sua saúde" description="Conheça as áreas atendidas, veja sintomas importantes e encontre o profissional indicado." image="/images/hero-clinica.webp" imageAlt="Unidade médica contemporânea" />
      <section className="section-space section-soft">
        <div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ slug, name, shortDescription, icon: Icon }) => (
            <Link key={slug} href={`/especialidades/${slug}`} className="card group p-7">
              <Icon className="h-9 w-9 text-emerald-700" />
              <h2 className="mt-5 text-2xl font-bold">{name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{shortDescription}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Conhecer especialidade <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>
      <HomeCTA />
    </>
  );
}
