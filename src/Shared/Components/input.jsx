import React from "react";

function InputField({
  labelText,
  type = "text",
  placeholder,
  setInputValue = '',
  value,
  readOnly = false,
  className,
  ...props
}) {
  return (
    <div>
      {labelText && <label htmlFor={value} className="font-semibold">{labelText}</label>}
      <input
        id={value}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e)=> setInputValue(e.target.value)}
        readOnly={readOnly}
        className={`border border-gray-300 rounded w-full p-2 px-4 focus:border-primary-0 ${className}`}
        {...props}
      />
    </div>
  );
}

export default InputField;
