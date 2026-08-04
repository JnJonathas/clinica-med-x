export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  specialtySlug: string;
  crm: string;
  bio: string;
  schedule: string;
  initials: string;
};

export const doctors: Doctor[] = [
  {
    slug: "victor-nassif",
    name: "Dr. Victor Nassif",
    specialty: "Cardiologia",
    specialtySlug: "cardiologia",
    crm: "CRM 52.75739-6",
    bio: "Atendimento cardiológico preventivo e acompanhamento individualizado com foco em qualidade de vida.",
    schedule: "Segundas e quartas, mediante agendamento.",
    initials: "VN",
  },
  {
    slug: "regina-coeli",
    name: "Dra. Regina Coeli",
    specialty: "Ginecologia",
    specialtySlug: "ginecologia",
    crm: "CRM 52.62676-4",
    bio: "Cuidado integral da saúde da mulher com atendimento acolhedor em todas as fases da vida.",
    schedule: "Terças e quintas, mediante agendamento.",
    initials: "RC",
  },
  {
    slug: "leonardo-soares",
    name: "Dr. Leonardo Soares",
    specialty: "Ortopedia",
    specialtySlug: "ortopedia",
    crm: "CRM 52.70751-7",
    bio: "Avaliação de dores, lesões e alterações musculoesqueléticas com abordagem clínica personalizada.",
    schedule: "Quartas e sextas, mediante agendamento.",
    initials: "LS",
  },
  {
    slug: "juliana-martins",
    name: "Dra. Juliana Martins",
    specialty: "Pediatria",
    specialtySlug: "pediatria",
    crm: "CRM 52.91032-1",
    bio: "Acompanhamento da saúde infantil com atenção ao crescimento, desenvolvimento e prevenção.",
    schedule: "Segundas e quintas, mediante agendamento.",
    initials: "JM",
  },
];
