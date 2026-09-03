import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
let started = false;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Boots one shared Lenis instance wired into GSAP's ticker, so ScrollTrigger
// and Lenis stay perfectly in sync (the standard GSAP+Lenis pairing).
// No-ops on repeat calls and respects prefers-reduced-motion.
export const startSmoothScroll = () => {
  if (started || typeof window === "undefined") return null;
  started = true;

  if (prefersReducedMotion()) return null;

  lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export const getLenis = () => lenis;

// Smoothly scrolls to an element (by id or node), accounting for the fixed
// navbar height. Falls back to native scrollIntoView when Lenis isn't
// running (reduced motion, or before it boots).
export const scrollToTarget = (idOrEl, { offset = -84 } = {}) => {
  const el = typeof idOrEl === "string" ? document.getElementById(idOrEl) : idOrEl;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.3 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
