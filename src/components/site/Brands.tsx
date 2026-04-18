import carepodLogo from "@/assets/brands/carepod.png";
import platedLogo from "@/assets/brands/plated.png";
import chamberlainLogo from "@/assets/brands/chamberlain-coffee.png";
import volcanicaLogo from "@/assets/brands/volcanica.png";
import mandrnLogo from "@/assets/brands/mandrn.png";
import lunaSkyeLogo from "@/assets/brands/luna-skye.png";
import dreamLogo from "@/assets/brands/dream.png";
import holzkernLogo from "@/assets/brands/holzkern.png";
import alenLogo from "@/assets/brands/alen.png";
import houseOfLeonLogo from "@/assets/brands/house-of-leon.png";
import fourKninesLogo from "@/assets/brands/4knines.png";

type Brand = { name: string; logo: string };

const row1: Brand[] = [
  { name: "Carepod", logo: carepodLogo },
  { name: "Plated Skin Science", logo: platedLogo },
  { name: "Chamberlain Coffee", logo: chamberlainLogo },
  { name: "Volcanica Coffee", logo: volcanicaLogo },
  { name: "Mandrn", logo: mandrnLogo },
  { name: "Luna Skye", logo: lunaSkyeLogo },
];

const row2: Brand[] = [
  { name: "Dream", logo: dreamLogo },
  { name: "Holzkern", logo: holzkernLogo },
  { name: "Alen", logo: alenLogo },
  { name: "House of Léon", logo: houseOfLeonLogo },
  { name: "4Knines", logo: fourKninesLogo },
];

function MarqueeRow({ brands, reverse = false }: { brands: Brand[]; reverse?: boolean }) {
  return (
    <div className="pause-on-hover relative overflow-hidden mask-fade-x">
      <div
        className="flex w-max animate-marquee items-center gap-16 pr-16"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex h-16 min-w-[180px] items-center justify-center"
          >
            <img
              src={b.logo}
              alt={`${b.name} logo`}
              className="max-h-14 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <section className="border-y border-border/70 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-navy/50">
          Brands we've worked with
        </p>
      </div>
      <div className="mt-8 space-y-6">
        <MarqueeRow brands={row1} />
        <MarqueeRow brands={row2} reverse />
      </div>
    </section>
  );
}
