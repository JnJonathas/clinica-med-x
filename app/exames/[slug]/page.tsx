import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock3, FileCheck2, MessageCircle } from "lucide-react";
import { exams } from "@/data/exams";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export function generateStaticParams() {
  return exams.map((exam) => ({ slug: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const exam = exams.find((item) => item.slug === slug);
  return exam ? { title: exam.name, description: exam.description } : {};
}

export default async function ExamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exam = exams.find((item) => item.slug === slug);
  if (!exam) notFound();
  const Icon = exam.icon;

  return (
    <>
      <PageHero eyebrow={exam.category} title={exam.name} description={exam.description} />
      <section className="section-space">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-center gap-4"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-8 w-8" /></span><h2 className="text-3xl font-bold">Como funciona</h2></div>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">{exam.description} As orientações definitivas devem ser confirmadas com a central no momento do agendamento.</p>
            <h2 className="mt-10 text-2xl font-bold">Preparo inicial</h2>
            <div className="mt-5 grid gap-3">{exam.preparation.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />{item}</div>)}</div>
            <h2 className="mt-10 text-2xl font-bold">Dúvidas frequentes</h2>
            <div className="mt-5 grid gap-4">{exam.faq.map((item) => <div key={item.question} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">{item.question}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{item.answer}</p></div>)}</div>
          </div>
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-7 lg:sticky lg:top-32">
            <div className="flex gap-3"><Clock3 className="h-6 w-6 text-emerald-700" /><div><strong className="block">Duração estimada</strong><span className="mt-1 block text-sm text-slate-500">{exam.duration}</span></div></div>
            <div className="mt-6 flex gap-3"><FileCheck2 className="h-6 w-6 text-emerald-700" /><div><strong className="block">Resultado</strong><span className="mt-1 block text-sm text-slate-500">{exam.result}</span></div></div>
            <ButtonLink href={whatsappUrl(`Olá! Gostaria de informações sobre ${exam.name}.`)} icon={MessageCircle} className="mt-7 w-full">Falar com a central</ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
