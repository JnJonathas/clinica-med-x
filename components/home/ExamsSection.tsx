import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { exams } from "@/data/exams";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ExamsSection() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading eyebrow="Exames e diagnósticos" title="Tecnologia e precisão para cuidar de você" description="Informações claras sobre cada exame, preparo, duração e prazo de resultado." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {exams.map(({ slug, name, category, icon: Icon }) => (
            <Link key={slug} href={`/exames/${slug}`} className="card group flex min-h-64 flex-col p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-6 w-6" /></span>
              <span className="mt-5 text-xs font-bold uppercase tracking-wider text-emerald-700">{category}</span>
              <h3 className="mt-2 text-lg font-bold">{name}</h3>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-emerald-800">Detalhes <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-emerald-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4"><ClipboardCheck className="h-8 w-8 shrink-0 text-emerald-300" /><div><h3 className="text-xl font-bold">Resultados rápidos e acesso facilitado</h3><p className="mt-1 text-sm text-white/65">Estrutura preparada para consulta segura dos resultados na futura Área do Paciente.</p></div></div>
          <ButtonLink href="/exames" variant="light" className="shrink-0">Ver todos os exames</ButtonLink>
        </div>
      </div>
    </section>
  );
}
