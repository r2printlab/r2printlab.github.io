# R2 Print Lab GitHub Pages

Landing page/bio link oficial da R2 Print Lab para o GitHub Pages:

https://r2printlab.github.io

O projeto funciona como um Linktree proprio com visual de marca, botoes comerciais, produtos em destaque e chamada direta para Mercado Livre, WhatsApp e Instagram.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages via GitHub Actions

## Instalar dependencias

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

Depois abra a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Gerar build

```bash
npm run build
```

O build estatico sera criado na pasta `dist`.

## Visualizar build local

```bash
npm run preview
```

## Trocar links

Edite o arquivo:

```text
src/data/links.ts
```

Substitua os placeholders `"#"` pelos links reais:

- Mercado Livre
- WhatsApp
- Instagram
- Produtos personalizados
- Porta Monster / Porta Lata 3D
- Mascotes de Times
- Produtos que brilham no escuro

Exemplo para WhatsApp:

```ts
href: "https://wa.me/5500000000000",
```

## Trocar produtos

Edite o arquivo:

```text
src/data/products.ts
```

Cada produto possui:

- `title`
- `description`
- `tag`
- `href`
- `accent`

Use `href` para apontar para a pagina do produto no Mercado Livre, Instagram ou outro canal comercial.

## Publicar no GitHub Pages

Este repositorio foi configurado para o dominio raiz:

```text
https://r2printlab.github.io
```

O arquivo `vite.config.ts` usa:

```ts
base: "/"
```

Isso e o correto para repositorios do tipo `username.github.io` ou `organization.github.io`.

## GitHub Actions

O workflow fica em:

```text
.github/workflows/deploy.yml
```

Quando houver push na branch `main`, o GitHub Actions executa:

1. Checkout do repositorio
2. Instala Node
3. Instala dependencias com `npm install`
4. Gera build com `npm run build`
5. Publica a pasta `dist` no GitHub Pages

## Configurar GitHub Pages no GitHub

No repositorio do GitHub:

1. Abra `Settings`
2. Entre em `Pages`
3. Em `Build and deployment`, selecione `GitHub Actions`
4. Salve a configuracao
5. Faca push na branch `main`

Depois do workflow concluir, o site ficara disponivel em:

https://r2printlab.github.io

## Estrutura principal

```text
src/
  components/
  data/
  App.tsx
  main.tsx
  index.css
public/
.github/workflows/deploy.yml
```

Os componentes ficam separados em `src/components/` e os dados editaveis ficam em `src/data/`.
