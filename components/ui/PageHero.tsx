import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "Ambiente da Policlínica MED-X",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero py-20 sm:py-24 ${image ? "has-photo" : ""}`}>
      {image ? <Image src={image} alt={imageAlt} fill sizes="100vw" priority className="page-hero-photo object-cover" /> : null}
      {image ? <div className="page-hero-overlay" aria-hidden="true" /> : null}
      <div className="site-container relative z-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-white/65">
          <Link href="/" className="hover:text-white">Início</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{eyebrow}</span>
        </div>
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
