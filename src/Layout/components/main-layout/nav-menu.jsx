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
    { path: '', icon: House, text: "Home" },
    { path: 'library', icon: Library, text: "Library" },
    { path: 'profile', icon: Users, text: "Profile" },
    { path: 'stories', icon: BookText, text: "Stories" },
    { path: 'stats', icon: ChartNoAxesColumnIncreasing, text: "Stats" },
  ];

  return (
    <>
      <section className="flex flex-col w-64 h-screen sticky top-0 border-r border-gray-100 px-4 py-8">
        <div className="space-y-2">
          {menuLinks.map((link) => (
            <MenuItem key={link.text} path={link.path} Icon={link.icon} text={link.text} />
          ))}
        </div>
      </section>
    </>
  );
}

export default LeftSideMenu;
