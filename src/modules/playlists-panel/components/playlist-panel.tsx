import clsx from "clsx";
import { usePlaylists } from "../hooks/use-get-playlists";

import styles from "./playlist-panel.module.css";
import { Link } from "react-router";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  console.log("playlistLists", playlistLists.data);

  return (
    <div
      className={clsx(
        `max-w-xs w-full pr-22 flex flex-col justify-center`,
        styles["playlist-wrap"]
      )}
    >
      <div className="flex flex-col gap-5">
        {playlistLists.data?.map((playlist) => (
          <Link
            key={playlist._id}
            className={clsx(styles["playlist-item"])}
            to={{
              pathname: `/playlists/${playlist._id}`,
              search: `?name=${encodeURIComponent(playlist.name)}`
            }}
          >
            <div className="text-white text-2xl">{playlist.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
