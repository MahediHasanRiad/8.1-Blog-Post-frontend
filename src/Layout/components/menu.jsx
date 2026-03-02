import React from "react";
import MenuItem from "./menu-item";

function LeftSideMenu({ menuLinks }) {

  return (
    <>
      <section className={`flex flex-col w-64 h-screen sticky top-0 border-r border-gray-100 px-4 py-8`}>
        <div className="space-y-2">
          {menuLinks?.map((link) => (
            <MenuItem
              key={link.text}
              path={link.path}
              Icon={link.Icon}
              text={link.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default LeftSideMenu;
