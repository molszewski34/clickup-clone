"use client";

import React, { useState } from "react";
import { SelectIconProps, Tooltip } from "../../../../../../../types";
import { AddIcons } from "../../../../../../../AddIcons";
import { SearchInput } from "./SearchInput";
import { IconList } from "./IconList";
import { TooltipPortal } from "./TooltipPortal";

const formatTooltipContent = (text: string) => {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function SelectIcon({
  activeColor,
  onIconSelect,
}: SelectIconProps & { onIconSelect?: (icon: string) => void }) {
  const [activeIcon, setActiveIcon] = useState<string>(
    Object.keys(AddIcons)[0]
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  const filteredIcons = Object.entries(AddIcons).filter(([key]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTooltip = (key: string, event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const { bottom, left, width } = target.getBoundingClientRect();
    setTooltip({
      content: formatTooltipContent(key),
      position: {
        top: bottom + 8,
        left: left + width / 2,
      },
    });
  };

  const handleMouseLeave = () => setTooltip(null);

  const handleIconClick = (key: string) => {
    setActiveIcon(key);
    onIconSelect?.(key);
  };

  return (
    <div className="pt-[10px] border-t border-gray-200">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden">
        <IconList
          icons={filteredIcons}
          activeIcon={activeIcon}
          activeColor={activeColor}
          onIconClick={handleIconClick}
          onTooltipShow={handleTooltip}
          onTooltipHide={handleMouseLeave}
        />
      </div>
      {tooltip && <TooltipPortal tooltip={tooltip} />}
    </div>
  );
}
