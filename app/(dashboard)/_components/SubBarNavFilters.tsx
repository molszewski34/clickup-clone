import ButtonVariant2 from "@/components/ButtonVariant2";
import ButtonVariant4 from "@/components/ButtonVariant4";
import FilterButton from "@/components/FilterButton";
import { Icons } from "@/icons/icons";
import React, { useState } from "react";
import FilterInput from "./FilterInput";

type Props = {
  subBarNavHeaderActive: boolean;
};

const SubBarNavFilters = ({ subBarNavHeaderActive }: Props) => {
  const [activeFilterButton, setActiveFilterButton] = useState<string | null>(
    null
  );
  const [closeButtonActive, setCloseButtonActive] = useState(false);
  const [meModeButtonActive, setMeModeButtonActive] = useState(false);
  const [inputText, setInputText] = useState("");
  return (
    <div
      className={` flex h-10 gap-1 items-center bg-darkGray_600 transition-all duration-500 ease-in-out
    ${subBarNavHeaderActive ? "px-12" : "px-4"}`}
    >
      <div className="flex w-full items-center gap-1">
        <FilterButton
          onClick={() => {
            setActiveFilterButton("statusFilter");
          }}
        >
          <Icons.LayersIcon />
          Status
        </FilterButton>
        <FilterButton
          onClick={() => {
            setActiveFilterButton("collapseFilter");
          }}
        >
          <Icons.CollapseIcon className="font-[14px]" />
          Collapse all
        </FilterButton>
        <FilterButton
          onClick={() => {
            setActiveFilterButton("columnsFilter");
          }}
        >
          <Icons.ColumnIcon style={{ strokeWidth: "1px" }} />
          Columns
        </FilterButton>
        <div className="flex-1"></div>
        <FilterButton
          onClick={() => {
            setActiveFilterButton("filterButton");
          }}
        >
          <Icons.FilterIcon />
          Filter
        </FilterButton>

        <div className="relative items-center flex group">
          <FilterButton
            isActive={meModeButtonActive}
            onClick={() => {
              setMeModeButtonActive(true);
            }}
          >
            <Icons.PersonIcon style={{ strokeWidth: "0.5px" }} />
            Me mode
          </FilterButton>
          {meModeButtonActive && (
            <ButtonVariant4
              width="w-[22px]"
              height="h-[22px]"
              minWidth="min-h-[22px]"
              position="absolute"
              right="right-[0.5px]"
              color="text-blue_550 hover:text-blue_400"
              opacity="opacity-0 group-hover:opacity-100"
              onClick={() => setMeModeButtonActive(false)}
            >
              <Icons.CloseIcon style={{ strokeWidth: "0.5px" }} />
            </ButtonVariant4>
          )}
        </div>
        <FilterButton
          isActive={activeFilterButton === "assigneeButton"}
          onClick={() => {
            setActiveFilterButton("assigneeButton");
          }}
        >
          <Icons.UsersIcon className="text-[14px]" />
          Assignee
        </FilterButton>
        <div className="relative items-center flex group">
          <FilterButton
            isActive={closeButtonActive}
            onClick={() => {
              setCloseButtonActive(true);
            }}
          >
            <Icons.CheckIcon />
            Closed
          </FilterButton>
          {closeButtonActive && (
            <ButtonVariant4
              width="w-[22px]"
              height="h-[22px]"
              minWidth="min-h-[22px]"
              position="absolute"
              right="right-[0.5px]"
              color="text-blue_550 hover:text-blue_400"
              opacity="opacity-0 group-hover:opacity-100"
              onClick={() => setCloseButtonActive(false)}
            >
              <Icons.CloseIcon style={{ strokeWidth: "0.5px" }} />
            </ButtonVariant4>
          )}
        </div>
      </div>
      <div className="w-[1px] h-4 mx-2  bg-darkGray_400"></div>
      <div className="relative flex items-center h-6 group w-36">
        <FilterInput
          isActive={inputText !== ""}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <ButtonVariant2
          isActive={activeFilterButton === "dots"}
          onClick={() =>
            setActiveFilterButton((prev) => (prev === "dots" ? "" : "dots"))
          }
          className="absolute right-[2px] w-5 h-5 px-0 py-0 gap-0 flex items-center justify-center"
        >
          <Icons.DotsIcon className="text-gray_400" />
        </ButtonVariant2>
      </div>
    </div>
  );
};

export default SubBarNavFilters;
