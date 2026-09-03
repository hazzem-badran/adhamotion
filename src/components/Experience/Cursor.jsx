import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Magnetic dot-and-ring cursor for fine pointers (mouse/trackpad) only.
// Grows over anything interactive (a, button, [data-cursor-hover]).
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const moveDot = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3.out" });
    const moveRing = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e) => {
      moveDot(e.clientX);
      moveDotY(e.clientY);
      moveRing(e.clientX);
      moveRingY(e.clientY);
    };
    const onOver = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHover(true);
    };
    const onOut = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHover(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hover ? "is-hover" : ""}`} />
    </>
  );
};

export default Cursor;
