import React, { useState } from "react";
import HeaderSection from "./components/main-layout/header";
import LeftSideMenu from "./components/main-layout/nav-menu";
import FooterSection from "./components/main-layout/footer";

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* HEADER: Pass the toggle function */}
      <HeaderSection
        handleMenuButton={handleMenuButton}
        isSidebarOpen={isSidebarOpen}
      />

      <section className="grid grid-cols-5 mx-auto">
        {/* left side --> menu */}
        <section className="hidden md:block col-span-1 border-r border-gray-100">
          <LeftSideMenu />
        </section>
        {/* content site {mid} */}
        <main className="col-span-3 min-h-screen flex-1 w-full px-4 md:px-8 py-6 transition-all duration-300">
          {children}
        </main>

        {/* right side  */}
        <section className="hidden lg:block col-span-1 min-h-screen">
          <h1 className="flex justify-center items-center">Ad's section</h1>
        </section>
      </section>

      {/* menu-bar for mobile */}
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
            <LeftSideMenu />
          </div>
        </div>
      )}

      {/* footer section  */}
      <section>
        <FooterSection />
      </section>
    </section>
  );
}

export default MainLayout;
