import { EditPriority } from "@/app/(dashboard)/_components/Task/EditPriority";
import { Priority } from "@/app/(dashboard)/_components/Task/PriorityIcon";
import { useTaskById } from "@/hooks/useTaskById";
import { Icons } from "@/icons/icons";
import { useParams } from "next/navigation";

import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const TaskPriority = () => {
  const [openPrioritySelection, setOpenPrioritySelection] = useState(false);
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task, isLoading } = useTaskById(taskId);
  return (
    <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
      <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
        <Icons.FlagIcon className=" text-[16px] text-gray-600" />
        TaskPriority
      </button>
      <div
        className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md"
        onClick={() => setOpenPrioritySelection(true)}
      >
        <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded relative">
          {isLoading ? (
            <Skeleton width={120} height={26} borderRadius={4} />
          ) : (
            <div className="flex flex-row items-center gap-2 w-32">
              <Priority taskPriority={task?.priority} />
              <p className="text-gray-800 text-sm capitalize">
                {task?.priority}
              </p>
            </div>
          )}

          {openPrioritySelection && (
            <div className="absolute top-10">
              <EditPriority
                setOpenPrioritySelection={setOpenPrioritySelection}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPriority;
