import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/shared/components/DropDownMenu/drop-down-primitivies";

import styles from "./track-filter.module.css";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { TracksData } from "../../api/get-tracks";
import { set } from "react-hook-form";

interface FilterItem {
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

interface FilterGroup {
  title: string;
  key: string;
  items: FilterItem[];
}

type Props = {
  filtersList: TracksData;
};

export const TrackFilter = ({ filtersList }: Props) => {
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>(() => {
    if (!filtersList.length)
      return [
        { title: "Исполнителю", key: "authors", items: [] },
        { title: "Году выпуска", key: "years", items: [] },
        { title: "Жанру", key: "genres", items: [] }
      ];

    const uniqueValues = filtersList.reduce(
      (acc, track) => {
        acc.authors.add(track.author);
        acc.genres.add(track.genre);
        acc.years.add(new Date(track.releaseDate).getFullYear());
        return acc;
      },
      { authors: new Set(), genres: new Set(), years: new Set() }
    );

    return [
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
    ];
  });

  const handleFilterChange =
    (groupKey: string, itemValue: string) => (checked: boolean) => {
      setFilterGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.key === groupKey
            ? {
                ...group,
                items: group.items.map((item) =>
                  item.value === itemValue ? { ...item, checked } : item
                )
              }
            : group
        )
      );
    };

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
        <DropdownMenu key={group.key}>
          <DropdownMenuTrigger>{group.title}</DropdownMenuTrigger>
          <DropdownMenuContent data-side="left">
            {group.items.map((list) => (
              <DropdownMenuCheckboxItem
                checked={list.checked}
                onCheckedChange={handleFilterChange(group.key, list.value)}
                key={list.value}
              >
                {list.value}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};
