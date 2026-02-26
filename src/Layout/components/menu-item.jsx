import React from "react";
import { NavLink } from "react-router";

function MenuItem({ path, Icon, text }) {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        `flex items-center w-full p-2 space-x-3 transition-colors duration-200 rounded-md group hover:bg-secondary-0/10 cursor-pointer 
      ${isActive ? "text-primary-0" : "text-text-0"}`
      }
    >
      {/* Icon Wrapper */}
      <span className="flex items-center justify-center group-hover:text-secondary-0 group-hover:scale-110 transition-transform">
        <Icon size={16} aria-hidden="true" />
      </span>

      {/* Text Label */}
      <span className="text-sm font-medium group-hover:text-secondary-0">
        {text}
      </span>
    </NavLink>
  );
}

export default MenuItem;
