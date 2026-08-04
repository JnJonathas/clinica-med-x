import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Notícias e saúde" };

const posts = [
  { title: "A importância dos exames preventivos para sua saúde", category: "Prevenção", date: "12 mai" },
  { title: "Cuidados com o coração: prevenção é o melhor caminho", category: "Cardiologia", date: "05 mai" },
  { title: "Check-up anual: por que ele é tão importante?", category: "Bem-estar", date: "28 abr" },
];

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Notícias" title="Informação confiável para cuidar melhor da sua saúde" description="Conteúdos educativos, novidades da clínica e orientações de prevenção." />
      <section className="section-space section-soft"><div className="site-container grid gap-5 lg:grid-cols-3">{posts.map((post) => <article key={post.title} className="card overflow-hidden"><div className="min-h-48 bg-gradient-to-br from-emerald-950 via-emerald-700 to-emerald-400 p-6 text-white"><CalendarDays className="h-8 w-8 text-emerald-200" /><span className="mt-20 block text-xs font-bold uppercase tracking-wider">{post.category}</span></div><div className="p-6"><span className="text-xs font-semibold text-slate-400">{post.date}</span><h2 className="mt-3 text-xl font-bold">{post.title}</h2><Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Ler artigo <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></section>
    </>
  );
}
