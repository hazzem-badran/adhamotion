import React from "react";

const TimelineItem = ({
  title,
  date,
  institution,
  description,
  link,
  linkText,
  link2,
  linkText2,
  index,
}) => {
  return (
    <div 
      className="timeline-item"
      id={`timeline-item-${index}`}
      name={`timelineItem${index}`}
    >
      <span 
        className="date"
        id={`timeline-date-${index}`}
        name={`timelineDate${index}`}
      >
        {date}
      </span>
      <h4 
        id={`timeline-title-${index}`}
        name={`timelineTitle${index}`}
      >
        {title}
        {institution && (
          <span 
            id={`timeline-institution-${index}`}
            name={`timelineInstitution${index}`}
          >
            {" "}– {institution}
          </span>
        )}
      </h4>
      <p 
        id={`timeline-description-${index}`}
        name={`timelineDescription${index}`}
        className="pb-2 "
      >
        {description}
      </p>
      <a 
        href={link} 
        target="_blank" 
        className="text-blue-600 underline"
        id={`timeline-link-${index}`}
        name={`timelineLink${index}`}
      >
        {linkText}
      </a>
      {link2 && (
        <a 
          href={link2} 
          target="_blank" 
          className="text-blue-600 underline "
          id={`timeline-link2-${index}`}
          name={`timelineLink2${index}`}
        >
          {linkText2}
        </a>
      )}
    </div>
  );
};

export default TimelineItem;
