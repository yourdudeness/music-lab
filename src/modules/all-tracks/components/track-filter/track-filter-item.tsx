import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/shared/components/DropDownMenu/drop-down-primitivies";
import { useState } from "react";
import { FilterGroup } from "./track-filter";

type Props = {
  filterItem: FilterGroup;
  loading?: boolean;
  setFilterGroups: React.Dispatch<React.SetStateAction<FilterGroup[]>>;
};

export const TrackFilterItem = ({ filterItem, setFilterGroups }: Props) => {
  const [open, setOpen] = useState(false);

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
    <DropdownMenu open={open}>
      <DropdownMenuTrigger onClick={() => setOpen((state) => !state)}>
        {filterItem.title}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-side="left"
        onInteractOutside={() => setOpen(false)}
      >
        {filterItem.items.map((list) => (
          <DropdownMenuCheckboxItem
            checked={list.checked}
            onCheckedChange={handleFilterChange(filterItem.key, list.value)}
            key={list.value}
          >
            {list.value}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
