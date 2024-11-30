import FilterButton from "@/components/FilterButton";
import { Icons } from "@/icons/icons";
import React, { useState } from "react";

type Props = {
  subBarNavHeaderActive: boolean;
};

const SubBarNavFilters = ({ subBarNavHeaderActive }: Props) => {
  const [activeFilterButton, setActiveFilterButton] = useState<string | null>(
    null
  );
  return (
    <div className="flex h-10 gap-1 items-center bg-darkGray_600">
      <div className="flex items-center gap-1">
        <FilterButton
          isActive={activeFilterButton === "statusFilter"}
          onClick={() => {
            setActiveFilterButton("statusFilter");
          }}
        >
          <Icons.LayersIcon />
          Status
        </FilterButton>
        <FilterButton
          isActive={activeFilterButton === "collapseFilter"}
          onClick={() => {
            setActiveFilterButton("collapseFilter");
          }}
        >
          <Icons.CollapseIcon className="font-[14px]" />
          Collapse all
        </FilterButton>
      </div>
      {/* secend half */}
      <div></div>
    </div>
  );
};

export default SubBarNavFilters;
