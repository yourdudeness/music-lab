import { usePlaylists } from "../hooks/use-get-playlists";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  console.log(playlistLists.data, "playlist");
  return (
    <div className={`max-w-xs w-full h-screen bg-black-theme`}>playlist</div>
  );
};
