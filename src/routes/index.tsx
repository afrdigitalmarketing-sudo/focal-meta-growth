import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Reviews } from "@/components/site/Reviews";
import { Calendar } from "@/components/site/Calendar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Focal — Meta Ads Agency for DTC Brands" },
      {
        name: "description",
        content:
          "Focal is a Meta-only paid media agency helping DTC brands scale ROAS with full-funnel creative, strategy, and execution. Book a free audit.",
      },
      { property: "og:title", content: "Focal — Meta Ads Agency for DTC Brands" },
      {
        property: "og:description",
        content:
          "Paid media management built for e-commerce brands. $12M+ managed, 3.8x avg ROAS, 40+ brands scaled.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Brands />
        <WhatWeDo />
        <Reviews />
        <HowItWorks />
        <Calendar />
      </main>
      <Footer />
    </div>
  );
}
