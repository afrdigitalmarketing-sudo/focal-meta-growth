const cards = [
  {
    n: "01",
    icon: "◎",
    title: "Strategy",
    desc: "We audit your account, define your ICP, and build a creative and campaign roadmap anchored to where your growth is actually bottlenecked — not just what's easy to run.",
  },
  {
    n: "02",
    icon: "▲",
    title: "Execution",
    desc: "Campaign architecture, bidding strategy, creative testing, and daily budget allocation — all built around the Meta algorithm and engineered to scale ROAS, not just impressions.",
  },
  {
    n: "03",
    icon: "↗",
    title: "Growth",
    desc: "Weekly reporting that surfaces what actually matters: CAC trends, creative fatigue signals, and exactly where the next dollar should go to compound your returns over time.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-display text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl">
            Full-funnel Meta expertise. <span className="text-brand-blue">Nothing else.</span>
          </h2>
          <p className="text-base font-bold leading-relaxed text-navy/70 lg:pt-3">
            We specialize exclusively in Meta. That focus is the point — you get a team
            of true experts that knows the algorithm, the creative patterns, and the
            data signals that actually move the needle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.n}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-blue transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-navy/30">{c.n}</span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-navy sm:text-4xl">
                {c.title}
              </h3>
              <p className="mt-4 text-sm font-bold leading-relaxed text-navy/70">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
