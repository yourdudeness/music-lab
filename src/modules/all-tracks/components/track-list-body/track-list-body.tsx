import clsx from "clsx";
import { useTracksList } from "../../hooks/use-get-tracks";
import { TrackItem } from "../track-item/track-item";
import styles from "./track-list-body.module.css";

export const TrackListBody = () => {
  const trackList = useTracksList();

  return (
    <div className={clsx(styles.root, "overflow-auto mt-6")}>
      {trackList.data?.map((track) => (
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
