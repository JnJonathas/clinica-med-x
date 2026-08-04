import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="MED-X - Página inicial">
      <span className="relative grid h-11 w-12 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 52 40" className={`h-10 w-13 ${light ? "text-emerald-300" : "text-emerald-600"}`} fill="none">
          <path d="M2 24h11l4-15 7 28 7-22 5 9h14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[0.63rem] font-bold tracking-[0.32em] ${light ? "text-white/75" : "text-slate-500"}`}>
          POLICLÍNICA
        </span>
        <span className={`block text-2xl font-black italic tracking-[-0.08em] ${light ? "text-white" : "text-slate-950"}`}>
          MED-X
        </span>
        <span className={`block text-[0.58rem] font-bold tracking-[0.19em] ${light ? "text-white/75" : "text-slate-500"}`}>
          DIAGNÓSTICOS
        </span>
      </span>
    </Link>
  );
}
