import clsx from "clsx";
import { usePlaylists } from "../hooks/use-get-playlists";

import styles from "./playlist-panel.module.css";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  return (
    <div
      className={clsx(
        `max-w-xs w-full pr-22 flex flex-col justify-center`,
        styles["playlist-wrap"]
      )}
    >
      <div className="flex flex-col gap-5">
        {playlistLists.data?.map((playlist) => (
          <div key={playlist._id} className={clsx(styles["playlist-item"])}>
            <div className="text-white text-2xl">{playlist.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
