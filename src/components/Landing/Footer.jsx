import React from "react";
import { FOOTER, NAV } from "../../constants/content";
import { SOCIALS } from "../../constants/socials";
import { useT } from "../../utils/i18n";
import { scrollToTarget } from "../../utils/smoothScroll";

const Footer = () => {
  const { t } = useT();
  const year = new Date().getFullYear();
  const go = (id) => scrollToTarget(id);

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
      <div className="container-x py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-extrabold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--accent)" }}>A</span>
              <span style={{ color: "var(--text)" }}>ادهموشن<span className="text-gradient">.</span></span>
            </div>
            <p className="muted text-sm leading-relaxed m-0">{t(FOOTER.tagline)}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <button key={item.id} onClick={() => go(item.id)} className="text-sm muted hover:opacity-100" style={{ opacity: 0.85 }}>
                {t(item)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;
              return (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                   style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                   aria-label="social link">
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="muted text-xs m-0">© {year} ادهموشن — أدهم. {t(FOOTER.rights)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
