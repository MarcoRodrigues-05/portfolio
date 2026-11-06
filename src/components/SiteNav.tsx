import { Link } from "@tanstack/react-router";

export function SiteNav() {
  const cls =
    "px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors";
  const active = { className: "px-3 py-1.5 rounded-md text-sm bg-secondary text-foreground" };
  return (
    <header className="sticky top-0 z-50 glass border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-mono text-xs text-primary sm:text-sm">
          &lt;marco.rodrigues /&gt;
        </Link>
        <div className="flex gap-1">
          <Link
            to="/"
            className={`${cls} nav-invite`}
            activeProps={active}
            activeOptions={{ exact: true }}
          >
            <NavLabel>Sobre</NavLabel>
          </Link>
          <Link to="/projetos" className={`${cls} nav-invite`} activeProps={active}>
            <NavLabel>Projetos</NavLabel>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavLabel({ children }: { children: string }) {
  return (
    <>
      <span className="nav-invite-label">{children}</span>
      <svg
        className="nav-invite-ring"
        viewBox="0 0 100 44"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          pathLength="1"
          d="M84 9C65 0 22 1 9 13C-5 27 16 40 48 40C79 40 100 30 94 17C91 11 83 7 74 6"
        />
      </svg>
    </>
  );
}
