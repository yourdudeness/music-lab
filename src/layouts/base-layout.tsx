import { Outlet } from "react-router";
import { Sidebar } from "../modules/sidebar/components/Sidebar";
import { PlaylistPanel } from "../modules/playlists-panel/components/playlist-panel";

export const BaseLayout: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Outlet />
      <PlaylistPanel />
    </div>
  );
};
