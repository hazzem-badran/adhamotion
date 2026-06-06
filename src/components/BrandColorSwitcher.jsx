import React, { useEffect, useRef, useState } from "react";
import { BRAND_COLORS, useBrandStore } from "../store/useBrandStore";
import { useT } from "../utils/i18n";

// Floating control to try brand colors live. Lets Hazem preview each accent
// across the whole site and persists the pick to localStorage.
const PaletteIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 21a9 9 0 110-18c4.97 0 9 3.694 9 8.25 0 2.485-2.099 4.5-4.688 4.5H14.25a1.5 1.5 0 00-1.06 2.56 1.5 1.5 0 01-1.19 2.69z"
    />
    <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const BrandColorSwitcher = () => {
  const { t, isAr } = useT();
  const { brand, setBrand } = useBrandStore();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const side = isAr ? "left-5" : "right-5";
  const panelSide = isAr ? "left-0" : "right-0";

  return (
    <div ref={ref} className={`fixed bottom-5 ${side} z-[60]`}>
      {open && (
        <div
          className={`absolute bottom-14 ${panelSide} w-60 p-4 rounded-2xl shadow-2xl`}
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
            {isAr ? "لون البراند" : "Brand color"}
          </p>
          <div className="flex flex-col gap-1.5 max-h-[320px] overflow-y-auto pr-1">
            {BRAND_COLORS.map((c) => {
              const active = c.id === brand;
              return (
                <button
                  key={c.id}
                  onClick={() => setBrand(c.id)}
                  className={`flex items-center gap-3 px-2.5 py-2 rounded-xl transition-colors ${isAr ? "flex-row-reverse text-right" : "text-left"}`}
                  style={{
                    background: active ? "var(--surface-2)" : "transparent",
                    border: active ? "1px solid var(--border)" : "1px solid transparent",
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    style={{ background: c.hex, boxShadow: active ? `0 0 0 2px var(--surface), 0 0 0 4px ${c.hex}` : "none" }}
                  />
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {t(c.label)}
                    </span>
                    <span className="block text-[11px]" style={{ color: "var(--text-muted)" }}>
                      {t(c.story)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "var(--accent)", boxShadow: "0 10px 28px -8px rgba(var(--accent-rgb), 0.7)" }}
        aria-label={isAr ? "تغيير لون البراند" : "Change brand color"}
        title={isAr ? "تغيير لون البراند" : "Change brand color"}
      >
        <PaletteIcon />
      </button>
    </div>
  );
};

export default BrandColorSwitcher;
