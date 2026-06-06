import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const HeadingSection = ({ title }) => {
  const { language } = useLanguageStore();
  const displayTitle = typeof title === "object" ? (title[language] || title.en) : title;
  const titleKey = typeof title === "object" ? title.en : title;
  const titleId = titleKey.toLowerCase().replace(/\s+/g, "-") + "-heading";

  return (
    <div className="text-center mb-10 w-full">
      <h2 className="text-4xl font-semibold leading-[60px] capitalize" id={titleId}>
        {displayTitle}
      </h2>
    </div>
  );
};

export default HeadingSection;
