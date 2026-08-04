import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export function generateStaticParams() { return doctors.map((doctor) => ({ slug: doctor.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  return doctor ? { title: doctor.name, description: doctor.bio } : {};
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();
  return (
    <>
      <PageHero eyebrow="Perfil médico" title={doctor.name} description={`${doctor.specialty} • ${doctor.crm}`} />
      <section className="section-space">
        <div className="site-container grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="card h-fit p-7 text-center lg:sticky lg:top-32">
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-emerald-100 to-slate-100 text-5xl font-black text-emerald-800">{doctor.initials}</div>
            <h2 className="mt-6 text-2xl font-bold">{doctor.name}</h2><p className="mt-1 font-semibold text-emerald-700">{doctor.specialty}</p><p className="mt-1 text-sm text-slate-500">{doctor.crm}</p>
            <ButtonLink href={whatsappUrl(`Olá! Gostaria de agendar uma consulta com ${doctor.name}.`)} icon={MessageCircle} className="mt-6 w-full">Agendar consulta</ButtonLink>
          </aside>
          <article>
            <h2 className="text-3xl font-bold">Sobre o profissional</h2><p className="mt-5 max-w-3xl leading-8 text-slate-600">{doctor.bio}</p>
            <div className="mt-8 rounded-2xl bg-emerald-50 p-6"><div className="flex gap-3"><CalendarDays className="h-6 w-6 text-emerald-700" /><div><h3 className="font-bold">Dias de atendimento</h3><p className="mt-1 text-sm text-slate-600">{doctor.schedule}</p></div></div></div>
            <h2 className="mt-10 text-2xl font-bold">Áreas de atuação</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{["Avaliação clínica", "Prevenção", "Acompanhamento individualizado", "Orientação de exames"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><CheckCircle2 className="h-5 w-5 text-emerald-700" />{item}</div>)}</div>
            <Link href={`/especialidades/${doctor.specialtySlug}`} className="mt-8 inline-flex text-sm font-bold text-emerald-800">Conhecer a especialidade →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
