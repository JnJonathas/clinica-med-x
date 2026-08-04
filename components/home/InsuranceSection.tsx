import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const insurances = ["Bradesco Saúde", "SulAmérica", "Amil", "Unimed", "Golden Cross", "NotreDame Intermédica"];

export function InsuranceSection() {
  return (
    <section className="section-space">
      <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Convênios" title="Facilidade para cuidar da sua saúde" description="Consulte a disponibilidade do seu plano e confirme as regras de atendimento com nossa central." />
          <ButtonLink href="/convenios" className="mt-7">Ver convênios e orientações</ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insurances.map((name) => (
            <div key={name} className="card flex min-h-28 items-center justify-center gap-3 p-5 text-center font-extrabold text-slate-700">
              <BadgeCheck className="h-6 w-6 shrink-0 text-emerald-700" /> {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
