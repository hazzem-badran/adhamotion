import React from "react";
import { APPROACH } from "../../constants/content";
import { MY_SKILLS } from "../../constants/skills";
import { useT } from "../../utils/i18n";
import Reveal from "./Reveal";

const Approach = () => {
  const { t } = useT();
  const paragraphs = t(APPROACH.paragraphs);

  return (
    <section id="about" className="section">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">{t({ en: "My story", ar: "قصتي" })}</span>
            <h2 className="section-title mt-3 mb-6">{t(APPROACH.heading)}</h2>
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="muted leading-relaxed text-[15px] m-0">{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface p-8">
              <p className="text-xs uppercase tracking-[0.2em] muted mb-4">
                {t({ en: "Toolbox", ar: "أدواتي" })}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {MY_SKILLS.map((skill, i) => (
                  <span key={i} className="chip">{skill}</span>
                ))}
              </div>

              <div className="mt-8 pt-6 grid grid-cols-2 gap-6" style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <p className="text-3xl font-extrabold text-gradient m-0">+5</p>
                  <p className="muted text-sm m-0">{t({ en: "Years of experience", ar: "سنوات خبرة" })}</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-gradient m-0">2</p>
                  <p className="muted text-sm m-0">{t({ en: "Ventures founded", ar: "علامتان أسّسهما" })}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Approach;
