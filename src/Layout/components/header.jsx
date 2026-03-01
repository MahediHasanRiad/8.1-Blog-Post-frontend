import { Link } from "react-router";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import ButtonField from "@/Shared/Components/button";

function HeaderSection({ handleMenuButton, isSidebarOpen }) {
  // check user
  const { user } = useSelector((state) => state.auth);

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
            <Link to={"/"} className="font-semibold text-md">
              RIAD
            </Link>
          </div>
        </section>
      </section>

      {/* profile section  */}
      <section className="flex items-center gap-4">
        {user ? (
          <ProfileDropdownMenu />
        ) : (
          <Link to={"/login"}>
            <ButtonField text="Login" />
          </Link>
        )}
      </section>
    </nav>
  );
}

export default HeaderSection;
