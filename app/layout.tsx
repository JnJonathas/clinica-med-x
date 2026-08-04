import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medxdiagnosticos.com.br"),
  title: {
    default: "Policlínica MED-X Diagnósticos | Itaipuaçu",
    template: "%s | MED-X Diagnósticos",
  },
  description:
    "Consultas, especialidades e exames com atendimento humanizado em Itaipuaçu, Maricá.",
  keywords: [
    "Policlínica Itaipuaçu",
    "Clínica em Maricá",
    "Exames Itaipuaçu",
    "Médicos Itaipuaçu",
    "MED-X Diagnósticos",
  ],
  openGraph: {
    title: "Policlínica MED-X Diagnósticos",
    description:
      "Cuidado que você confia, saúde que você sente. Consultas e exames em Itaipuaçu.",
    type: "website",
    locale: "pt_BR",
    siteName: "Policlínica MED-X Diagnósticos",
    images: [{ url: "/images/hero-clinica.webp", alt: "Fachada contemporânea da Policlínica MED-X" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Policlínica MED-X Diagnósticos",
    description: "Consultas, especialidades e exames em Itaipuaçu.",
    images: ["/images/hero-clinica.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  telephone: clinic.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.street,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: "BR",
  },
  openingHours: "Mo-Fr 07:00-18:00",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <BackToTop />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
        />
      </body>
    </html>
  );
}
