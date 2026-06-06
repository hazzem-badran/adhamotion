import React from "react";
import { LOGOS } from "../../constants/logos";
import { LOGOS as LOGOS_TEXT } from "../../constants/content";
import { useT } from "../../utils/i18n";

// Trust marquee — mock brand wordmarks scrolling in a seamless infinite loop.
// The list is rendered twice; the track slides exactly one copy width (-50%),
// so logos exiting one edge are replaced by the next with no jump.
// NOTE: spacing is a per-item margin (not a flex `gap`/padding on the track),
// because any asymmetric gap/padding shifts the loop point off -50% and creates
// a visible stutter every cycle. Uniform per-item margin keeps both halves
// perfectly periodic, so -50% lands exactly on the repeat.
const LogoMarquee = () => {
  const { t } = useT();
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="py-10" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container-x">
        <p className="text-xs uppercase tracking-[0.2em] muted mb-6 text-center">{t(LOGOS_TEXT.label)}</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-extrabold whitespace-nowrap select-none ms-12 md:ms-16"
              style={{ color: "var(--text-muted)", opacity: 0.55 }}
              aria-hidden={i >= LOGOS.length ? "true" : undefined}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
