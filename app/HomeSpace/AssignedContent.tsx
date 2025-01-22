import React from "react";
import { Icons } from "@/icons/icons";
import CardContainer from "./Components/CardContainer";
import ActionButton from "./Components/ComponentsAssignedContent/ActionButton";
import TaskHeader from "./Components/ComponentsAssignedContent/TaskHeader";
import SearchBar from "./Components/ComponentsAssignedContent/SearchBar";

const AssignedContent: React.FC = () => {
  return (
    <CardContainer title="Assigned to me" NumberIcons={3} height="576px">
      <div className="h-10 px-[14px] flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ActionButton icon={Icons.LayersIcon} />
          <ActionButton icon={Icons.Forked} />
          <ActionButton icon={Icons.ColumnsIcon} />
        </div>
        <div className="flex items-center gap-1">
          <ActionButton icon={Icons.SortIcon} />
          <ActionButton icon={Icons.CheckCircleIcon} />
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <SearchBar />
          <ActionButton icon={Icons.SettingsIcon} />
        </div>
      </div>
      <div className="h-16 px-[14px] mt-2">
        <div className="flex items-center h-8 gap-1">
          <ActionButton
            icon={Icons.PlayWorkspace}
            sclass="rotate-90"
            onClick={() => console.log("Play")}
          />
          <button className="flex items-center h-6 gap-2 rounded-md px-2 text-xs bg-blue-700 text-white font-semibold">
            <Icons.DotIcon className="text-[12px] text-white" />
            IN PROGRESS
          </button>
          <div className="font-sans px-2 text-xs text-gray-500">5</div>
          <ActionButton icon={Icons.ThreeDotsIcon} />
          <button className="flex items-center h-6 gap-2 rounded-md px-2 text-xs text-gray-500 hover:bg-gray-100 font-semibold">
            <Icons.PlusNew className="text-[14px] text-gray-500" />
            Add Task
          </button>
        </div>
        <TaskHeader name="Name" priority="Priority" dueDate="Due date" />
      </div>

      <div className="w-full h-[370px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
        <div className="text-center font-sans text-base text-gray-400 mt-3">
          Empty
        </div>
      </div>
    </CardContainer>
  );
};

export default AssignedContent;
