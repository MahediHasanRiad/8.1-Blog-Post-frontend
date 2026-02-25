import React from "react";

function MenuItem({ text, show, isActive }) {
  return (
    <span
      onClick={show}
      className={`p-2 hover:bg-gray-200 hover:rounded cursor-pointer ${isActive ? "text-secondary-0" : "text-text-0"}`}
    >
      {text}
    </span>
  );
}

export default MenuItem;
