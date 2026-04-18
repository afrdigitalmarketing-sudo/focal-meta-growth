const reviews = [
  {
    quote:
      "They rebuilt our entire Meta account in the first month. By month three we were at a 4.1x ROAS with half the creative waste.",
    name: "Jordan R.",
    role: "Founder, ARCHWAY skincare DTC",
  },
  {
    quote:
      "Finally an agency that speaks the language of contribution margin. Every decision ties back to profit — no vanity metrics.",
    name: "Marcus L.",
    role: "CMO, FABLE home goods",
  },
  {
    quote:
      "Our CPAs dropped 34% in 60 days. The creative strategy alone was worth the retainer. They know exactly how the algorithm reads an ad.",
    name: "Sofia K.",
    role: "Founder, KALO supplement brand",
  },
  {
    quote:
      "We were burning budget on a bloated campaign structure. They consolidated everything, relaunched in two weeks, and hit our best ROAS month ever.",
    name: "Daniel M.",
    role: "Co-founder, GROVE wellness DTC",
  },
  {
    quote:
      "The weekly reports are the best I've seen from any vendor. Clean, honest, and always with a clear next step. No fluff.",
    name: "Priya N.",
    role: "Growth Lead, COVE apparel",
  },
  {
    quote:
      "Scaled from $15k to $60k monthly ad spend without the ROAS falling off a cliff. That's what they promised. That's what happened.",
    name: "Tyler R.",
    role: "Founder, DRIFT outdoor gear",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-brand-blue" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15.2 4.6 18l1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const list = [...reviews, ...reviews];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl">
          What founders say <span className="text-brand-blue">after working with us.</span>
        </h2>
      </div>
      <div className="pause-on-hover relative mt-12 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-slow gap-6 pr-6">
          {list.map((r, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col justify-between rounded-xl border border-border bg-surface p-6 sm:w-[400px]"
            >
              <div>
                <Stars />
                <p className="mt-4 text-sm font-bold leading-relaxed text-navy/80">
                  "{r.quote}"
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-bold text-navy">{r.name}</p>
                <p className="text-xs font-bold text-navy/60">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
