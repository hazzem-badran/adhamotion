import React, { useEffect, useState } from "react";
import { SHOWREEL } from "../../constants/content";
import { SHOWREEL_ITEMS } from "../../constants/showreel";
import { useT } from "../../utils/i18n";
import { PlayIcon, CloseIcon } from "./icons";
import Reveal from "./Reveal";

// Portfolio gallery. Three tabs (vertical montage, vertical motion, horizontal
// motion); cards are mock gradient posters that open a lightbox placeholder.
const Showreel = () => {
  const { t } = useT();
  const [tab, setTab] = useState(SHOWREEL.tabs[0].id);
  const [active, setActive] = useState(null); // item open in the lightbox

  const items = SHOWREEL_ITEMS.filter((v) => v.cat === tab);
  const isVertical = items[0]?.ratio === "9/16";

  // Close the lightbox on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="section">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">{t(SHOWREEL.eyebrow)}</span>
          <h2 className="section-title mt-3">{t(SHOWREEL.heading)}</h2>
          <p className="mt-4 muted text-lg">{t(SHOWREEL.subheading)}</p>
        </Reveal>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {SHOWREEL.tabs.map((tb) => {
            const activeTab = tb.id === tab;
            return (
              <button
                key={tb.id}
                onClick={() => setTab(tb.id)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={
                  activeTab
                    ? { background: "var(--accent)", color: "#fff", boxShadow: "0 8px 22px -8px rgba(var(--accent-rgb),0.6)" }
                    : { background: "var(--surface-2)", color: "var(--text-muted)", border: "1px solid var(--border)" }
                }
              >
                {t(tb)}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          className={`grid gap-5 max-w-5xl mx-auto ${
            isVertical ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((v, i) => (
            <Reveal key={v.id} delay={i * 90}>
              <button
                onClick={() => setActive(v)}
                className="group relative w-full overflow-hidden rounded-2xl block"
                style={{ aspectRatio: v.ratio, border: "1px solid var(--border)" }}
                aria-label={t(v.title)}
              >
                {/* Gradient poster (mock) */}
                <span
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: `linear-gradient(150deg, ${v.gradient[0]}, ${v.gradient[1]})` }}
                />
                <span className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)" }} />

                {/* Play button */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.5)" }}>
                    <PlayIcon className="w-6 h-6 text-white ms-0.5" />
                  </span>
                </span>

                {/* Duration */}
                <span className="absolute top-3 end-3 px-2 py-0.5 rounded-md text-[11px] font-semibold text-white"
                      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
                  {v.duration}
                </span>

                {/* Caption */}
                <span className="absolute bottom-0 inset-x-0 p-3 text-right">
                  <span className="block text-white font-bold text-sm">{t(v.title)}</span>
                  <span className="block text-white/70 text-xs mt-0.5">{t(v.tag)}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs muted mt-8">{t(SHOWREEL.note)}</p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-5"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full"
            style={{ maxWidth: active.ratio === "9/16" ? "360px" : "880px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 end-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
              aria-label="إغلاق"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            <div
              className="relative w-full overflow-hidden rounded-2xl flex items-center justify-center"
              style={{ aspectRatio: active.ratio, background: `linear-gradient(150deg, ${active.gradient[0]}, ${active.gradient[1]})` }}
            >
              <div className="text-center px-6">
                <span className="inline-flex w-16 h-16 rounded-full items-center justify-center mb-4"
                      style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.5)" }}>
                  <PlayIcon className="w-7 h-7 text-white ms-0.5" />
                </span>
                <p className="text-white font-bold text-lg m-0">{t(active.title)}</p>
                <p className="text-white/70 text-sm mt-2 m-0">{t(SHOWREEL.modalNote)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showreel;
