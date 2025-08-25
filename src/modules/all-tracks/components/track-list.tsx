import clsx from "clsx";
import { TrackListBody } from "./track-list-body/track-list-body";
import { HeaderTrackList } from "./track-list-header/track-list-header";

import styles from "./track-list.module.css";
import { useTracksList } from "../hooks/use-get-tracks";
import { useTracksFilter } from "../../../shared/components/Search-form/hooks/use-tracks-filter";
import { useTracks } from "../../../shared/components/Search-form/hooks/use-get-search-tracks";
import { TrackFilter } from "./track-filter/track-filter";

export const TrackList = () => {
  const trackList = useTracksList();
  const { searchQuery } = useTracksFilter();
  const filteredTracks = useTracks(searchQuery);

  return (
    <>
      <TrackFilter />
      <div className={clsx(styles.root, "max-w-7xl w-full overflow-auto")}>
        <HeaderTrackList />
        <TrackListBody
          trackLists={
            filteredTracks.data ? filteredTracks.data : trackList.data || []
          }
          isPending={trackList.isLoading}
        />
      </div>
    </>
  );
};
