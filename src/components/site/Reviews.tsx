const reviews = [
  {
    quote:
      "Working with Focal was a terrific experience as we navigated rapid growth. From the start, they delivered clear, actionable insights that helped us optimize our ad spend and make smarter, more data-driven decisions. Their strategic recommendations played a crucial role in deepening our ad strategy during a year of phenomenal growth",
    name: "Sean Kim",
    role: "Executive Director, Carepod",
  },
  {
    quote:
      "Focal stepped in at a critical moment after our paid media strategist left. From the start, they brought structure, clarity, and strong strategic oversight to a function that needed immediate leadership. With their guidance, we reorganized our paid approach and went on to achieve a record-breaking Black Friday and Cyber Monday — and a new high in monthly revenue shortly after.",
    name: "Alexandra Haskell",
    role: "VP of Marketing, Plated",
  },
  {
    quote:
      "There is a night and day difference before working with Focal and after. Unlike past experiences, they didn't just consult — they brought real clarity. It was remarkable to see someone cut through the fog and make things crystal clear. They nailed down our KPIs and handed us a roadmap to success. No more second-guessing. Just a clear path forward",
    name: "Jimmy Le",
    role: "Head Of Performance Marketing, Restore Patch",
  },
  {
    quote:
      "Focal's expertise in optimizing our Meta and Google campaigns led to significant improvements in traffic, conversions, and return on investment. Their data-driven approach helped us make more informed marketing decisions and reallocate resources more effectively. Their strategic mindset and analytical expertise have made a lasting impact.",
    name: "Maurice Contreras",
    role: "CEO, Volcanica Coffee",
  },
  {
    quote:
      "Focal has been an absolute game-changer for our paid marketing. Their ability to simplify complex analytics and deliver clear, strategic recommendations has been invaluable. Responsive, knowledgeable, and genuinely dedicated — their expertise will be an asset to any brand they work with.",
    name: "Faith McCoy",
    role: "Founder, True Glory Hair",
  },
  {
    quote:
      "Focal has been an exceptional partner to our brand. They consistently brought strategic clarity, rigorous analysis, and a deep understanding of paid media. They helped us navigate major shifts in performance, refine our strategy, and scale efficiently. Reliable, fast, and genuinely invested in driving results — Focal operates like a true extension of your team",
    name: "Gustav H.",
    role: "CEO, Chamberlain Coffee",
  },
  {
    quote:
      "Thanks to Focal, our business has experienced remarkable growth. Before working with them, we were investing blindly in our paid channels and hoping for positive outcomes. Now I feel confident in my ability to assess the health of our business and use those insights to lead my team more effectively. They are one of the best in the business.",
    name: "Kelly Kong",
    role: "Founder & CEO, Mandrn",
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
    <section className="pb-20 pt-4 sm:pb-28 sm:pt-6">
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
