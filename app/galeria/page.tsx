import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = { title: "Galeria" };

const items = [
  { title: "Recepção e acolhimento", copy: "Um ambiente claro, confortável e organizado desde a chegada.", image: "/images/recepcao.webp", alt: "Recepção contemporânea com poltronas confortáveis" },
  { title: "Sala de exames", copy: "Estrutura pensada para unir precisão, segurança e tranquilidade.", image: "/images/sala-exames.webp", alt: "Sala de exames moderna com equipamentos organizados" },
  { title: "Nossa unidade", copy: "Arquitetura contemporânea e acesso acolhedor em Itaipuaçu.", image: "/images/hero-clinica.webp", alt: "Fachada contemporânea de clínica médica" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Galeria" title="Nossa estrutura pensada para o seu bem-estar" description="Conheça os ambientes que inspiram o projeto visual da MED-X." image="/images/recepcao.webp" imageAlt="Recepção moderna da clínica" />
      <section className="section-space section-soft">
        <div className="site-container">
          <div className="mb-10 flex items-center gap-3 text-emerald-800"><Camera className="h-6 w-6" /><p className="text-sm font-semibold">Imagens conceituais desta fase; serão substituídas pelas fotografias oficiais antes da publicação.</p></div>
          <div className="grid gap-6 lg:grid-cols-2">
            {items.map((item, index) => (
              <figure key={item.title} className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-emerald-950 ${index === 0 ? "lg:row-span-2 lg:min-h-[744px]" : ""}`}>
                <Image src={item.image} alt={item.alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><h2 className="text-2xl font-bold sm:text-3xl">{item.title}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/70">{item.copy}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <HomeCTA />
    </>
  );
}
