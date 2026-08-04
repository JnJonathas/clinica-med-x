import type { MetadataRoute } from "next";
import { specialties } from "@/data/specialties";
import { exams } from "@/data/exams";
import { doctors } from "@/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.medxdiagnosticos.com.br";
  const pages = ["", "/sobre", "/especialidades", "/exames", "/medicos", "/convenios", "/contato", "/noticias", "/galeria"];

  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...specialties.map((item) => ({
      url: `${base}/especialidades/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...exams.map((item) => ({
      url: `${base}/exames/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...doctors.map((item) => ({
      url: `${base}/medicos/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
