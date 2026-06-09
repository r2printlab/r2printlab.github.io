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
- `image`

Use `href` para apontar para a pagina do produto no Mercado Livre, Instagram ou outro canal comercial.

Use `image` para apontar para uma imagem dentro da pasta `public/assets`.

Exemplo:

```ts
image: "/assets/monsters.png",
```

Se a imagem nao existir ou falhar ao carregar, o card continua funcionando com um placeholder visual.

## Logo e imagens

A logo oficial deve ficar em:

```text
public/assets/logo-r2.png
```

As imagens de produtos devem ficar na mesma pasta:

```text
public/assets/
```

Exemplos:

```text
public/assets/monsters.png
public/assets/produto-personalizado.png
```

Depois de adicionar uma imagem, atualize o caminho em:

```text
src/data/products.ts
```

## Cores da identidade visual

As cores principais ficam centralizadas no arquivo:

```text
tailwind.config.js
```

Paleta usada:

- Azul principal: `#1f4564`
- Azul escuro: `#143047`
- Azul suave: `#e8f0f6`
- Preto texto: `#111111`
- Branco: `#ffffff`
- Off-white: `#f7f9fb`
- Cinza texto: `#5f6b76`

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
