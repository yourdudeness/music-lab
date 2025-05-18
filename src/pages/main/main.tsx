import { TrackList } from "../../modules/all-tracks/components/track-list";
import { SearchForm } from "../../shared/components/Search-form/search-form";

export const Main = () => {
  return (
    <div className="flex h-screen flex-col">
      <SearchForm />
      <TrackList />
    </div>
  );
};
