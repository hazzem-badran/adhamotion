import React from "react";
import { VENTURES } from "../../constants/ventures";
import { WORK } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";

const Work = () => {
  const { t, isAr } = useT();

  return (
    <section id="ventures" className="section">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t(WORK.eyebrow)}</span>
          <h2 className="section-title mt-3">{t(WORK.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(WORK.subheading)}</p>
        </Reveal>

        <div className="space-y-5 max-w-4xl mx-auto">
          {VENTURES.map((v, i) => (
            <Reveal key={v.id} delay={i * 110}>
              <article className="surface lift p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-center group">
                {/* Logo */}
                <div
                  className="w-full sm:w-40 md:w-44 aspect-square rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center relative"
                  style={{ boxShadow: `0 14px 36px -16px ${v.brand}`, border: "1px solid var(--border)", background: `linear-gradient(150deg, ${v.brand}, color-mix(in srgb, ${v.brand} 55%, #06121f))` }}
                >
                  {/* Mock logo monogram — replace with the real brand logo */}
                  <span className="text-white font-extrabold leading-none group-hover:scale-105 transition-transform duration-500" style={{ fontSize: "3.5rem" }}>
                    {v.title.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
                  <div className={`flex items-center gap-2.5 flex-wrap ${isAr ? "justify-end" : ""}`}>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: v.brand }}
                    >
                      {t(v.role)}
                    </span>
                    <span className="chip">{t(v.tag)}</span>
                    <span className="chip inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2ecc71" }} />
                      {t(v.status)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold mt-3 mb-2" style={{ color: "var(--text)" }}>
                    {v.title}
                  </h3>
                  <p className="muted text-sm leading-relaxed m-0">{t(v.desc)}</p>

                  {v.link && (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {t(WORK.viewText)}
                      <ArrowIcon className={isAr ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
