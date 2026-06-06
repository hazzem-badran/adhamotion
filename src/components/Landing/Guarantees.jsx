import React from "react";
import { GUARANTEES } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { GUARANTEE_ICONS } from "./icons";
import Reveal from "./Reveal";

const Guarantees = () => {
  const { t } = useT();

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t({ en: "Guarantees", ar: "ضماناتي" })}</span>
          <h2 className="section-title mt-3">{t(GUARANTEES.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(GUARANTEES.subheading)}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUARANTEES.items.map((item, i) => {
            const Icon = GUARANTEE_ICONS[item.icon];
            return (
              <Reveal key={i} delay={i * 90}>
                <div className="surface lift p-7 h-full text-center flex flex-col items-center">
                  <div className="icon-badge mb-5">{Icon && <Icon />}</div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>{t(item.title)}</h3>
                  <p className="muted text-sm leading-relaxed m-0">{t(item.desc)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
