import { TrackItem } from "../track-item/track-item";
import { TracksData } from "../../api/get-tracks";

type Props = {
  trackLists: TracksData;
};

export const TrackListBody = ({ trackLists }: Props) => {
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
