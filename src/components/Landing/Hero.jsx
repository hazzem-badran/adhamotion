import React from "react";
import { HERO, TRUST } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { ArrowIcon } from "./icons";
import KineticText from "./KineticText";
import RotatingSeal from "./RotatingSeal";
import Magnetic from "../Experience/Magnetic";
import { scrollToTarget as scrollTo } from "../../utils/smoothScroll";

const Hero = () => {
  const { t, isAr } = useT();
  const title = t(HERO.title);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mesh-bg" />
      <div className="hero-glow" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className={isAr ? "text-right" : "text-left"}>
            <span className="eyebrow mb-5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              {t(HERO.eyebrow)}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-4">
              <KineticText text={title[0]} tag="span" className="block" style={{ color: "var(--text)" }} />
              <KineticText text={title[1]} tag="span" className="block" wordClassName="text-gradient-anim" delay={0.25} />
            </h1>

            <p className="mt-6 text-base md:text-lg muted max-w-xl leading-relaxed mx-0">
              {t(HERO.subtitle)}
            </p>

            <div className={`mt-8 flex flex-wrap gap-3 ${isAr ? "justify-end" : ""}`}>
              <Magnetic strength={0.4}>
                <button onClick={() => scrollTo("contact")} className="btn-primary">
                  {t(HERO.primaryCta)}
                  <ArrowIcon className={isAr ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
                </button>
              </Magnetic>
              <Magnetic strength={0.4}>
                <button onClick={() => scrollTo("work")} className="btn-ghost">
                  {t(HERO.secondaryCta)}
                </button>
              </Magnetic>
            </div>

            <p className="mt-4 text-xs muted">{t(HERO.microcopy)}</p>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] blur-2xl" style={{ background: "var(--accent-soft)" }} />
              <div className="relative surface p-2 rounded-[2rem]">
                {/* Mock portrait — replace with Adham's real photo */}
                <div
                  className="w-64 h-72 md:w-72 md:h-80 rounded-[1.6rem] flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(150deg, var(--accent), color-mix(in srgb, var(--accent) 45%, #06121f))" }}
                >
                  <span className="absolute inset-0 grid-bg opacity-30" />
                  <span className="text-white font-extrabold leading-none" style={{ fontSize: "5.5rem" }}>أ</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 surface px-4 py-3 rounded-xl shadow-lg float-slow"
                style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)" }}
              >
                <p className="text-xs muted m-0">{isAr ? "متاح لمشاريع جديدة" : "Available for new projects"}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2ecc71" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>أدهم</span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 hidden sm:block">
                <RotatingSeal size={104} />
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-[0.2em] muted mb-4 text-center">{t(TRUST.label)}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUST.items.map((item, i) => (
              <span key={i} className="chip">{t(item)}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
