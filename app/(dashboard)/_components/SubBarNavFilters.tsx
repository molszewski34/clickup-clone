import ButtonVariant4 from "@/components/ButtonVariant4";
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
  const [closeButtonActive, setCloseButtonActive] = useState(false);
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
        <FilterButton
          isActive={activeFilterButton === "columnsFilter"}
          onClick={() => {
            setActiveFilterButton("columnsFilter");
          }}
        >
          <Icons.ColumnIcon style={{ strokeWidth: "1px" }} />
          Columns
        </FilterButton>
        <FilterButton
          isActive={activeFilterButton === "filterButton"}
          onClick={() => {
            setActiveFilterButton("filterButton");
          }}
        >
          <Icons.FilterIcon />
          Filter
        </FilterButton>
        <FilterButton
          isActive={activeFilterButton === "meModeButton"}
          onClick={() => {
            setActiveFilterButton("meModeButton");
          }}
        >
          <Icons.PersonIcon style={{ strokeWidth: "0.5px" }} />
          Me mode
        </FilterButton>
        <FilterButton
          isActive={activeFilterButton === "assigneeButton"}
          onClick={() => {
            setActiveFilterButton("assigneeButton");
          }}
        >
          <Icons.UsersIcon className="text-[14px]" />
          Assignee
        </FilterButton>
        <FilterButton
          isActive={closeButtonActive}
          onClick={() => {
            setCloseButtonActive(true);
          }}
        >
          <Icons.CheckIcon />
          Closed
          <ButtonVariant4
            width="w-[22px]"
            height="h-[22px]"
            minWidth="min-h-[22px]"
            onClick={() => setCloseButtonActive(false)}
          >
            <Icons.CloseIcon style={{ strokeWidth: "0.5px" }} />
          </ButtonVariant4>
        </FilterButton>
      </div>
      {/* secend half */}
      <div></div>
    </div>
  );
};

export default SubBarNavFilters;
