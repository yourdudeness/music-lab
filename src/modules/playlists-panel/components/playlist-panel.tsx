import clsx from "clsx";
import { usePlaylists } from "../hooks/use-get-playlists";

import styles from "./playlist-panel.module.css";
import { useAuth } from "../../../contexts/use-auth";

export const PlaylistPanel = () => {
  const playlistLists = usePlaylists();

  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  console.log(playlistLists.data, "playlist");
  return (
    <div
      className={`max-w-xs w-full h-screen bg-black-theme pr-22 flex flex-col pt-6 `}
    >
      <div>
        <button
          onClick={handleSignOut}
          className={clsx(styles["btn-sign-out"])}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </button>
      </div>
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
