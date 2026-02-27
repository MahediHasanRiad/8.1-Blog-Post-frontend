import React from "react";

function ButtonField({
  text = "Click Me",
  bg = "bg-secondary-0",
  textColor = "text-white",
  size = "md",
  onClick,
  className = "",
}) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${bg} 
        ${textColor} 
        ${sizeClasses[size] || sizeClasses.md} 
        cursor-pointer
        font-medium rounded-lg transition-all 
        hover:opacity-90 active:scale-95 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default ButtonField;
