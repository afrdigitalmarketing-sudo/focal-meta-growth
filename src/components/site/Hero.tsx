const stats = [
  { value: "$100m+", label: "Ad spend managed" },
  { value: "3.2x", label: "Average blended ROAS" },
  { value: "80+", label: "DTC brands scaled" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl leading-[0.95] text-navy sm:text-6xl md:text-7xl lg:text-8xl">
            Serious About <span className="text-brand-blue">Meta</span>? So Are We.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-bold leading-relaxed text-navy/70 sm:text-lg">
            Built for e-commerce brands that want a real specialist on their most
            important paid channel, not another agency juggling eight platforms.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#calendar"
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-brand-blue/90"
            >
              Book A Free Strategy Call <span aria-hidden>​</span>
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy/80 underline-offset-4 hover:text-brand-blue hover:underline"
            >
              See what we do <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-surface sm:mt-20">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center sm:px-8 sm:py-8">
              <dt className="font-display text-3xl text-navy sm:text-5xl md:text-6xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-xs font-bold uppercase tracking-wider text-navy/60 sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
