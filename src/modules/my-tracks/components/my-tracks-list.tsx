import { HeaderTrackList } from "@/modules/all-tracks/components/track-list-header/track-list-header";
import { TrackListBody } from "@/modules/all-tracks/components/track-list-body/track-list-body";

const MyTracksList = () => {
  return (
    <>
      <h2 className="text-6xl mt-8 mb-8" data-test-id="playlist-title">
        Мои треки
      </h2>
      <HeaderTrackList />
      <TrackListBody trackLists={[]} />
    </>
  );
};

export default MyTracksList;
