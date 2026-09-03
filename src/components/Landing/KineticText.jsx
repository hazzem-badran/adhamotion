import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Splits text into words, each masked in its own overflow-hidden box, and
// animates them up into place with a stagger on mount. Falls back to plain
// text when prefers-reduced-motion is set.
const KineticText = ({ text, tag: Tag = "span", className = "", delay = 0, wordClassName = "", style }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !ref.current) return;
    const words = ref.current.querySelectorAll(".kinetic-word-inner");
    gsap.fromTo(
      words,
      { yPercent: 115, rotate: 4 },
      { yPercent: 0, rotate: 0, duration: 0.9, ease: "power4.out", stagger: 0.045, delay }
    );
  }, [text, delay]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="kinetic-word" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <span className={`kinetic-word-inner ${wordClassName}`} style={{ display: "inline-block" }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default KineticText;
