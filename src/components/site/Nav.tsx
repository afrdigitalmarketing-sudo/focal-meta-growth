export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-3xl tracking-wide text-navy">
          FOC<span className="text-brand-blue">A</span>L
        </a>
        <a
          href="#calendar"
          className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-brand-blue/90"
        >
          Book a Call <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
