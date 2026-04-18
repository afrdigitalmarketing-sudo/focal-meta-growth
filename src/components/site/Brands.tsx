import carepodLogo from "@/assets/brands/carepod.png";

type Brand = { name: string; logo?: string };

const brands: Brand[] = [
  { name: "ARCHWAY" },
  { name: "FABLE" },
  { name: "CAREPOD", logo: carepodLogo },
  { name: "GROVE" },
  { name: "COVE" },
  { name: "DRIFT" },
];

export function Brands() {
  return (
    <section className="border-y border-border/70 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-navy/50">
          Brands we've worked with
        </p>
      </div>
      <div className="pause-on-hover relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex h-12 min-w-[180px] items-center justify-center text-navy/30 grayscale transition-all duration-300 hover:text-navy hover:grayscale-0 hover:opacity-100"
            >
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  className="max-h-12 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <span className="font-display text-3xl tracking-widest">
                  {b.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
