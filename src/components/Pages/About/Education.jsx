import React from "react";
import TimelineItem from "./TimelineItem";
import { EDUCATION } from "../../../constants/education";
import { Fragment } from "react";

const Education = () => {
  return (
    <div 
      className="tab-content active" 
      id="education-tab" 
      name="educationTab"
    >
      <div 
        className="timeline"
        id="education-timeline"
        name="educationTimeline"
      >
        {EDUCATION.map((item, index) => (
          <Fragment key={index}>
            <TimelineItem
              date={item.date}
              title={item.title}
              institution={item.institution}
              description={item.description}
              link={item.link.href}
              linkText={item.link.text}
              index={index}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Education;
