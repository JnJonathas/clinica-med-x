import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade e proteção de dados"
        description="Modelo inicial para adequação jurídica e técnica conforme a operação real da clínica."
      />
      <section className="section-space">
        <article className="prose-medx site-container max-w-4xl">
          <h2>1. Informações coletadas</h2>
          <p>Podemos coletar dados informados em formulários, contatos, solicitações de agendamento e dados técnicos essenciais de navegação.</p>
          <h2>2. Finalidade</h2>
          <p>Os dados são utilizados para responder solicitações, organizar atendimentos, melhorar os serviços e cumprir obrigações legais.</p>
          <h2>3. Compartilhamento</h2>
          <p>Dados pessoais não devem ser compartilhados além do necessário para prestação do serviço, cumprimento legal ou autorização do titular.</p>
          <h2>4. Direitos do titular</h2>
          <p>O titular pode solicitar confirmação, acesso, correção e outras medidas previstas na legislação aplicável.</p>
          <h2>5. Contato</h2>
          <p>Este texto deve ser revisado por responsável jurídico antes da publicação definitiva.</p>
        </article>
      </section>
    </>
  );
}
