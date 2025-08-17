import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/shared/components/DropDownMenu/drop-down-primitivies";

import styles from "./track-filter.module.css";

import { useState } from "react";
import clsx from "clsx";

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

const initialFilterGroups: FilterGroup[] = [
  {
    title: "UI Elements",
    key: "uiElements",
    items: [
      { value: "statusBar", label: "Status Bar", checked: true },
      {
        value: "activityBar",
        label: "Activity Bar",
        checked: false,
        disabled: true
      },
      { value: "panel", label: "Panel", checked: false },
      { value: "sidebar", label: "Sidebar", checked: true }
    ]
  },
  {
    title: "Flavors",
    key: "flavors",
    items: [
      { value: "chocolate", label: "Chocolate", checked: false },
      { value: "strawberry", label: "Strawberry", checked: true },
      { value: "vanilla", label: "Vanilla", checked: false }
    ]
  },
  {
    title: "Categories",
    key: "categories",
    items: [
      { value: "new", label: "New Items", checked: false },
      { value: "popular", label: "Popular", checked: true },
      { value: "featured", label: "Featured", checked: false }
    ]
  }
];

export const TrackFilter = () => {
  const [filterGroups, setFilterGroups] =
    useState<FilterGroup[]>(initialFilterGroups);

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
