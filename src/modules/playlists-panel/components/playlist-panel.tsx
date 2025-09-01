import clsx from "clsx";
import { usePlaylists } from "../hooks/use-get-playlists";

import styles from "./playlist-panel.module.css";
import { Link } from "react-router";
import { PlaylistPanelSkeleton } from "./playlist-panel-skeleton";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  if (playlistLists.isLoading) {
    return (
      <div className="flex flex-col gap-5">
        <PlaylistPanelSkeleton />;
      </div>
    );
  }

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
            className={styles["playlist-item"]}
            to={{
              pathname: `/playlists/${playlist._id}`,
              search: `?name=${encodeURIComponent(playlist.name)}`
            }}
            data-test-id="playlist-item"
          >
            <span className="text-white text-2xl" data-test-id="playlist-name">
              {playlist.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
