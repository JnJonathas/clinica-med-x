import {
  Activity,
  Baby,
  Bone,
  HeartPulse,
  PersonStanding,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type Specialty = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  whenToSeek: string[];
  treatments: string[];
  doctorSlug: string;
  icon: LucideIcon;
};

export const specialties: Specialty[] = [
  {
    slug: "cardiologia",
    name: "Cardiologia",
    shortDescription: "Prevenção, diagnóstico e cuidado completo com o coração.",
    description:
      "A cardiologia acompanha a saúde do coração e do sistema circulatório, atuando na prevenção, investigação e tratamento de doenças cardiovasculares.",
    whenToSeek: ["Dor ou pressão no peito", "Palpitações", "Falta de ar", "Pressão alta", "Histórico familiar"],
    treatments: ["Avaliação cardiológica", "Controle de pressão", "Prevenção cardiovascular", "Acompanhamento de exames"],
    doctorSlug: "victor-nassif",
    icon: HeartPulse,
  },
  {
    slug: "ginecologia",
    name: "Ginecologia",
    shortDescription: "Saúde da mulher em todas as fases da vida.",
    description:
      "Atendimento preventivo e acompanhamento da saúde ginecológica com escuta, orientação e cuidado individualizado.",
    whenToSeek: ["Consulta preventiva", "Alterações no ciclo", "Dor pélvica", "Planejamento reprodutivo"],
    treatments: ["Consulta ginecológica", "Prevenção", "Acompanhamento clínico", "Orientação de exames"],
    doctorSlug: "regina-coeli",
    icon: PersonStanding,
  },
  {
    slug: "endocrinologia",
    name: "Endocrinologia",
    shortDescription: "Equilíbrio hormonal, metabolismo e qualidade de vida.",
    description:
      "Especialidade voltada ao diagnóstico e acompanhamento de alterações hormonais e metabólicas.",
    whenToSeek: ["Alterações da tireoide", "Diabetes", "Mudanças de peso", "Cansaço persistente"],
    treatments: ["Avaliação metabólica", "Controle do diabetes", "Tireoide", "Acompanhamento hormonal"],
    doctorSlug: "regina-coeli",
    icon: Activity,
  },
  {
    slug: "pediatria",
    name: "Pediatria",
    shortDescription: "Acompanhamento cuidadoso do crescimento e desenvolvimento.",
    description:
      "Cuidado integral da criança e do adolescente, com foco em prevenção, desenvolvimento e bem-estar.",
    whenToSeek: ["Acompanhamento de rotina", "Febre e sintomas", "Desenvolvimento", "Orientação aos responsáveis"],
    treatments: ["Puericultura", "Consulta clínica", "Prevenção", "Acompanhamento do desenvolvimento"],
    doctorSlug: "juliana-martins",
    icon: Baby,
  },
  {
    slug: "ortopedia",
    name: "Ortopedia",
    shortDescription: "Cuidado com ossos, articulações, músculos e movimentos.",
    description:
      "Diagnóstico e tratamento de dores, lesões e alterações do sistema musculoesquelético.",
    whenToSeek: ["Dor nas costas", "Lesões esportivas", "Dor articular", "Limitação de movimento"],
    treatments: ["Avaliação ortopédica", "Tratamento de lesões", "Acompanhamento pós-trauma", "Prevenção"],
    doctorSlug: "leonardo-soares",
    icon: Bone,
  },
  {
    slug: "clinica-geral",
    name: "Clínica Geral",
    shortDescription: "Primeiro atendimento e acompanhamento completo da saúde.",
    description:
      "Avaliação ampla da saúde, acompanhamento de sintomas e direcionamento para especialistas quando necessário.",
    whenToSeek: ["Check-up", "Sintomas gerais", "Acompanhamento de saúde", "Orientação médica"],
    treatments: ["Consulta clínica", "Check-up", "Prevenção", "Encaminhamento especializado"],
    doctorSlug: "victor-nassif",
    icon: Stethoscope,
  },
];
