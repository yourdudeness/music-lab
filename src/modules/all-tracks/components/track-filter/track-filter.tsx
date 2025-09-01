import styles from "./track-filter.module.css";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { TracksData } from "../../api/get-tracks";
import { TrackFilterItem } from "./track-filter-item";

interface FilterItem {
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

export interface FilterGroup {
  title: string;
  key: string;
  items: FilterItem[];
}

type Props = {
  filtersList: TracksData;
  loading?: boolean;
};

export const TrackFilter = ({ filtersList, loading }: Props) => {
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([
    { title: "Исполнителю", key: "authors", items: [] },
    { title: "Году выпуска", key: "years", items: [] },
    { title: "Жанру", key: "genres", items: [] }
  ]);
  useEffect(() => {
    const uniqueValues = filtersList.reduce(
      (acc, track) => {
        acc.authors.add(track.author);
        acc.genres.add(track.genre);
        acc.years.add(new Date(track.releaseDate).getFullYear());
        return acc;
      },
      { authors: new Set(), genres: new Set(), years: new Set() }
    );

    setFilterGroups([
      {
        title: "Исполнителю",
        key: "authors",
        items: [...uniqueValues.authors].map((item) => ({
          value: String(item).trim().toLowerCase().replace(/\s+/g, "-"),
          label: String(item),
          checked: false
        }))
      },
      {
        title: "Жанру",
        key: "genres",
        items: [...uniqueValues.genres].map((item) => ({
          value: String(item).trim().toLowerCase().replace(/\s+/g, "-"),
          label: String(item),
          checked: false
        }))
      },
      {
        title: "Году выпуска",
        key: "years",
        items: [...uniqueValues.years].map((item) => ({
          value: String(item),
          label: String(item),
          checked: false
        }))
      }
    ]);
  }, [filtersList]);

  return (
    <div
      className={clsx(
        styles["filters-list"],
        "flex mt-13 mb-13 gap-2 align-middle items-center"
      )}
    >
      <h4 className={clsx(styles.headline, "text-base align-middle")}>
        Искать по:
      </h4>
      {filterGroups.map((group) => (
        <TrackFilterItem
          key={group.key}
          filterItem={group}
          setFilterGroups={setFilterGroups}
        />
      ))}
    </div>
  );
};
