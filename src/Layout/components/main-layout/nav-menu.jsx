import React from "react";
import MenuItem from "./nav-menu-item";
import {
  House,
  Library,
  Users,
  BookText,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

function LeftSideMenu() {
  const menuLinks = [
    { icon: House, text: "Home" },
    { icon: Library, text: "Library" },
    { icon: Users, text: "Profile" },
    { icon: BookText, text: "Stories" },
    { icon: ChartNoAxesColumnIncreasing, text: "Stats" },
  ];

  return (
    <>
      <section className="flex flex-col w-64 h-screen sticky top-0 border-r border-gray-100 px-4 py-8">
        <div className="space-y-2">
          {menuLinks.map((link) => (
            <MenuItem key={link.text} Icon={link.icon} text={link.text} />
          ))}
        </div>
      </section>
    </>
  );
}

export default LeftSideMenu;
