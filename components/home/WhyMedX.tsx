import { CalendarCheck, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Timer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { title: "Atendimento humanizado", copy: "Acolhimento e atenção em cada etapa.", icon: HeartHandshake },
  { title: "Equipamentos modernos", copy: "Tecnologia para apoiar diagnósticos confiáveis.", icon: Sparkles },
  { title: "Profissionais especializados", copy: "Equipe qualificada e comprometida.", icon: Stethoscope },
  { title: "Agendamento fácil", copy: "Contato rápido pelo WhatsApp.", icon: CalendarCheck },
  { title: "Ambiente confortável", copy: "Estrutura pensada para seu bem-estar.", icon: ShieldCheck },
  { title: "Atendimento ágil", copy: "Processos claros e menos tempo de espera.", icon: Timer },
];

export function WhyMedX() {
  return (
    <section className="section-space bg-emerald-950 text-white medx-grid">
      <div className="site-container">
        <SectionHeading eyebrow="Por que escolher a MED-X?" title="Confiança, conforto e cuidado em um só lugar" description="Uma experiência de saúde mais simples, próxima e segura para você e sua família." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="bg-emerald-950/70 p-7">
              <Icon className="h-8 w-8 text-emerald-300" />
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
