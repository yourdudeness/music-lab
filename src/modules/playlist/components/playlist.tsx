import { useParams, useSearchParams } from "react-router";
import { usePlaylist } from "../hooks/use-get-playlist";

const Playlist = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const playlistData = usePlaylist(playlistId ? playlistId : "");

  return <div>playlist</div>;
};

export default Playlist;
