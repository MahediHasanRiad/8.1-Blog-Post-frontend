import React, { useState } from "react";
import HeaderSection from "./components/header";
import LeftSideMenu from "./components/menu";
import { UserPen, Lock, Newspaper } from "lucide-react";

function DashBoardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // all menu items
  const menuLinks = [
    { path: "editProfile", Icon: UserPen, text: "Edit Profile" },
    { path: "changePassword", Icon: Lock, text: "Change Password" },
    { path: "editArticle", Icon: Newspaper, text: "Add Article" },
  ];

  return (
    <section className="w-5/6 mx-auto">
      <HeaderSection
        handleMenuButton={handleMenuButton}
        isSidebarOpen={isSidebarOpen}
      />
      <section className="grid grid-cols-6">
        <section className="col-span-2 hidden md:block">
          <LeftSideMenu menuLinks={menuLinks} />
        </section>
        <section className="col-span-4">{children}</section>
      </section>

      {/* side menu for mobile version  */}
      {isSidebarOpen && (
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 h-full bg-white shadow-lg">
            <LeftSideMenu menuLinks={menuLinks} />
          </div>
        </div>
      )}
    </section>
  );
}

export default DashBoardLayout;
