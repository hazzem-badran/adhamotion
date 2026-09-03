import React from "react";
import { STATEMENT } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { StarIcon } from "./icons";

// Huge looping headline strip — pure brand energy between the hero trust bar
// and the Problem section. Alternates outlined / filled words, star dividers.
const Statement = () => {
  const { t } = useT();
  const words = [...STATEMENT.words, ...STATEMENT.words];

  return (
    <section className="py-10 sm:py-14 overflow-hidden" style={{ borderBlock: "1px solid var(--border)" }}>
      <div className="marquee">
        <div className="statement-track">
          {words.map((w, i) => (
            <span key={i} className="inline-flex items-center">
              <span className={`statement-word text-5xl sm:text-7xl md:text-8xl ${i % 2 === 1 ? "is-filled" : ""}`}>
                {t(w)}
              </span>
              <span className="mx-4 sm:mx-6 flex-shrink-0 inline-flex" style={{ color: "var(--accent)", opacity: 0.6 }}>
                <StarIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;
