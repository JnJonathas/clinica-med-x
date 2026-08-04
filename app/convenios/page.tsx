import type { Metadata } from "next";
import { BadgeCheck, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/data/clinic";

export const metadata: Metadata = { title: "Convênios" };
const insurances = ["Bradesco Saúde", "SulAmérica", "Amil", "Unimed", "Golden Cross", "NotreDame Intermédica"];

export default function InsurancePage() {
  return (
    <>
      <PageHero eyebrow="Convênios" title="Planos e orientações para facilitar seu atendimento" description="Consulte a disponibilidade por serviço e confirme cobertura, autorização e documentação antes do agendamento." image="/images/recepcao.webp" imageAlt="Recepção para orientação de pacientes" />
      <section className="section-space section-soft">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{insurances.map((name) => <div key={name} className="card flex min-h-36 items-center justify-center gap-3 p-6 text-center text-xl font-extrabold"><BadgeCheck className="h-7 w-7 text-emerald-700" />{name}</div>)}</div>
      </section>
      <section className="section-space">
        <div className="site-container grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-7"><FileText className="h-9 w-9 text-emerald-700" /><h2 className="mt-5 text-2xl font-bold">Documentação</h2><div className="mt-5 grid gap-3">{["Documento oficial com foto", "Carteirinha do convênio", "Pedido médico, quando necessário", "Autorização prévia, quando exigida"].map((item) => <span key={item} className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="h-5 w-5 text-emerald-700" />{item}</span>)}</div></div>
          <div className="rounded-3xl bg-emerald-950 p-7 text-white"><MessageCircle className="h-9 w-9 text-emerald-300" /><h2 className="mt-5 text-2xl font-bold">Confirme antes de sair de casa</h2><p className="mt-3 text-sm leading-7 text-white/65">A cobertura pode variar por procedimento, plano e categoria. Nossa central verifica as informações iniciais.</p><ButtonLink href={whatsappUrl("Olá! Gostaria de confirmar atendimento pelo meu convênio.")} className="mt-6 bg-emerald-500 hover:bg-emerald-400">Consultar pelo WhatsApp</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
