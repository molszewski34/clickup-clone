import { TaskStatus } from "@/app/(dashboard)/[id]/home/types";
import { EditStatus } from "@/app/(dashboard)/_components/Task/EditStatus";
import { StatusBadge } from "@/app/(dashboard)/_components/Task/StatusBadge";
import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useTaskById } from "@/hooks/useTaskById";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { Icons } from "@/icons/icons";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Status = () => {
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const params = useParams();
  const taskId = params.taskId as string;
  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate } = useUpdateTask();
  const { data: task, isLoading } = useTaskById(taskId);

  console.log("task status", task?.status);
  return (
    <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1 relative">
      <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
        <Icons.EmptyCircle className=" text-[16px] text-gray-600" />
        Status
      </button>

      <div className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md relative">
        <button onClick={() => setStatusMenuOpen(true)}>
          {isLoading ? (
            <Skeleton width={120} height={26} borderRadius={4} />
          ) : (
            task && <StatusBadge taskStatus={task.status as TaskStatus} />
          )}
        </button>

        <Icons.Play className=" text-[10px] text-white" />

        <button
          className="px-1 min-h-6 min-w-6 border border-gray-200 rounded-lg group hover:border-green-500"
          onClick={() => {
            updateTaskForm("status", TaskStatus.completed);
            mutate();
          }}
        >
          <Icons.Check className="text-[16px] text-gray-200 group-hover:text-green-500" />
        </button>
        {statusMenuOpen && (
          <div className="absolute">
            <EditStatus setStatusMenuOpen={setStatusMenuOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
