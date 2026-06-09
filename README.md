# R2 Print Lab GitHub Pages

Landing page/bio link oficial da R2 Print Lab para o GitHub Pages:

https://r2printlab.github.io

O site funciona como uma vitrine rapida da colecao Monsters, pensada para clientes que chegam pelo Instagram e querem encontrar rapidamente o produto, a cor ou o canal oficial da marca.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages via GitHub Actions

## Rodar o projeto

Instalar dependencias:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

Gerar build:

```bash
npm run build
```

Visualizar build local:

```bash
npm run preview
```

## Links oficiais

Os canais oficiais ficam em:

```text
src/data/links.ts
```

Por enquanto, somente o Instagram possui link real:

```ts
instagram: {
  label: "Instagram",
  url: "https://www.instagram.com/r2printlab/",
  status: "active",
  icon: "instagram",
},
```

Os demais canais ficam como `status: "soon"` e `url: "#"`:

- WhatsApp
- TikTok
- Magalu
- Amazon

Mercado Livre e Shopee ja possuem links oficiais da loja e ficam como `status: "active"`.

Para ativar um canal, troque `url` pelo link real e altere `status` para `"active"`.

Enquanto um canal estiver como `"soon"` ou `url: "#"`, o site exibe o badge "em breve" e nao navega para link vazio.

## Vitrine Monsters

Os dados da colecao ficam em:

```text
src/data/monster.ts
```

Esse arquivo centraliza:

- produto principal
- atalhos da vitrine rapida
- cores disponiveis
- imagens da galeria
- textos da colecao

Para alterar os cards do Quick Shop, edite `monsterShortcuts`.

Cada item possui:

```ts
{
  name: "Monster Preto",
  tag: "Preto",
  color: "#111111",
  image: "/assets/monster-preto.png",
  mercadoLivreUrl: "https://www.mercadolivre.com.br/...",
  shopeeUrl: "https://shopee.com.br/r2printlab3d...",
}
```

Quando `mercadoLivreUrl` ou `shopeeUrl` estiver como `"#"`, o botao aparece como "em breve" sem navegar.

As cores em `monsterColors` tambem possuem `mercadoLivreUrl` e `shopeeUrl`, para permitir links diretos por cor.

## Imagens

A logo oficial deve ficar em:

```text
public/assets/logo-r2.png
```

As imagens previstas para a colecao Monsters ficam em:

```text
public/assets/monster-destaque.png
public/assets/monster-colecao.png
public/assets/monster-preto.png
public/assets/monster-branco.png
public/assets/monster-azul.png
public/assets/monster-vermelho.png
public/assets/monster-roxo.png
public/assets/monster-rosa.png
public/assets/monster-verde.png
public/assets/monster-laranja.png
public/assets/monster-detalhe.png
```

Os videos curtos do produto ficam em:

```text
public/assets/video-monster.mp4
public/assets/monster-branco-neon.mp4
```

Se alguma imagem ainda nao existir, o card mostra um placeholder elegante sem quebrar a pagina.

## Tema Claro/Escuro

O botao de tema fica no Header e usa `localStorage` com a chave:

```text
r2-theme
```

O tema inicial usa a preferencia salva. Se nao houver preferencia salva, o site consulta `prefers-color-scheme`.

O script em `index.html` aplica a classe `dark` antes do React carregar para reduzir flash visual.

As cores principais ficam em:

```text
tailwind.config.js
```

Tema claro:

- Fundo: `#f7f9fb`
- Cards: `#ffffff`
- Texto principal: `#111111`
- Texto secundario: `#5f6b76`
- Azul principal: `#1f4564`
- Azul escuro: `#143047`
- Azul suave: `#e8f0f6`

Tema escuro:

- Fundo: `#071018`
- Cards: `#0f1b26`
- Cards secundarios: `#122538`
- Texto principal: `#f7f9fb`
- Texto secundario: `#b7c3ce`
- Azul destaque: `#7fb0d6`

## Publicar no GitHub Pages

Este repositorio foi configurado para o dominio raiz:

```text
https://r2printlab.github.io
```

O arquivo `vite.config.ts` usa:

```ts
base: "/"
```

O workflow de deploy fica em:

```text
.github/workflows/deploy.yml
```

No GitHub, configure `Settings > Pages > Build and deployment` como `GitHub Actions`.
