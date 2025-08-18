import Playlist from "@/modules/playlist/components/playlist";

export const PlaylistsPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <h1>Playlists</h1>
        <Playlist />
      </div>
    </div>
  );
};
