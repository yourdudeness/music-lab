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
        <h1 className="text-6xl mt-8">Треки</h1>
        <TrackList />
      </div>
      <PlaylistPanel />
    </>
  );
};
