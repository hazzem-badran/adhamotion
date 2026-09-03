import React from "react";
import { PlayIcon } from "./icons";

// Circular spinning wordmark seal — each letter placed around a ring with
// plain CSS transforms (more robust across browsers than SVG textPath,
// which breaks when its SVG sits inside an already-rotating ancestor).
const RotatingSeal = ({ size = 108, className = "" }) => {
  const label = "ADHAMOTION • MOTION GRAPHICS • ";
  const chars = label.split("");
  const step = 360 / chars.length;
  const radius = size * 0.42;

  return (
    <div className={`relative float-slow ${className}`} style={{ width: size, height: size }}>
      <div className="spin-slow relative" style={{ width: "100%", height: "100%" }}>
        {chars.map((ch, i) => (
          <span
            key={i}
            aria-hidden={i > 0 ? "true" : undefined}
            className="absolute font-bold"
            style={{
              top: "50%",
              left: "50%",
              fontSize: size * 0.082,
              letterSpacing: "0.5px",
              color: "var(--accent)",
              transformOrigin: "0 0",
              transform: `rotate(${i * step}deg) translate(0, -${radius}px)`,
            }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </div>
      <span
        className="absolute inset-0 m-auto flex items-center justify-center rounded-full"
        style={{ width: size * 0.4, height: size * 0.4, background: "var(--accent)", boxShadow: "0 8px 20px -6px rgba(var(--accent-rgb),0.7)" }}
      >
        <PlayIcon className="w-4 h-4 text-white ms-0.5" />
      </span>
    </div>
  );
};

export default RotatingSeal;
