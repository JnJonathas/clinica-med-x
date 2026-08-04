"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { whatsappUrl } from "@/data/clinic";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá! Vim pelo site da MED-X.",
      `Nome: ${form.get("name")}`,
      `Telefone: ${form.get("phone")}`,
      `E-mail: ${form.get("email") || "Não informado"}`,
      `Assunto: ${form.get("subject")}`,
      `Mensagem: ${form.get("message") || "Gostaria de receber mais informações."}`,
    ].join("\n");

    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="card p-7" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Envie uma mensagem</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">Preencha os dados e continue o atendimento no WhatsApp da clínica.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">Nome<input name="name" required autoComplete="name" className="min-h-12 rounded-xl border border-slate-200 px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-semibold">Telefone / WhatsApp<input name="phone" required inputMode="tel" autoComplete="tel" className="min-h-12 rounded-xl border border-slate-200 px-4 font-normal" /></label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold">E-mail<input type="email" name="email" autoComplete="email" className="min-h-12 rounded-xl border border-slate-200 px-4 font-normal" /></label>
      <label className="mt-4 grid gap-2 text-sm font-semibold">Assunto<select name="subject" className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 font-normal"><option>Agendamento</option><option>Exames</option><option>Convênios</option><option>Outras informações</option></select></label>
      <label className="mt-4 grid gap-2 text-sm font-semibold">Mensagem<textarea name="message" rows={5} className="rounded-xl border border-slate-200 p-4 font-normal" /></label>
      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500"><input type="checkbox" required className="mt-1 accent-emerald-700" />Autorizo o uso destes dados para retorno sobre minha solicitação, conforme a Política de Privacidade.</label>
      <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 font-bold text-white hover:bg-emerald-800"><Send className="h-5 w-5" />Continuar no WhatsApp</button>
      {submitted ? <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700" role="status"><CheckCircle2 className="h-5 w-5" />Conversa aberta em uma nova aba.</p> : null}
    </form>
  );
}
