import carepodLogo from "@/assets/brands/carepod.png";
import platedLogo from "@/assets/brands/plated.png";
import chamberlainLogo from "@/assets/brands/chamberlain-coffee.png";
import volcanicaLogo from "@/assets/brands/volcanica.png";
import mandrnLogo from "@/assets/brands/mandrn.png";
import lunaSkyeLogo from "@/assets/brands/luna-skye.png";

type Brand = { name: string; logo?: string };

const brands: Brand[] = [
  { name: "Carepod", logo: carepodLogo },
  { name: "Plated Skin Science", logo: platedLogo },
  { name: "Chamberlain Coffee", logo: chamberlainLogo },
  { name: "Volcanica Coffee", logo: volcanicaLogo },
  { name: "Mandrn", logo: mandrnLogo },
  { name: "Luna Skye", logo: lunaSkyeLogo },
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
              className="flex h-16 min-w-[180px] items-center justify-center"
            >
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  className="max-h-14 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              ) : (
                <span className="font-display text-3xl tracking-widest text-navy/30 transition-colors duration-300 hover:text-navy">
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
