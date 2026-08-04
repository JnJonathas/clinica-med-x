"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("medx-cookie-consent") !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:flex sm:items-center sm:gap-4">
      <div className="flex flex-1 gap-3">
        <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" />
        <p className="text-sm leading-6 text-slate-600">
          Usamos cookies essenciais para melhorar a experiência. Consulte nossa{" "}
          <Link href="/politica-de-privacidade" className="font-semibold text-emerald-800 underline">
            Política de Privacidade
          </Link>.
        </p>
      </div>
      <button
        type="button"
        className="mt-3 w-full rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white sm:mt-0 sm:w-auto"
        onClick={() => {
          localStorage.setItem("medx-cookie-consent", "accepted");
          setVisible(false);
        }}
      >
        Aceitar
      </button>
    </div>
  );
}
