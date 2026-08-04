import Link from "next/link";
import { ArrowRight, FlaskConical, Search, Stethoscope, Users } from "lucide-react";
import { GlobalSearch } from "@/components/ui/GlobalSearch";

const items = [
  { href: "/especialidades", title: "Especialidades", copy: "Encontre a área médica ideal para o seu cuidado.", icon: Stethoscope },
  { href: "/exames", title: "Exames", copy: "Veja preparos, prazos e informações importantes.", icon: FlaskConical },
  { href: "/medicos", title: "Médicos", copy: "Conheça os profissionais e dias de atendimento.", icon: Users },
];

export function QuickAccess() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12">
      <div className="site-container rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(4,58,43,.14)] sm:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Acesso rápido</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Encontre rapidamente o que você procura</h2>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">Precisa de ajuda? <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <GlobalSearch />
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {items.map(({ href, title, copy, icon: Icon }) => (
            <Link key={href} href={href} className="card group flex items-center gap-4 p-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-7 w-7" /></span>
              <span className="flex-1"><strong className="block text-lg">{title}</strong><span className="mt-1 block text-sm leading-6 text-slate-500">{copy}</span></span>
              <Search className="h-5 w-5 text-slate-300 transition group-hover:text-emerald-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
