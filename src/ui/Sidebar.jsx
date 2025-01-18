import { ClipboardList, Files, Users } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navigations = [
  { name: "Users", icon: Users, address: "/users" },
  { name: "Projects", icon: Files, address: "/projects" },
  { name: "Tasks", icon: ClipboardList, address: "/tasks" },
];
export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="row-span-2 drop-shadow-lg">
      <Logo />

      <div className="flex flex-col gap-2 px-0.5 py-6">
        {navigations.map((n, index) => (
          <NavLink
            to={n.address}
            key={n.name}
            className={`flex items-center gap-3 rounded-md px-6 py-2 text-xl text-slate-600 ${
              pathname === n.address
                ? "border-s-4 border-s-indigo-500 !text-indigo-500"
                : ""
            }`}
          >
            <n.icon className="h-6 w-6" />
            <span>{n.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
