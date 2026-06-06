import React, { useState } from "react";
import { FAQ } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { PlusIcon } from "./icons";
import Reveal from "./Reveal";

const Faq = () => {
  const { t, isAr } = useT();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-x max-w-3xl">
        <Reveal className="text-center mb-12">
          <span className="eyebrow">{t({ en: "FAQ", ar: "أسئلة شائعة" })}</span>
          <h2 className="section-title mt-3">{t(FAQ.heading)}</h2>
        </Reveal>

        <div className="space-y-3">
          {FAQ.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="surface overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`w-full flex items-center justify-between gap-4 p-5 ${isAr ? "text-right" : "text-left"}`}
                  >
                    <span className="font-semibold" style={{ color: "var(--text)" }}>{t(item.q)}</span>
                    <span
                      className="icon-badge !w-8 !h-8 !rounded-lg transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      <PlusIcon className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="muted text-sm leading-relaxed px-5 pb-5 m-0">{t(item.a)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
