import clsx from "clsx";
import styles from "./track-item.module.css";
import { useEffect, useState } from "react";

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
  const [duration, setDuration] = useState<string | null>(null);

  useEffect(() => {
    if (durationInSeconds) {
      const minutes = Math.floor(durationInSeconds / 60);
      let seconds = String(durationInSeconds % 60);

      if (Number(seconds) < 10) {
        seconds = `0${seconds}`;
      }
      setDuration(() => {
        return `${minutes}:${seconds}`;
      });
    }
  }, []);

  return (
    <div className={styles["track-item"]}>
      <div className={clsx(styles.track__content, styles.track)}>
        <div className={styles.track__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
            />
          </svg>
        </div>
        <span className="ms-3">{name}</span>
      </div>
      <div className={clsx(styles.track__content, "author")}>{author}</div>
      <div className={clsx(styles.track__content, "album")}>{album}</div>
      <div className={clsx(styles.track__content, "duration")}>{duration}</div>
    </div>
  );
};
