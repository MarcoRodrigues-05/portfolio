import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Github, Globe, GraduationCap } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Marco Rodrigues" },
      {
        name: "description",
        content:
          "Conheça o e-commerce Jacaré Utilidades, em produção, e os projetos acadêmicos NutriLife e UTrip, de Marco Rodrigues.",
      },
      { property: "og:title", content: "Projetos — Marco Rodrigues" },
      {
        property: "og:description",
        content: "Da sala de aula à produção: projetos de software para problemas reais.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Projetos,
});

const academicos = [
  {
    nome: "NutriLife",
    area: "Saúde & tecnologia",
    status: "Projeto acadêmico",
    capa: "/projects/nutrilife-logo.png",
    alt: "Marca do NutriLife, com coração e talheres",
    classe: "project-cover-nutrilife",
    descricao:
      "Aplicativo desenvolvido em parceria com alunos de Nutrição, conectando conhecimentos de saúde e desenvolvimento de software para apoiar a rotina do nutricionista.",
    recursos: ["Gestão de pacientes", "Cálculo de IMC e gasto energético", "Planos alimentares"],
    tecnologias: ["React Native", "Expo", "TypeScript"],
    repo: "https://github.com/MarcoRodrigues-05/NutriLife-ProjetoUna",
  },
  {
    nome: "UTrip",
    area: "Mobilidade universitária",
    status: "Não finalizado",
    capa: "/projects/utrip-cover.svg",
    alt: "Ilustração de um ônibus universitário conectado a uma rota no mapa",
    classe: "project-cover-utrip",
    descricao:
      "Projeto acadêmico de aplicativo móvel para linhas de transporte universitário. A proposta é facilitar a consulta e a seleção de rotas para faculdades de Sete Lagoas.",
    recursos: ["Mapas e localização", "Seleção de rotas", "Cadastro e login"],
    tecnologias: ["React Native", "Expo", "Java", "Spring Boot"],
    repo: "https://github.com/MarcoRodrigues-05/UTrip-App",
  },
];
const linkClass =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function Projetos() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 pb-8">
        <header className="pb-12 pt-16 md:pb-16 md:pt-24">
          <p className="font-mono text-xs tracking-widest text-primary">
            // IDEIAS QUE VIRAM SOFTWARE
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Meus <span className="text-gradient">projetos</span>
            <span className="text-primary">.</span>
          </h1>
          <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Da sala de aula à produção. Uma seleção do que venho construindo, aprendendo e
              colocando em prática.
            </p>
            <a
              href="#profissional"
              className="inline-flex shrink-0 items-center gap-2 font-mono text-xs text-primary hover:underline"
            >
              Explore os projetos <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </header>
        <section id="profissional" aria-labelledby="titulo-profissional" className="scroll-mt-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-primary">01 /</span>
            <h2 id="titulo-profissional" className="text-xl font-semibold">
              Na prática, em produção
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <article className="project-featured overflow-hidden rounded-2xl border md:grid md:grid-cols-2">
            <div className="project-cover-jacare relative flex min-h-72 items-center justify-center overflow-hidden p-10 md:min-h-full">
              <span className="absolute left-5 top-5 rounded-full border border-green-900/15 bg-white/80 px-3 py-1 font-mono text-[10px] tracking-widest text-green-950">
                PROJETO PROFISSIONAL
              </span>
              <img
                src="/projects/jacare-logo.jpg"
                alt="Marca da Jacaré Utilidades, com seu mascote jacaré"
                width={688}
                height={708}
                className="relative w-52 rounded-2xl shadow-2xl shadow-green-950/10 md:w-64"
                fetchPriority="high"
              />
              <span className="absolute bottom-5 left-5 font-mono text-[10px] tracking-widest text-green-950/65">
                E-COMMERCE · SETE LAGOAS, MG
              </span>
            </div>
            <div className="p-7 md:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Em produção
              </div>
              <p className="mt-5 font-mono text-xs text-muted-foreground">
                Desenvolvimento full stack
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight">Jacaré Utilidades</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Da loja física para o digital: e-commerce desenvolvido para a Jacaré Utilidades,
                criando um novo canal de vendas para clientes de Sete Lagoas e região.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Atuei no desenvolvimento full stack, da experiência de compra às ferramentas
                internas de gestão. O sistema já está em produção e em uso pela empresa.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-foreground/85">
                {[
                  "Carrinho e pedidos",
                  "Entrega ou retirada",
                  "Integração com WhatsApp",
                  "Painel administrativo",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      ↗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3 border-t pt-6">
                <a
                  href="https://www.jacareutilidades.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkClass} bg-primary text-primary-foreground hover:bg-primary/85`}
                >
                  <Globe size={16} aria-hidden="true" />
                  Visitar site
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Caiman-Dev-Studio/E-commerce_JacareUtilidade"
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkClass} border hover:bg-secondary`}
                  aria-label="Ver código do Jacaré Utilidades no GitHub"
                >
                  <Github size={16} aria-hidden="true" />
                  Ver código
                </a>
              </div>
            </div>
          </article>
        </section>
        <section aria-labelledby="titulo-academicos" className="mt-16 md:mt-20">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs text-primary">02 /</span>
            <h2 id="titulo-academicos" className="text-xl font-semibold">
              Construindo conhecimento
            </h2>
            <span className="h-px flex-1 bg-border" />
            <GraduationCap
              size={20}
              className="hidden text-muted-foreground sm:block"
              aria-hidden="true"
            />
          </div>
          <p className="mb-7 text-sm text-muted-foreground">
            Projetos acadêmicos, colaboração e aprendizado na prática.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {academicos.map((p) => (
              <article
                key={p.nome}
                className="glass project-academic flex flex-col overflow-hidden rounded-2xl"
              >
                <div
                  className={`${p.classe} relative flex aspect-[16/9] items-center justify-center overflow-hidden`}
                >
                  <img
                    src={p.capa}
                    alt={p.alt}
                    width={p.nome === "NutriLife" ? 1080 : 800}
                    height={p.nome === "NutriLife" ? 1080 : 450}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-widest text-slate-900/70">
                    {p.area}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold">{p.nome}</h3>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] ${p.nome === "UTrip" ? "border-amber-400/20 bg-amber-400/10 text-amber-200" : "text-muted-foreground"}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.descricao}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                    {p.recursos.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary" aria-hidden="true">
                          ▹
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 mt-6 flex flex-wrap gap-2">
                    {p.tecnologias.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver projeto ${p.nome} no GitHub`}
                    className="mt-auto flex items-center justify-between gap-3 border-t pt-5 text-sm font-medium text-primary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={17} aria-hidden="true" />
                      Explorar no GitHub
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <aside className="mt-14 flex flex-col justify-between gap-5 rounded-xl border p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">Continue explorando.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Mais código, experiências e aprendizados no meu GitHub.
            </p>
          </div>
          <a
            href="https://github.com/MarcoRodrigues-05"
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} shrink-0 border hover:bg-secondary`}
          >
            <Github size={16} aria-hidden="true" />
            Meu GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </aside>
        <footer className="pb-2 pt-10 text-center font-mono text-xs text-muted-foreground">
          © 2026 Marco Paulo Soares Rodrigues
        </footer>
      </main>
    </div>
  );
}
