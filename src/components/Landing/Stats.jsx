import React, { useEffect, useRef, useState } from "react";
import { STATS } from "../../constants/stats";
import { STATS_SECTION } from "../../constants/content";
import { useT } from "../../utils/i18n";

// Animated count-up that triggers once the band scrolls into view.
const Counter = ({ value, suffix }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-gradient-anim tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useT();

  return (
    <section className="py-14 md:py-16" style={{ background: "var(--bg-elevated)", borderBlock: "1px solid var(--border)" }}>
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="muted text-sm mt-2 m-0">{t(stat.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
