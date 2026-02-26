import { NavLink } from "react-router";

function HeaderMenu({ path, text }) {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        isActive ? "text-secondary-0" : "text-text-0"
      }
    >
      <span className="">{text}</span>
    </NavLink>
  );
}

export default HeaderMenu;
