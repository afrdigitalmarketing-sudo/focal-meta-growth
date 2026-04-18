const steps = [
  {
    n: "01",
    title: "Free Account Audit",
    desc: "We review your campaigns, creative library, and account structure. You get a clear picture of where money is leaking — no strings attached.",
  },
  {
    n: "02",
    title: "Custom Growth Plan",
    desc: "A 30-day action plan built around your product, margins, and goals. Creative brief, media strategy, and restructure included.",
  },
  {
    n: "03",
    title: "Execution and Scale",
    desc: "We run the ads. You see weekly reports with clear numbers. We scale what works, kill what doesn't, and compound the wins.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl">
          From audit to growth in <span className="text-brand-blue">three steps.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-blue transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                  Step
                </span>
                <span className="font-display text-3xl text-navy">{s.n}</span>
              </div>
              <h3 className="mt-6 font-display text-3xl text-navy sm:text-4xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm font-bold leading-relaxed text-navy/70">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
