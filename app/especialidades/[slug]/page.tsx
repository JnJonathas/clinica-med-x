import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, Stethoscope } from "lucide-react";
import { specialties } from "@/data/specialties";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialties.find((item) => item.slug === slug);
  return specialty ? { title: specialty.name, description: specialty.shortDescription } : {};
}

export default async function SpecialtyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = specialties.find((item) => item.slug === slug);
  if (!specialty) notFound();
  const doctor = doctors.find((item) => item.slug === specialty.doctorSlug);
  const Icon = specialty.icon;

  return (
    <>
      <PageHero eyebrow="Especialidade" title={specialty.name} description={specialty.shortDescription} />
      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_360px]">
          <article className="prose-medx">
            <div className="flex items-center gap-4"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-8 w-8" /></span><h2 className="m-0">O que é {specialty.name}?</h2></div>
            <p>{specialty.description}</p>
            <h2>Quando procurar atendimento?</h2>
            <ul>{specialty.whenToSeek.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Cuidados e acompanhamentos</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{specialty.treatments.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />{item}</div>)}</div>
          </article>
          <aside className="h-fit rounded-3xl bg-emerald-950 p-7 text-white lg:sticky lg:top-32">
            <Stethoscope className="h-9 w-9 text-emerald-300" />
            <h2 className="mt-5 text-2xl font-bold">Profissional responsável</h2>
            {doctor ? <><p className="mt-5 text-xl font-bold">{doctor.name}</p><p className="text-sm text-emerald-300">{doctor.specialty}</p><p className="mt-1 text-xs text-white/55">{doctor.crm}</p><p className="mt-4 text-sm leading-7 text-white/65">{doctor.bio}</p><Link href={`/medicos/${doctor.slug}`} className="mt-4 inline-block text-sm font-bold text-emerald-300">Ver perfil completo</Link></> : null}
            <ButtonLink href={whatsappUrl(`Olá! Gostaria de agendar uma consulta de ${specialty.name}.`)} icon={MessageCircle} className="mt-7 w-full bg-emerald-500 hover:bg-emerald-400">Agendar consulta</ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
