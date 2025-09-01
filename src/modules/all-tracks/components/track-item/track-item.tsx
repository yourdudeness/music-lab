import clsx from "clsx";
import styles from "./track-item.module.css";
import { formatDuration } from "../../utilities/format-deration/format-track-duration";
import MusicalNoteIcon from "@/shared/icons/musical-note";

type Props = {
  name: string;
  author: string;
  album?: string;
  durationInSeconds?: number;
};

export const TrackItem = ({
  name,
  author,
  album,
  durationInSeconds
}: Props) => {
  const duration = formatDuration(durationInSeconds);

  return (
    <div className={styles["track-item"]} data-test-id="track-item">
      <div className={clsx(styles.track__content, styles.track)}>
        <div className={styles.track__icon} data-test-id="track-icon">
          <MusicalNoteIcon />
        </div>
        <span className="ms-3" data-test-id="track-name">
          {name}
        </span>
      </div>
      <div className={clsx(styles.track__content, "author")}>
        <span className={styles.track__text} data-test-id="track-author">
          {author}
        </span>
      </div>
      <div className={clsx(styles.track__content, "album")}>
        <span className={styles.track__text} data-test-id="track-album">
          {album}
        </span>
      </div>
      <div className={clsx(styles.track__content, "duration")}>
        <span className={styles.track__text} data-test-id="track-duration">
          {duration}
        </span>
      </div>
    </div>
  );
};
