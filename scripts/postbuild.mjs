// Depois do build: cria uma página HTML de verdade para cada coleção.
// Assim o GitHub Pages responde 200 (e não 404) nos links diretos, e cada link
// ganha título e imagem próprios na prévia do WhatsApp, Instagram e Google.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const site = "https://r2printlab.github.io";
const base = readFileSync("dist/index.html", "utf8");

const pages = [
  {
    path: "colecoes/natal",
    title: "Presentes de Natal | R2 Print Lab",
    description: "Papai Noel, Grinch, árvores com LED, tigelas e guirlandas impressos em 3D. Compre pelo Mercado Livre ou chame a R2 no WhatsApp.",
    image: `${site}/assets/campaigns/natal-2026/og-natal.jpg`,
  },
  {
    path: "colecoes/monsters",
    title: "Coleção Monsters | R2 Print Lab",
    description: "Porta-lata Monster com tampa e abridor em várias cores, produzido em 3D pela R2 Print Lab.",
    image: `${site}/assets/og-monsters.jpg`,
  },
  {
    path: "colecoes/mascotes",
    title: "Mascotes de Times | R2 Print Lab",
    description: "Mascotes de times de futebol impressos em 3D para torcedores e colecionadores.",
    image: `${site}/assets/logo-r2.png`,
  },
];

const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(String.raw`(<meta\s+${attr}="${key}"\s+content=")[^"]*(")`), `$1${value}$2`);

for (const page of pages) {
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${page.description}$2`);
  html = setMeta(html, "property", "og:url", `${site}/${page.path}`);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:image", page.image);
  mkdirSync(`dist/${page.path}`, { recursive: true });
  writeFileSync(`dist/${page.path}/index.html`, html);
}

// Qualquer outro endereço desconhecido ainda cai no site, em vez da página de erro do GitHub.
copyFileSync("dist/index.html", "dist/404.html");
console.log(`postbuild: ${pages.length} páginas de coleção + 404.html`);
