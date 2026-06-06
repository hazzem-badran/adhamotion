import React from "react";
import { SOCIALS } from "../../../../constants/socials";
import Button from "../../../Button";

const ContactInfo = () => {
  return (
    <div className="w-full">
      <div className="pb-3.5">
        <h3 className="text-xl capitalize mb-1.5 font-medium">Email</h3>
        <p className="text-base font-light  leading-relaxed">hazemaqbadran@gmail.com</p>
      </div>
      
      <div className="pb-3.5">
        <h3 className="text-xl capitalize mb-1.5 font-medium">Phone</h3>
        <p className="text-base font-light  leading-relaxed">+970592083208</p>
      </div>
      
      <div className="pb-3.5">
        <h3 className="text-xl capitalize mb-1.5 font-medium">My Socials</h3>
        <div className="pt-2.5">
          {SOCIALS.map(({ icon: IconComponent, url }, i) => (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 bg-tertiary-50 
                         border border-white text-primary-500 rounded-full mr-1 mt-1.5 
                         transition-all duration-300 hover:text-white hover:bg-primary-500"
            >
              <IconComponent />
            </a>
          ))}
        </div>
      </div>
      
      {/* <Button stylee="btn__secondary">
        See My CV
      </Button> */}
    </div>
  );
};

export default ContactInfo;
