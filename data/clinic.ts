export const clinic = {
  name: "Policlínica MED-X Diagnósticos",
  shortName: "MED-X",
  tagline: "Cuidado que você confia, saúde que você sente.",
  phone: "(21) 2638-1254",
  phoneRaw: "552126381254",
  whatsapp: "(21) 96888-7787",
  whatsappRaw: "5521968887787",
  email: "contato@medxdiagnosticos.com.br",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  address: {
    street: "Av. Carlos Marighella, Qd. 33, Lt. 9 - Barroco Itaipuaçu",
    city: "Maricá",
    state: "RJ",
    zip: "24912-165",
  },
  hours: {
    weekdays: "Segunda a sexta, das 07h às 18h",
    weekend: "Sábado, domingo e feriados: fechado",
  },
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${clinic.whatsappRaw}?text=${encodeURIComponent(message)}`;
