import React from "react";

function InputField({
  labelText,
  type = "text",
  placeholder,
  value,
  className,
  ...props
}) {
  return (
    <div>
      {labelText && <label htmlFor={value}>{labelText}</label>}
      <input
        id={value}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border border-gray-300 rounded w-full m-2 p-2 px-4 focus:border-primary-0 ${className}`}
        {...props}
      />
    </div>
  );
}

export default InputField;
