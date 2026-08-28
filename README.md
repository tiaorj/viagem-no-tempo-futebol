# Viagem no Tempo Futebol

Landing page editorial e cinematográfica para histórias sobre futebol.

## Stack
Next.js 14, App Router, TypeScript, Tailwind CSS e Vercel.

## Instalação e execução
`npm install` e depois `npm run dev`. Valide com `npm run lint`, `npm run typecheck` e `npm run build`.

## Configuração
Copie `.env.example` para `.env.local` e informe `NEXT_PUBLIC_GA_ID` para habilitar GA4. Links sociais e contato ficam em `data/site-config.ts`.

## Novo episódio
Adicione um objeto ao array em `data/episodes.ts`. Os links são intencionalmente vazios até existirem URLs oficiais.

## Deploy
Importe o repositório na Vercel, configure `NEXT_PUBLIC_GA_ID` se desejado e publique.
