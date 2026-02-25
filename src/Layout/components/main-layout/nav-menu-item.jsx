import React from "react";

function MenuItem({ Icon, text }) {
  return (
    <button className="flex items-center w-full p-2 space-x-3 transition-colors duration-200 rounded-md group hover:bg-secondary-0/10 cursor-pointer">
      {/* Icon Wrapper */}
      <span className="flex items-center justify-center text-text-0 group-hover:text-secondary-0 group-hover:scale-110 transition-transform">
        <Icon size={16} aria-hidden="true" />
      </span>

      {/* Text Label */}
      <span className="text-sm font-medium text-text-0 group-hover:text-secondary-0">
        {text}
      </span>
    </button>
  );
}

export default MenuItem;
