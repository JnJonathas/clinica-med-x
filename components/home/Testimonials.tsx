import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  { name: "Avaliação demonstrativa", text: "Atendimento muito atencioso, ambiente organizado e equipe profissional." },
  { name: "Avaliação demonstrativa", text: "Consegui informações e agendamento de forma rápida pelo WhatsApp." },
  { name: "Avaliação demonstrativa", text: "Clínica confortável e atendimento humanizado desde a recepção." },
];

export function Testimonials() {
  return (
    <section className="section-space section-soft">
      <div className="site-container">
        <SectionHeading eyebrow="Avaliações" title="Experiências que geram confiança" description="Espaço preparado para receber avaliações reais e verificadas dos pacientes." align="center" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, testimonialIndex) => (
            <blockquote key={testimonialIndex} className="card p-7">
              <div className="flex gap-1 text-amber-500" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div>
              <p className="mt-5 text-base leading-8 text-slate-600">“{item.text}”</p>
              <footer className="mt-6 text-sm font-bold text-slate-500">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
