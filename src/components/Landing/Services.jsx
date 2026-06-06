import React from "react";
import { SERVICES } from "../../constants/services";
import { SERVICES_SECTION } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { SERVICE_ICONS, ArrowIcon } from "./icons";
import Reveal from "./Reveal";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Services = () => {
  const { t, language, isAr } = useT();

  return (
    <section id="services" className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t({ en: "Services", ar: "الخدمات" })}</span>
          <h2 className="section-title mt-3">{t(SERVICES_SECTION.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(SERVICES_SECTION.subheading)}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const c = service[language] || service.en;
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal key={service.id} delay={i * 100}>
                <div className="surface lift p-7 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="icon-badge">{Icon && <Icon />}</div>
                    <span className="chip">{c.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{c.title}</h3>
                  <p className="muted text-sm leading-relaxed flex-1 m-0">{c.description}</p>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {isAr ? "ابدأ معي" : "Get started"}
                    <ArrowIcon className={isAr ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
