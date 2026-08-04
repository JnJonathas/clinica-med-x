import { Activity, Eye, FlaskConical, ScanLine, Stethoscope, type LucideIcon } from "lucide-react";

export type Exam = {
  slug: string;
  name: string;
  category: string;
  description: string;
  preparation: string[];
  duration: string;
  result: string;
  faq: { question: string; answer: string }[];
  icon: LucideIcon;
};

export const exams: Exam[] = [
  {
    slug: "exames-laboratoriais",
    name: "Exames Laboratoriais",
    category: "Análises clínicas",
    description: "Coletas e análises clínicas com processos seguros e resultados precisos.",
    preparation: ["Levar documento e pedido médico, quando houver", "Confirmar necessidade de jejum", "Informar medicamentos em uso"],
    duration: "Em média, 15 a 30 minutos.",
    result: "O prazo varia conforme o exame e é informado no atendimento.",
    faq: [
      { question: "Precisa de jejum?", answer: "Depende do exame. Confirme com a central antes da coleta." },
      { question: "Crianças podem realizar?", answer: "Sim, conforme indicação e disponibilidade da unidade." },
    ],
    icon: FlaskConical,
  },
  {
    slug: "exames-de-imagem",
    name: "Exames de Imagem",
    category: "Diagnóstico por imagem",
    description: "Tecnologia para apoiar diagnósticos com segurança, conforto e qualidade.",
    preparation: ["Levar exames anteriores", "Usar roupa confortável", "Seguir o preparo específico informado"],
    duration: "Geralmente, de 20 a 60 minutos.",
    result: "Laudos liberados conforme o tipo de exame.",
    faq: [
      { question: "Precisa de pedido médico?", answer: "A maioria dos exames de imagem exige solicitação médica." },
      { question: "Posso levar acompanhante?", answer: "Sim, respeitando as orientações da equipe e do procedimento." },
    ],
    icon: ScanLine,
  },
  {
    slug: "exames-cardiologicos",
    name: "Exames Cardiológicos",
    category: "Coração e circulação",
    description: "Avaliações para prevenção e investigação da saúde cardiovascular.",
    preparation: ["Evitar cremes na região do tórax", "Levar exames anteriores", "Seguir orientação sobre medicamentos"],
    duration: "De 15 minutos a 24 horas, dependendo do exame.",
    result: "Disponível conforme análise do profissional responsável.",
    faq: [
      { question: "O exame dói?", answer: "A maioria dos exames cardiológicos é indolor e não invasiva." },
      { question: "Posso fazer exercício antes?", answer: "Confirme o preparo específico com a central." },
    ],
    icon: Activity,
  },
  {
    slug: "exames-oftalmologicos",
    name: "Exames Oftalmológicos",
    category: "Saúde dos olhos",
    description: "Avaliação detalhada da visão e das estruturas oculares.",
    preparation: ["Levar óculos e receitas anteriores", "Pode ser necessário acompanhante", "Evitar dirigir após dilatação"],
    duration: "Em média, 30 a 60 minutos.",
    result: "Conclusão apresentada conforme o exame realizado.",
    faq: [
      { question: "Dilata a pupila?", answer: "Alguns exames exigem dilatação; a equipe informa previamente." },
      { question: "Posso dirigir depois?", answer: "Quando houver dilatação, recomenda-se não dirigir." },
    ],
    icon: Eye,
  },
  {
    slug: "check-up-preventivo",
    name: "Check-up Preventivo",
    category: "Prevenção",
    description: "Pacotes de avaliação para acompanhar indicadores importantes da sua saúde.",
    preparation: ["Agendar avaliação inicial", "Levar histórico e exames anteriores", "Seguir orientações do pacote"],
    duration: "Varia conforme os exames incluídos.",
    result: "Resultados organizados para avaliação médica.",
    faq: [
      { question: "Quem pode fazer?", answer: "Adultos de diferentes idades, conforme indicação clínica." },
      { question: "O pacote é personalizado?", answer: "A composição pode variar conforme perfil e orientação médica." },
    ],
    icon: Stethoscope,
  },
];
