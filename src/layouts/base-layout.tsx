import { Outlet } from "react-router";
import { Sidebar } from "../modules/sidebar/components/Sidebar";
import { Player } from "../modules/player";

export const BaseLayout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <Player />
    </div>
  );
};
