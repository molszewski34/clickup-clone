import ButtonVariant2 from "@/components/ButtonVariant2";
import ButtonVariant4 from "@/components/ButtonVariant4";
import FilterButton from "@/components/FilterButton";
import { Icons } from "@/icons/icons";
import React, { useState } from "react";
import FilterInput from "./FilterInput";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import { Space } from "@/app/server-actions/types";
import { TaskStatus } from "../../[id]/home/types";
type Props = {
  subBarNavHeaderActive: boolean;
  subBarNavFilterActive: boolean;
};

const SubBarNavFilters = ({
  subBarNavHeaderActive,
  subBarNavFilterActive,
}: Props) => {
  const [activeFilterButton, setActiveFilterButton] = useState<string | null>(
    null
  );
  const { formData, setFormData } = useWorkspaceFormContext();
  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: Space) => ({
      ...prevState,
      filtersState: {
        ...prevState.filtersState,
        searchQuery: e.target.value,
      },
    }));
  };
  return (
    <div
      className={` flex gap-1 items-center bg-white transition-all duration-500 ease-in-out overflow-hidden
    ${subBarNavHeaderActive ? "px-12" : "px-4"} ${
      subBarNavFilterActive ? " h-10 " : "h-0 "
    }
      `}
      style={{ container: `filters/inline-size` }}
    >
      <div className="flex w-full items-center gap-1  @lg:flex-col">
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
          <Icons.ColumnsIcon style={{ strokeWidth: "1px" }} />
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
            isActive={formData.filtersState.assignedToMe}
            onClick={() =>
              setFormData((prevState: Space) => ({
                ...prevState,
                filtersState: {
                  ...prevState.filtersState,
                  assignedToMe: true,
                },
              }))
            }
          >
            <Icons.PersonIcon style={{ strokeWidth: "0.5px" }} />
            Me mode
          </FilterButton>
          {formData.filtersState.assignedToMe && (
            <ButtonVariant4
              className={`w-[22px] h-[22px] min-h-[22px] absolute right-[0.5px] bg-blue_150 hover:bg-blue_200 text-blue_300 z-30 opacity-0 group-hover:opacity-100`}
              onClick={() =>
                setFormData((prevState: Space) => ({
                  ...prevState,
                  filtersState: {
                    ...prevState.filtersState,
                    assignedToMe: false,
                  },
                }))
              }
            >
              <Icons.CloseXIcon style={{ strokeWidth: "0.5px" }} />
            </ButtonVariant4>
          )}
        </div>
        <FilterButton
          isActive={activeFilterButton === "assigneeButton"}
          onClick={() => {
            setActiveFilterButton((prev) =>
              prev === "assigneeButton" ? "" : "assigneeButton"
            );
          }}
        >
          <Icons.UsersIcon className="text-[14px]" />
          Assignee
        </FilterButton>
        <div className="relative items-center flex group">
          <FilterButton
            isActive={formData.filtersState?.statuses?.includes(
              TaskStatus.completed
            )}
            onClick={() => {
              setFormData((prevState: Space) => ({
                ...prevState,
                filtersState: {
                  ...prevState.filtersState,
                  statuses: [
                    !prevState.filtersState?.statuses?.includes(
                      TaskStatus.completed
                    ) && TaskStatus.completed,
                  ],
                },
              }));
            }}
          >
            <Icons.CheckIcon />
            Closed
          </FilterButton>
        </div>
      </div>
      <div className="w-[1px] h-4 mx-2  bg-gray_50"></div>
      <div className="relative flex items-center group w-36">
        <FilterInput
          isActive={formData.filtersState.searchQuery !== ""}
          value={formData.filtersState.searchQuery}
          onChange={handleTaskNameChange}
        />

        {formData.filtersState.searchQuery !== "" && (
          <ButtonVariant2
            onClick={() =>
              setFormData((prevState: Space) => ({
                ...prevState,
                filtersState: {
                  ...prevState.filtersState,
                  searchQuery: "",
                },
              }))
            }
            variant={
              formData.filtersState.searchQuery !== " " ? "tertiary" : "primary"
            }
            className="absolute right-6 w-5 h-5 pl-0 pr-0 pt-0 pb-0 gap-0 flex items-center justify-center "
          >
            <Icons.CloseXIcon
              className="text-[14px]"
              style={{ strokeWidth: "0.5px" }}
            />
          </ButtonVariant2>
        )}
        <ButtonVariant2
          isActive={activeFilterButton === "dots"}
          variant={
            formData.filtersState.searchQuery !== "" ? "tertiary" : "primary"
          }
          onClick={() =>
            setActiveFilterButton((prev) => (prev === "dots" ? "" : "dots"))
          }
          className={`absolute right-[2px] w-5 h-5 pl-0 pr-0 pt-0 pb-0 gap-0 flex items-center justify-center 
          `}
        >
          <Icons.DotsIcon className="" />
        </ButtonVariant2>
      </div>
    </div>
  );
};

export default SubBarNavFilters;
