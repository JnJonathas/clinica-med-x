import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = { title: "Sobre a clínica" };

const values = [
  { title: "Missão", text: "Oferecer cuidado acessível, seguro e humanizado, aproximando pacientes de profissionais e diagnósticos confiáveis.", icon: Target },
  { title: "Visão", text: "Ser reconhecida em Itaipuaçu e Maricá pela qualidade do atendimento e pela experiência do paciente.", icon: Sparkles },
  { title: "Valores", text: "Ética, acolhimento, clareza, respeito, responsabilidade e melhoria contínua.", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Sobre nós" title="Saúde próxima, cuidado completo e confiança em cada atendimento" description="Uma policlínica pensada para reunir consultas, especialidades e exames em um ambiente moderno e acolhedor." image="/images/recepcao.webp" imageAlt="Recepção moderna e acolhedora da clínica" />
      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Nossa história</span>
            <h2 className="section-title">Uma clínica criada para facilitar a jornada do paciente</h2>
            <div className="prose-medx mt-6">
              <p>A MED-X nasce com a proposta de concentrar serviços de saúde em um só lugar, reduzindo barreiras entre o paciente, a consulta e o diagnóstico.</p>
              <p>O projeto une atendimento humanizado, profissionais especializados, processos claros e uma estrutura preparada para crescer junto com a região.</p>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-emerald-950 text-white">
            <Image src="/images/recepcao.webp" alt="Recepção da clínica com ambiente confortável" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10"><HeartHandshake className="h-10 w-10 text-emerald-200" /><p className="mt-5 text-2xl font-extrabold leading-tight sm:text-4xl">Cuidar bem começa por ouvir, orientar e acolher.</p></div>
          </div>
        </div>
      </section>
      <section className="section-space section-soft">
        <div className="site-container grid gap-5 lg:grid-cols-3">
          {values.map(({ title, text, icon: Icon }) => (
            <article key={title} className="card p-7"><Icon className="h-9 w-9 text-emerald-700" /><h2 className="mt-5 text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-500">{text}</p></article>
          ))}
        </div>
      </section>
      <HomeCTA />
    </>
  );
}
