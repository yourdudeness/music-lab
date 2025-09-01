import { TrackItem } from "../track-item/track-item";
import { TracksData } from "../../api/get-tracks";
import { SkeletonTrackItem } from "../track-item/skeleton-track-item";

type Props = {
  trackLists: TracksData;
  isPending?: boolean;
};

export const TrackListBody = ({ trackLists, isPending }: Props) => {
  if (isPending) {
    return (
      <div className="overflow-auto mt-6">
        <SkeletonTrackItem />;
      </div>
    );
  }

  return (
    <div className="overflow-auto mt-6">
      {trackLists.map((track) => (
        <TrackItem
          key={track._id}
          name={track.name}
          author={track.author}
          album={track.album}
          durationInSeconds={track.durationInSeconds}
        />
      ))}
    </div>
  );
};
