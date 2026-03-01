import React from "react";

function InputField({
  labelText,
  type = "text",
  setInputValue = '',
  readOnly = false,
  className,
  ...props
}) {
  return (
    <div className="my-2 space-y-2">
      {labelText && <label className="font-semibold">{labelText}</label>}
      <input
        type={type}
        onChange={(e)=> setInputValue(e.target.value)}
        readOnly={readOnly}
        className={`border border-gray-300 rounded w-full p-2 px-4 mt-1 focus:border-primary-0 ${className}`}
        {...props}
      />
    </div>
  );
}

export default InputField;
