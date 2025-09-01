import clsx from "clsx";
import styles from "./track-item.module.css";
import { Skeleton } from "@/shared/components/Skeleton/Skeleton";

type Props = {
  count?: number;
};

export function SkeletonTrackItem({ count = 10 }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div className={styles["track-item"]} key={index}>
          <div className={clsx(styles.track__content, styles.track)}>
            <Skeleton pending>
              <div className={styles.track__icon}></div>
            </Skeleton>
            <span className="ms-3">
              <Skeleton pending>
                Lorem ipsum dolor sit amet consectetur.
              </Skeleton>
            </span>
          </div>
          <div className={clsx(styles.track__content, "author")}>
            <Skeleton pending>
              <span className={styles.track__text}>Lorem, ipsum dolor.</span>
            </Skeleton>
          </div>
          <div className={clsx(styles.track__content, "album")}>
            <span className={styles.track__text}>
              <Skeleton pending>Lorem, ipsum.</Skeleton>
            </span>
          </div>
          <div className={clsx(styles.track__content, "duration")}>
            <span className={styles.track__text}>
              <Skeleton pending>1:12</Skeleton>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
