import React, { useEffect } from "react";
import { startSmoothScroll } from "../../utils/smoothScroll";
import Cursor from "./Cursor";
import ScrollRail from "./ScrollRail";

// Site-wide cinematic layer: buttery smooth scroll, scroll progress rail,
// magnetic cursor, film grain and a soft vignette. Purely presentational —
// mount once near the root.
const Experience = () => {
  useEffect(() => {
    startSmoothScroll();
  }, []);

  return (
    <>
      <ScrollRail />
      <Cursor />
      <div className="grain-layer" aria-hidden="true" />
      <div className="vignette-layer" aria-hidden="true" />
    </>
  );
};

export default Experience;
