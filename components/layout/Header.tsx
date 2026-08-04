"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock3, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { clinic, whatsappUrl } from "@/data/clinic";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/exames", label: "Exames" },
  { href: "/medicos", label: "Médicos" },
  { href: "/convenios", label: "Convênios" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/noticias", label: "Notícias" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="hidden bg-emerald-950 text-white lg:block">
        <div className="site-container flex min-h-9 items-center justify-between gap-5 text-xs text-white/85">
          <span className="inline-flex items-center gap-2"><Clock3 className="h-3.5 w-3.5" /> Segunda a sexta: 07h às 18h</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {clinic.phone}</span>
          <span className="inline-flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /> {clinic.whatsapp}</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Itaipuaçu / Maricá - RJ</span>
        </div>
      </div>

      <div className="site-container flex min-h-20 items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-7 text-sm font-semibold transition ${active ? "text-emerald-800" : "text-slate-700 hover:text-emerald-800"}`}
              >
                {item.label}
                {active ? <span className="absolute inset-x-0 bottom-4 h-0.5 rounded-full bg-emerald-600" /> : null}
              </Link>
            );
          })}
        </nav>
        <a
          href={whatsappUrl("Olá! Gostaria de agendar uma consulta na MED-X.")}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-12 items-center gap-2 rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white transition hover:bg-emerald-800 lg:inline-flex"
        >
          Agendar consulta <MessageCircle className="h-5 w-5" />
        </a>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white xl:hidden">
          <nav className="site-container grid gap-1 py-4" aria-label="Menu para celular">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "bg-emerald-50 text-emerald-800" : "text-slate-700"}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl("Olá! Gostaria de agendar uma consulta na MED-X.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white"
            >
              Agendar pelo WhatsApp <MessageCircle className="h-5 w-5" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
