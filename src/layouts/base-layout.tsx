import { Outlet } from "react-router";
import { Sidebar } from "../modules/sidebar/components/Sidebar";

export const BaseLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
