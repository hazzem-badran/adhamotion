import React from "react";
import { FINAL_CTA, WHATSAPP } from "../../constants/content";
import { SOCIALS } from "../../constants/socials";
import { useT } from "../../utils/i18n";
import { ArrowIcon, MailIcon, WhatsappIcon } from "./icons";

const EMAIL = "hello@adhamotion.com";

const CtaContact = () => {
  const { t, isAr } = useT();
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(t(WHATSAPP.message))}`;

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
          <div className="mesh-bg" />
          <div className="hero-glow" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto" style={{ color: "var(--text)" }}>
              {t(FINAL_CTA.heading)}
            </h2>
            <p className="mt-4 muted text-lg max-w-xl mx-auto">{t(FINAL_CTA.subtitle)}</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t(FINAL_CTA.cta)}
                <ArrowIcon className={isAr ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <WhatsappIcon className="w-4 h-4" />
                {t(WHATSAPP.label)}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost">
                <MailIcon className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {SOCIALS.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                    aria-label="social link"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;
