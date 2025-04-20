import styles from "./track-list-header.module.css";

export const HeaderTrackList = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__item}>Трэк</div>
      <div className={styles.header__item}>Испольнитель</div>
      <div className={styles.header__item}>Альбом</div>
      <div className={styles.header__item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
