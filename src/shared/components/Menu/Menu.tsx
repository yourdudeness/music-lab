import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
import { Button } from "@/shared/components/Button";
import { useState } from "react";

type Props = {
  triggerName?: string;
  menuItems?: string[];
};

export const Menu = ({ triggerName, menuItems, ...props }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{triggerName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuItems && menuItems.length > 0 && (
          <>
            {menuItems.map((item, index) => (
              <DropdownMenuCheckboxItem key={index}>
                {item}
              </DropdownMenuCheckboxItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
