const brands = ["ARCHWAY", "FABLE", "KALO", "GROVE", "COVE", "DRIFT"];

export function Brands() {
  return (
    <section className="border-y border-border/70 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-navy/50">
          Brands we've worked with
        </p>
      </div>
      <div className="pause-on-hover relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex h-12 min-w-[180px] items-center justify-center font-display text-3xl tracking-widest text-navy/30 grayscale transition-all duration-300 hover:text-navy hover:grayscale-0"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
