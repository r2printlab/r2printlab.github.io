# Hub de links da R2 Print Lab

Vitrine oficial da R2 Print Lab para visitantes vindos do Instagram, TikTok e outros canais sociais. O projeto reúne coleções, marketplaces e contato direto em uma experiência rápida, responsiva e mensurável.

## Stack

- React 19, TypeScript e Vite
- Tailwind CSS 4
- Cloudflare Pages Free
- Cloudflare Web Analytics para tráfego e desempenho
- Google Analytics 4 opcional para eventos de clique

> A versão pública atual ainda está no GitHub Pages. A migração aprovada para Cloudflare Pages está preparada no código, mas conectar contas, publicar e alterar o link da bio continuam pendentes.

## Rodar localmente

```bash
npm install
npm run dev
```

Gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## Rotas compartilháveis

- `/` — página principal e canais oficiais
- `/colecoes/monsters` — coleção Monsters
- `/colecoes/mascotes` — coleção de mascotes
- `/colecoes/natal` — vitrine de Natal (os 14 presentes, com filtro por tipo)

No GitHub Pages, o build copia `index.html` para `404.html`, e assim os links diretos das coleções abrem a página certa. O arquivo `public/_redirects` redireciona as rotas de coleção para a aplicação React no Cloudflare Pages, permitindo abrir e recarregar os links diretamente. `public/_headers` centraliza cache e cabeçalhos básicos de segurança.

## Campanhas sazonais

As campanhas ficam em `src/config/campaigns.ts`. Cada campanha define período, identidade visual e textos. Fora da janela configurada, o site volta automaticamente ao tema padrão.

A campanha `natal-2026` está configurada para:

- início: 22/10/2026 às 00:00, horário de Brasília;
- término: 06/01/2027 às 23:59:59, horário de Brasília;
- prévia manual: `/?campaign=natal-2026`.

Antes da publicação, valide as datas com a R2.

Os arquivos visuais do Natal usados pelo site ficam em `public/assets/campaigns/natal-2026/`. Os originais continuam preservados no repositório operacional da R2.

## Conteúdo e links

- canais oficiais e contato: `src/data/links.ts`;
- produtos Monsters: `src/data/monster.ts`;
- mascotes: `src/data/mascots.ts`;
- presentes de Natal: `src/data/christmas.ts` (link do Mercado Livre, preço, foto e link opcional da Shopee de cada produto). As fotos ficam em `public/assets/campaigns/natal-2026/produtos/` (720x720, WebP, foto ambientada do anúncio).

Os preços da vitrine de Natal foram copiados dos anúncios em 17/11/2026. Quando mudar a promoção no Mercado Livre, atualize o preço em `src/data/christmas.ts`.

Adicionar novos itens às coleções exige somente incluir os dados e os arquivos visuais correspondentes. Links com `#` permanecem indisponíveis e não são tratados como destino válido.

## Métricas gratuitas

O Cloudflare Web Analytics pode ser habilitado com um clique no painel do projeto para medir tráfego e desempenho de forma gratuita e orientada à privacidade.

Para medir ações de negócio, o código está preparado para enviar ao GA4:

- `outbound_click`: clique em WhatsApp, TikTok, Instagram, Mercado Livre ou Shopee;
- `collection_open`: abertura das coleções Monsters ou Mascotes.
- `page_view`: visualização da página principal ou de uma rota de coleção.

Os eventos carregam apenas rótulos operacionais como canal, posição e item; não devem receber PII. O GA4 permanece desligado quando `VITE_GA_MEASUREMENT_ID` não está definido e também não carrega em ambiente local. Para ativar depois da criação e aprovação da propriedade, copie `.env.example` para uma variável de ambiente do projeto na Cloudflare.

## Publicação proposta

1. Criar ou selecionar a conta gratuita da Cloudflare.
2. Conectar este repositório.
3. Criar um projeto Pages com comando `npm run build` e diretório de saída `dist`.
4. Ativar Cloudflare Web Analytics no painel.
5. Opcionalmente, criar a propriedade GA4 e definir `VITE_GA_MEASUREMENT_ID` para medir os eventos de clique.
6. Publicar uma prévia e homologar em celular e desktop.
7. Configurar o domínio definitivo e, depois da validação, atualizar Instagram e demais canais.

Não criar conta, conectar o GitHub, publicar ou alterar domínio sem autorização explícita para a ação exata.

## Acessibilidade e desempenho

- suporte a tema claro e escuro;
- respeito a `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- imagens principais otimizadas em WebP;
- cabeçalhos básicos de segurança e cache configurados para Cloudflare Pages.
