import { ClockIcon } from "@/shared/icons/clock";
import styles from "./track-list-header.module.css";

export const HeaderTrackList = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-item"]}>Трэк</div>
      <div className={styles["header-item"]}>Испольнитель</div>
      <div className={styles["header-item"]}>Альбом</div>
      <div className={styles["header-item"]}>
        <ClockIcon />
      </div>
    </div>
  );
};
