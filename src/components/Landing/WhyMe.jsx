import React from "react";
import { WHY_ME } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { CheckIcon } from "./icons";
import Reveal from "./Reveal";

const WhyMe = () => {
  const { t } = useT();

  return (
    <section className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <span className="eyebrow">{t({ en: "Why me", ar: "لماذا أنا" })}</span>
          <h2 className="section-title mt-3">{t(WHY_ME.heading)}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {WHY_ME.points.map((point, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex gap-4 surface p-6 h-full">
                <div className="icon-badge !w-10 !h-10 !rounded-lg"><CheckIcon /></div>
                <div>
                  <h3 className="font-bold mb-1.5" style={{ color: "var(--text)" }}>{t(point.title)}</h3>
                  <p className="muted text-sm leading-relaxed m-0">{t(point.desc)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
