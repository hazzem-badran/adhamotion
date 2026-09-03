import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Thin progress rail pinned to the very top, scaled by scroll position.
const ScrollRail = () => {
  const ref = useRef(null);

  useEffect(() => {
    const setProgress = gsap.quickTo(ref.current, "scaleX", { duration: 0.15, ease: "power1.out" });
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      setProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="scroll-rail" />;
};

export default ScrollRail;
