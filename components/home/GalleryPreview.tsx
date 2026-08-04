import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const gallery = [
  { title: "Recepção", copy: "Ambiente acolhedor e organizado.", image: "/images/recepcao.webp", alt: "Recepção moderna da clínica" },
  { title: "Diagnósticos", copy: "Tecnologia com conforto e precisão.", image: "/images/sala-exames.webp", alt: "Sala moderna para exames e diagnósticos" },
  { title: "Unidade", copy: "Estrutura contemporânea em Itaipuaçu.", image: "/images/hero-clinica.webp", alt: "Fachada contemporânea da unidade" },
];

export function GalleryPreview() {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <SectionHeading eyebrow="Nossa estrutura" title="Um espaço pensado para o seu bem-estar" description="Conheça os ambientes conceituais de recepção, diagnóstico e atendimento que orientam esta fase do projeto." />
            <ButtonLink href="/galeria" className="mt-7">Conhecer a estrutura</ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map(({ title, copy, image, alt }, index) => (
              <figure key={title} className={`group relative min-h-56 overflow-hidden rounded-3xl bg-emerald-950 ${index === 0 ? "sm:row-span-2 sm:min-h-[29rem]" : ""}`}>
                <Image src={image} alt={alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 35vw" : "(max-width: 1024px) 100vw, 25vw"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-sm text-white/70">{copy}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
