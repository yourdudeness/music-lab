import MyTracksList from "@/modules/my-tracks/components/my-tracks-list";

import styles from "./my-tracks.module.css";

export const MyTracks = () => {
  return (
    <div className={styles.main}>
      <div className="flex-1">
        <MyTracksList />
      </div>
    </div>
  );
};
