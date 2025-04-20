import clsx from "clsx";
import { TrackListBody } from "./track-list-body/track-list-body";
import { HeaderTrackList } from "./track-list-header/track-list-header";

import styles from "./track-list.module.css";

export const TrackList = () => {
  return (
    <div className={clsx(styles.root, "overflow-auto")}>
      <HeaderTrackList />
      <TrackListBody />
    </div>
  );
};
