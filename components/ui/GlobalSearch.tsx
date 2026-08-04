"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Search, Stethoscope, UserRound, X } from "lucide-react";
import { doctors } from "@/data/doctors";
import { exams } from "@/data/exams";
import { specialties } from "@/data/specialties";

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const searchItems = [
  ...specialties.map((item) => ({
    href: `/especialidades/${item.slug}`,
    title: item.name,
    description: item.shortDescription,
    type: "Especialidade",
    icon: Stethoscope,
  })),
  ...exams.map((item) => ({
    href: `/exames/${item.slug}`,
    title: item.name,
    description: item.description,
    type: "Exame",
    icon: FlaskConical,
  })),
  ...doctors.map((item) => ({
    href: `/medicos/${item.slug}`,
    title: item.name,
    description: `${item.specialty} • ${item.crm}`,
    type: "Médico",
    icon: UserRound,
  })),
];

export function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = normalize(query.trim());
    if (term.length < 2) return [];
    return searchItems
      .filter((item) => normalize(`${item.title} ${item.description} ${item.type}`).includes(term))
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative mt-7">
      <label htmlFor="busca-medx" className="sr-only">
        Pesquisar médicos, exames e especialidades
      </label>
      <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-emerald-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100">
        <Search className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
        <input
          id="busca-medx"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Digite um médico, exame ou especialidade"
          className="min-w-0 flex-1 bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          autoComplete="off"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700" aria-label="Limpar pesquisa">
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {query.trim().length >= 2 ? (
        <div className="absolute inset-x-0 top-[calc(100%+.5rem)] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(4,58,43,.2)]">
          {results.length ? (
            <ul aria-label="Resultados da pesquisa">
              {results.map(({ href, title, description, type, icon: Icon }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setQuery("")} className="group flex items-center gap-3 rounded-xl p-3 hover:bg-emerald-50">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-white"><Icon className="h-5 w-5" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700">{type}</span>
                      <strong className="block truncate text-sm text-slate-900">{title}</strong>
                      <span className="block truncate text-xs text-slate-500">{description}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-700" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-center text-sm text-slate-500">Nenhum resultado encontrado. Fale com nossa equipe para receber ajuda.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
