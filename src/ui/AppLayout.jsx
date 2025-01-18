import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[17rem_2fr] grid-rows-[5rem_1fr]">
      <Sidebar />
      <Outlet />
    </div>
  );
}
