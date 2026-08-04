import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { exams } from "@/data/exams";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = { title: "Exames" };

export default function ExamsPage() {
  return (
    <>
      <PageHero eyebrow="Exames" title="Informação, preparo e confiança em cada procedimento" description="Consulte detalhes iniciais sobre os exames e confirme as orientações com nossa equipe." image="/images/sala-exames.webp" imageAlt="Sala confortável para exames e diagnósticos" />
      <section className="section-space section-soft">
        <div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exams.map(({ slug, name, category, description, icon: Icon }) => (
            <Link key={slug} href={`/exames/${slug}`} className="card group p-7">
              <Icon className="h-9 w-9 text-emerald-700" />
              <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-emerald-700">{category}</span>
              <h2 className="mt-2 text-2xl font-bold">{name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Ver orientações <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>
      <HomeCTA />
    </>
  );
}
