import React from "react";

const Timeline = React.memo(({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute h-full w-px top-0 left-1.5 bg-primary-500"></div>
      {children}
    </div>
  );
});

const TimelineItem = React.memo(({ date, title, description, link, isLast = false }) => {
  return (
    <div className={`relative pl-10 ${!isLast ? 'mb-8' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute w-3 h-3 bg-primary-500 rounded-full left-0 top-4"></div>
      
      <div className="block text-primary-500 font-normal mb-2.5 text-base">
        {date}
      </div>
      
      <h4 className="text-lg capitalize mb-2.5 m-0">
        {title}
      </h4>
      
      <p className="text-gray-600 leading-relaxed mb-3">
        {description}
      </p>
      
      {link && (
        <a 
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
        >
          {link.text} →
        </a>
      )}
    </div>
  );
});

Timeline.Item = TimelineItem;
Timeline.displayName = 'Timeline';
TimelineItem.displayName = 'TimelineItem';

export default Timeline;