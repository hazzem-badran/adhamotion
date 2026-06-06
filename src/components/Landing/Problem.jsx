import React from "react";
import { PROBLEM } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { PAIN_ICONS } from "./icons";
import Reveal from "./Reveal";

const Problem = () => {
  const { t } = useT();

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <span className="eyebrow">{t({ en: "The problem", ar: "المشكلة" })}</span>
          <h2 className="section-title mt-3">{t(PROBLEM.heading)}</h2>
          <p className="mt-4 muted text-lg leading-relaxed">{t(PROBLEM.intro)}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PROBLEM.pains.map((p, i) => {
            const Icon = PAIN_ICONS[p.icon];
            return (
              <Reveal key={i} delay={i * 90}>
                <div className="surface p-7 h-full">
                  <div className="icon-badge mb-5">{Icon && <Icon />}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{t(p.title)}</h3>
                  <p className="muted text-sm leading-relaxed m-0">{t(p.desc)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
