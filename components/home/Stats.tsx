"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, HeartHandshake, Stethoscope, Users } from "lucide-react";

const stats = [
  { target: 15, prefix: "+", suffix: "", label: "Especialidades", icon: Stethoscope },
  { target: 20, prefix: "+", suffix: "", label: "Profissionais", icon: Users },
  { target: 5, prefix: "+", suffix: " mil", label: "Atendimentos", icon: HeartHandshake },
  { target: 1, prefix: "", suffix: "", label: "Unidade em Itaipuaçu", icon: Building2 },
];

export function Stats() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12" aria-label="Números da clínica">
      <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ target, prefix, suffix, label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-6 w-6" /></span>
            <div><strong className="block text-2xl font-extrabold text-emerald-950"><AnimatedNumber target={target} active={active} prefix={prefix} suffix={suffix} /></strong><span className="text-sm text-slate-500">{label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ target, active, prefix, suffix }: { target: number; active: boolean; prefix: string; suffix: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const startedAt = performance.now();
    const duration = 900;
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <>{prefix}{value}{suffix}</>;
}
