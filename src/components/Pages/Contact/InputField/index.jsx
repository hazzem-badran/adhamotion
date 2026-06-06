import React from "react";
import MsgError from "../../About/MsgError";

const InputField = ({ type = "text", name, placeholder, error }) => {
  const isTextArea = type === "textarea";
  
  const inputClasses = `
    block w-full h-12 rounded-full border-none font-inherit font-normal text-base 
    bg-white/25 px-5 text-text-primary border border-transparent 
    transition-colors duration-300 placeholder:text-text-primary/80 placeholder:font-normal
    focus:outline-none focus:border-primary-500
    ${isTextArea ? 'h-28 pt-4 rounded-3xl resize-none' : ''}
  `;

  return (
    <div className="w-full mb-7">
      {isTextArea ? (
        <textarea
          className={inputClasses}
          name={name}
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          name={name}
          required
        />
      )}
      {error && <MsgError>{error}</MsgError>}
    </div>
  );
};

export default InputField;
