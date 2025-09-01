import Playlist from "@/modules/playlist/components/playlist";
import clsx from "clsx";
import styles from "./playlist.module.css";

export const PlaylistsPage = () => {
  return (
    <div className={clsx(styles.main)}>
      <div className="flex-1">
        <Playlist />
      </div>
    </div>
  );
};
