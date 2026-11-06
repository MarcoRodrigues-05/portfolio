import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { PageNext } from "@/components/PageNext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marco Paulo Soares Rodrigues — Engenharia de Software & Dados" },
      {
        name: "description",
        content:
          "Portfólio de Marco Rodrigues, Analista de Projetos na IVECO, focado em Engenharia de Software, Dados e IA.",
      },
      { property: "og:title", content: "Marco Rodrigues — Portfólio" },
      { property: "og:description", content: "Engenharia de Software, Dados e IA aplicada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  {
    t: "Desenvolvimento de Software",
    d: [
      "Backend, APIs e aplicações em Python, Java e SQL",
      "Desenvolvimento orientado a problemas",
      "Tratamento de dados e automação",
    ],
  },
  {
    t: "Engenharia & Arquitetura",
    d: [
      "Scrum na prática profissional e acadêmica",
      "Arquitetura modular em camadas e serviços",
      "Testes automatizados e validação de regras",
    ],
  },
  {
    t: "Dados",
    d: [
      "PostgreSQL, importação, normalização e deduplicação",
      "Análise de desempenho e cache",
      "Indicadores e métricas",
    ],
  },
  {
    t: "IA & Inovação",
    d: ["Integração de LLM local", "Engenharia de prompts", "Desenvolvimento assistido por IA"],
  },
];

const exp = [
  {
    r: "Analista de Projetos",
    p: "abr 2026 — atual",
    d: "Via EDC Group. Desenvolvimento e gestão do sistema de Diagnóstico Avançado, principal plataforma de análise de dados de pós-venda. Métricas, dashboards, automações e detecção de padrões e anomalias para análise de causa raiz.",
  },
  {
    r: "Estágio — Software & Analytics (IVECO Europa)",
    p: "mar 2026 — abr 2026",
    d: "Job Rotation com Ciência de Dados, análise de telemetria e soluções de ingestão e processamento de dados.",
  },
  {
    r: "Estágio — Design Analysis & Simulation",
    p: "out 2024 — mar 2026",
    d: "Ciência de Dados, Análise Estrutural, automação e manutenção de código legado em MATLAB.",
  },
];

const stack = ["Python", "Java", "SQL", "PostgreSQL", "MATLAB", "LLMs", "Scrum", "Git"];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-32">
          <p className="font-mono text-sm text-primary">Olá, eu sou</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Marco Paulo <span className="text-gradient">Rodrigues</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            Analista de Projetos · Engenharia de Software
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Construo soluções eficientes e orientadas a resultados com foco em Engenharia de
            Software, Dados e IA — hoje no time de Advanced Diagnostics da IVECO Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projetos"
              className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Ver projetos
            </Link>
            <a
              href="https://github.com/MarcoRodrigues-05"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-lg px-5 py-2.5 transition hover:border-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marcopaulosoaresrodrigues/"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-lg px-5 py-2.5 transition hover:border-primary"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <Section n="01" title="Qualificações">
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.t} className="glass rounded-xl p-6 transition hover:border-primary/50">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {s.d.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section n="02" title="Experiência · IVECO Brasil">
          <ol className="relative space-y-8 border-l pl-8">
            {exp.map((e) => (
              <li key={e.r} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                <p className="font-mono text-xs text-primary">{e.p}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.r}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section n="03" title="Formação & Certificações">
          <div className="grid gap-4 md:grid-cols-3">
            <Card t="Ciência da Computação" s="Centro Universitário Una · 2024–2027" />
            <Card t="Scrum Fundamentals Certified" s="SFC™" />
            <Card t="Michigan English Test" s="MET · Inglês B1" />
          </div>
        </Section>

        <Section n="04" title="Contato">
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-muted-foreground">Aberto a novas oportunidades e desafios.</p>
            <a
              href="mailto:marcopaulosrodrigues04@gmail.com"
              className="mt-4 block break-all text-lg font-semibold text-gradient sm:text-xl md:text-2xl"
            >
              marcopaulosrodrigues04@gmail.com
            </a>
            <p className="mt-2 font-mono text-sm text-muted-foreground">(31) 99803-8187</p>
          </div>
        </Section>
        <PageNext to="/projetos" />
        <footer className="py-10 text-center font-mono text-xs text-muted-foreground">
          © 2026 Marco Paulo Soares Rodrigues
        </footer>
      </main>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-14">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold md:text-3xl">
        <span className="font-mono text-base text-primary">{n}.</span>
        {title}
        <span className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}

function Card({ t, s }: { t: string; s: string }) {
  return (
    <div className="glass rounded-xl p-6">
      <h3 className="font-semibold">{t}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{s}</p>
    </div>
  );
}
