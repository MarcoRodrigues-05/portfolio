import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PageNext({ to }: { to: "/" | "/projetos" }) {
  const projects = to === "/projetos";
  const Arrow = projects ? ArrowRight : ArrowLeft;
  return (
    <nav
      aria-label="Continue pelo portfólio"
      className="glass mt-10 flex flex-col items-start justify-between gap-5 rounded-xl p-6 sm:flex-row sm:items-center md:p-8"
    >
      <div>
        <p className="font-mono text-xs text-primary">// CONTINUE EXPLORANDO</p>
        <p className="mt-2 text-lg font-semibold">
          {projects
            ? "Conheça meu trabalho na prática."
            : "Conheça a trajetória por trás dos projetos."}
        </p>
      </div>
      <Link
        to={to}
        className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
      >
        {!projects && <Arrow size={18} aria-hidden="true" />}
        {projects ? "Ver projetos" : "Sobre mim"}
        {projects && <Arrow size={18} aria-hidden="true" />}
      </Link>
    </nav>
  );
}
