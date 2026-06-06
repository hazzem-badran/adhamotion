import React from "react";

// Minimal passthrough wrapper kept for backward compatibility with routes.
const Container = ({ children }) => {
  return <div className="relative w-full">{children}</div>;
};

export default Container;
