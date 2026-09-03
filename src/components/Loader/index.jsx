import React from "react";

// On-brand loading screen shown while the Home bundle streams in.
const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[1000] gap-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <span
          className="absolute inset-0 rounded-full spin-slow"
          style={{ border: "2px solid transparent", borderTopColor: "var(--accent)", borderRightColor: "var(--accent)", animationDuration: "1.1s" }}
        />
        <span className="font-extrabold text-lg" style={{ color: "var(--text)" }}>أ</span>
      </div>
      <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
        ادهموشن
      </p>
    </div>
  );
};

export default Loader;
