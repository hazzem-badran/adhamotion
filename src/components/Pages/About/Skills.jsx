import React from "react";
import SkillItem from "./SkillItem";
import { MY_SKILLS } from "../../../constants/skills";
import { useLanguageStore } from "../../../store/useLanguageStore";

const Skills = () => {
  const { language } = useLanguageStore();

  return (
    <div>
      <h3 className="text-base font-semibold my-5 uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        {language === "ar" ? "المهارات" : "Skills"}
      </h3>
      <span className="flex flex-wrap">
        {MY_SKILLS.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </span>
    </div>
  );
};

export default Skills;
