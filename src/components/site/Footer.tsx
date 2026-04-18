export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-3xl tracking-wide text-white">
          FOC<span className="text-brand-blue">A</span>L
        </a>
        <p className="text-xs font-bold uppercase tracking-widest text-white/50">
          © 2026 Focal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
