"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const questions = [
  { q: "Preciso de pedido médico para realizar exames?", a: "A exigência depende do exame e do convênio. Confirme com a central antes do atendimento." },
  { q: "Como faço para agendar uma consulta?", a: "O agendamento pode ser iniciado pelo WhatsApp ou telefone. A equipe confirma profissional, data e horário." },
  { q: "Os exames precisam de preparo?", a: "Alguns exames exigem jejum ou orientações específicas. Cada página de exame apresenta o preparo inicial." },
  { q: "Quanto tempo leva para sair o resultado?", a: "O prazo varia conforme o procedimento e é informado no momento do atendimento." },
  { q: "Quais formas de pagamento são aceitas?", a: "As opções devem ser confirmadas diretamente com a recepção, pois podem variar por serviço." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-space section-soft">
      <div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="Perguntas frequentes" title="Informação clara antes do atendimento" description="Respostas rápidas para as dúvidas mais comuns de pacientes e responsáveis." />
        <div className="grid gap-3">
          {questions.map((item, index) => {
            const active = open === index;
            return (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white">
                <button type="button" className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
                  {item.q}<ChevronDown className={`h-5 w-5 shrink-0 text-emerald-700 transition ${active ? "rotate-180" : ""}`} />
                </button>
                {active ? <p className="px-5 pb-5 text-sm leading-7 text-slate-500">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
