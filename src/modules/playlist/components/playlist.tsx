import { useParams, useSearchParams } from "react-router";
import { usePlaylist } from "../hooks/use-get-playlist";
import { HeaderTrackList } from "@/modules/all-tracks/components/track-list-header/track-list-header";
import { TrackListBody } from "@/modules/all-tracks/components/track-list-body/track-list-body";

const Playlist = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const playlistData = usePlaylist(playlistId ? playlistId : "");

  return (
    <>
      <h2 className="text-6xl mt-8 mb-8">{name}</h2>
      <HeaderTrackList />
      <TrackListBody trackLists={playlistData.data?.tracks || []} />
    </>
  );
};

export default Playlist;
