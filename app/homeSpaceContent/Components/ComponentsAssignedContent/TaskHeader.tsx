import React from "react";
import { Icons } from "@/icons/icons";

interface TaskHeaderProps {
  name: string;
  priority: string;
  dueDate: string;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ name, priority, dueDate }) => (
  <div className="h-8 grid grid-cols-12 border-b border-gray-200">
    <div className="col-span-5 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
      {name}
    </div>
    <div className="col-span-3 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
      {priority}
    </div>
    <div className="col-span-3 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
      {dueDate}
    </div>
    <div className="col-span-1 flex items-center justify-center hover:bg-gray-100">
      <Icons.PlusCircleIcon className="text-[14px] text-gray-500" />
    </div>
  </div>
);

export default TaskHeader;
