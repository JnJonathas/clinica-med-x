import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Policlínica MED-X Diagnósticos",
    short_name: "MED-X",
    description: "Consultas, especialidades e exames em Itaipuaçu.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#064333",
    lang: "pt-BR",
  };
}
