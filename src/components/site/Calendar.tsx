import { useEffect } from "react";

export function Calendar() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="calendar" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to see what your Meta account{" "}
          <span className="text-brand-blue">should</span> look like?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-relaxed text-white/70">
          Book a free 30-minute audit call. We'll look at your account, tell you
          exactly what we'd change, and you decide if we're the right fit.
        </p>

        <div
          className="calendly-inline-widget mx-auto mt-10 overflow-hidden rounded-xl border border-white/10 bg-surface"
          data-url="https://calendly.com/afrdigitalmarketing/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0e1f38&primary_color=1a6ef5"
          style={{ minWidth: "320px", height: "700px" }}
        />

        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/50">
          No pitch. No obligation. Just a real look at your account.
        </p>
      </div>
    </section>
  );
}
