import ProfileDropdownMenu from "./ProfileDropdownMenu";
import { Menu, X } from "lucide-react";

function HeaderSection({ handleMenuButton, isSidebarOpen }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      {/* Munu and Logo --> section  */}
      <section className="flex items-center space-x-6">

        {/* menu button for mobile  */}
        <button onClick={handleMenuButton} className="md:hidden">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {/* logo  */}
        <section className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12">
            <span className="font-semibold text-md">RIAD</span>
          </div>
        </section>
      </section>

      {/* profile section  */}
      <section className="flex items-center gap-4">
        <ProfileDropdownMenu />
      </section>
    </nav>
  );
}

export default HeaderSection;
