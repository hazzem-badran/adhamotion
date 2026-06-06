import React from "react";
import { TESTIMONIALS } from "../../constants/testimonials";
import { TESTIMONIALS_SECTION } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { StarIcon, QuoteIcon } from "./icons";
import Reveal from "./Reveal";

const Stars = ({ count }) => (
  <div className="flex gap-0.5" style={{ color: "#f5a524" }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} className="w-4 h-4" />
    ))}
  </div>
);

const Testimonials = () => {
  const { t, isAr } = useT();

  return (
    <section id="testimonials" className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t(TESTIMONIALS_SECTION.eyebrow)}</span>
          <h2 className="section-title mt-3">{t(TESTIMONIALS_SECTION.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(TESTIMONIALS_SECTION.subheading)}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={tm.id} delay={i * 80}>
              <figure className="surface lift p-7 h-full flex flex-col m-0 relative overflow-hidden">
                <QuoteIcon className="w-10 h-10 absolute top-4 end-5 opacity-10" />
                <Stars count={tm.rating} />
                <blockquote className={`mt-4 mb-6 text-[15px] leading-relaxed flex-1 ${isAr ? "text-right" : "text-left"}`} style={{ color: "var(--text)" }}>
                  {t(tm.quote)}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(150deg, ${tm.accent}, color-mix(in srgb, ${tm.accent} 55%, #06121f))` }}
                  >
                    {tm.name.charAt(0)}
                  </span>
                  <span className={isAr ? "text-right" : "text-left"}>
                    <span className="block text-sm font-bold" style={{ color: "var(--text)" }}>{tm.name}</span>
                    <span className="block text-xs muted">{t(tm.role)} · {tm.brand}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs muted mt-8">{t(TESTIMONIALS_SECTION.note)}</p>
      </div>
    </section>
  );
};

export default Testimonials;
