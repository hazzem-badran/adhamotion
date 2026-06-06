import React, { useEffect, useState } from "react";
import { NAV, HERO } from "../../constants/content";
import { useT } from "../../utils/i18n";
import ThemeToggle from "../ThemeToggle";
import { MenuIcon, CloseIcon } from "../Icons";

const Navbar = () => {
  const { t, isAr } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "var(--bg-elevated)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="container-x flex items-center justify-between h-[72px]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--accent)" }}>A</span>
          <span style={{ color: "var(--text)" }}>ادهموشن<span className="text-gradient">.</span></span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className="text-sm font-medium muted hover:opacity-100 transition-opacity"
                style={{ opacity: 0.85 }}
              >
                {t(item)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => go("contact")} className="btn-primary !px-5 !py-2 text-sm hidden sm:inline-flex">
            {t(HERO.primaryCta)}
          </button>
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text)" }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container-x pb-5" style={{ backgroundColor: "var(--bg-elevated)" }}>
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full py-3 text-base font-medium ${isAr ? "text-right" : "text-left"}`}
                  style={{ color: "var(--text)" }}
                >
                  {t(item)}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => go("contact")} className="btn-primary w-full mt-2">
                {t(HERO.primaryCta)}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
