import clsx from "clsx";
import { TrackList } from "../../modules/all-tracks/components/track-list";
import { SearchForm } from "../../shared/components/Search-form/search-form";
import styles from "./main.module.css";
import { PlaylistPanel } from "../../modules/playlists-panel/components/playlist-panel";

export const Main = () => {
  return (
    <>
      <div className={clsx("flex h-screen flex-col", styles.main)}>
        <SearchForm />
        <TrackList />
      </div>
      <PlaylistPanel />
    </>
  );
};
