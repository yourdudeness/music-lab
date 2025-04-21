import { usePlaylists } from "../hooks/use-get-playlists";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  console.log(playlistLists.data);
  return (
    <div className={`w-71 h-screen bg-black-theme pt-6 pl-8`}>playlist</div>
  );
};
