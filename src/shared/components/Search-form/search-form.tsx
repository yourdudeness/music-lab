import clsx from "clsx";
import styles from "./search-form.module.css";
import { useTracksFilter } from "./hooks/use-tracks-filter";
import { MagnifyingGlass } from "@/shared/icons/magnifying-glass";

export const SearchForm = () => {
  const { setFilters, searchQuery } = useTracksFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: e.target.value });
  };

  return (
    <form className={clsx(styles.root, "flex items-center w-full")}>
      <div className={styles["input-wrapper"]}>
        <MagnifyingGlass className={clsx(styles.icon, "size-4.5")} />
        <input
          type="text"
          placeholder="Поиск"
          className={styles.input}
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
