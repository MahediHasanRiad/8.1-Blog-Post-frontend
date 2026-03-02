import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAsyncthuck } from "@/Feature/Auth/logout.asyncThuck";
import { UserRoundPen, LayoutDashboard, LogOutIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router";

function ProfileDropdownMenu() {

  const dispatch = useDispatch()


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-primary-0" : "text-black"
            }
          >
            <DropdownMenuItem>
              <UserRoundPen />
              Profile
            </DropdownMenuItem>
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-primary-0" : "text-black"
            }
          >
            <DropdownMenuItem>
              <LayoutDashboard />
              Dashboard
            </DropdownMenuItem>
          </NavLink>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <NavLink
          to={"/"}
          onClick={() => dispatch(logoutAsyncthuck())}
          className={({ isActive }) =>
            isActive ? "text-primary-0" : "text-black"
          }
        >
          <DropdownMenuItem>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdownMenu;
