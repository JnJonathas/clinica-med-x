# MED-X Platform — versão 0.2

Site institucional completo e executável da Policlínica MED-X, construído com Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Lucide React.

## Executar localmente

Requisitos: Node.js 20.9 ou superior.

```powershell
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validar para produção

```powershell
npm run check
npm run build
npm start
```

## O que está implementado

- Home premium e responsiva com hero fotográfico
- Busca integrada de médicos, exames e especialidades
- Contadores animados e respeito a `prefers-reduced-motion`
- Páginas de Sobre, Especialidades, Exames, Médicos, Convênios, Notícias, Galeria e Contato
- Rotas individuais estáticas para cada especialidade, exame e médico
- Formulário que encaminha a solicitação para o WhatsApp
- Mapa incorporado e link para abrir no Google Maps
- WhatsApp flutuante, voltar ao topo, FAQ e aviso de cookies
- SEO, Open Graph, Twitter Card, Schema de clínica, sitemap, robots e manifesto
- Imagens WebP otimizadas e carregamento com `next/image`
- Acessibilidade de teclado, link de salto, rótulos e foco visível

## Conteúdo centralizado

Os dados editáveis estão em:

- `data/clinic.ts`: contato, endereço, horários e redes sociais
- `data/doctors.ts`: médicos e agendas
- `data/specialties.ts`: especialidades
- `data/exams.ts`: exames, preparos, duração, resultados e FAQ

## Antes de publicar

Os médicos, CRM, convênios, estatísticas, telefones, endereço, horários, domínio, e-mail e avaliações desta versão são conteúdos demonstrativos. Substitua todos pelos dados oficiais aprovados pela clínica.

As imagens em `public/images/` são ativos conceituais originais criados para o protótipo. Troque-as pelas fotografias profissionais oficiais quando estiverem disponíveis.

## Próxima etapa recomendada

Conectar Supabase e autenticação para criar o painel administrativo reutilizável, mantendo o site público estático e rápido. Em seguida: Google Analytics, Meta Pixel, e-mail transacional e Área do Paciente.
