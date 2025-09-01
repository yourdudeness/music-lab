import clsx from "clsx";
import { TrackList } from "../../modules/all-tracks/components/track-list";
import styles from "./main.module.css";
import { PlaylistPanel } from "../../modules/playlists-panel/components/playlist-panel";

export const Main = () => {
  return (
    <>
      <div className={clsx("flex flex-col", styles.main)}>
        <h1 className="text-6xl mt-8">Треки</h1>
        <TrackList />
      </div>
      <PlaylistPanel />
    </>
  );
};
