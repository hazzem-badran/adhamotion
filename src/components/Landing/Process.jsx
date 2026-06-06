import React from "react";
import { PROCESS } from "../../constants/content";
import { useT } from "../../utils/i18n";
import Reveal from "./Reveal";

const Process = () => {
  const { t } = useT();

  return (
    <section id="process" className="section">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t({ en: "Process", ar: "آلية العمل" })}</span>
          <h2 className="section-title mt-3">{t(PROCESS.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(PROCESS.subheading)}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.steps.map((step, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="surface p-7 h-full relative overflow-hidden">
                <span className="text-5xl font-extrabold opacity-10 absolute top-3 right-4" style={{ color: "var(--accent)" }}>
                  {step.no}
                </span>
                <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{step.no}</span>
                <h3 className="text-lg font-bold mt-3 mb-2" style={{ color: "var(--text)" }}>{t(step.title)}</h3>
                <p className="muted text-sm leading-relaxed m-0">{t(step.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
