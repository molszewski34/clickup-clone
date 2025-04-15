import { EditAssignee } from "@/app/(dashboard)/_components/Task/EditAssignee";
import { UserInitials } from "@/app/(dashboard)/_components/Task/UserInitials";

import { useTaskById } from "@/hooks/useTaskById";
import { Icons } from "@/icons/icons";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Assignees = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task } = useTaskById(taskId);

  const [openUserList, setOpenUserList] = useState(false);

  console.log("task assignees", task?.assignees);
  return (
    <div
      className="flex justify-between gap-1"
      onClick={() => setOpenUserList(true)}
    >
      <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
        <Icons.PersonIcon className=" text-[16px] text-gray-600" />
        Assignees
      </button>
      <div className="flex flex-row items-center relative">
        {task?.assignees && task?.assignees?.length > 0 ? (
          task?.assignees?.map((singleAssignee) => {
            return (
              <UserInitials key={singleAssignee.id} user={singleAssignee} />
            );
          })
        ) : (
          <Skeleton width={120} height={26} borderRadius={4} />
        )}

        {openUserList && (
          <div className="absolute top-10">
            <EditAssignee setOpenUserList={setOpenUserList} />
          </div>
        )}
      </div>
      <button className="px-1 min-h-6 min-w-6 items-center rounded-lg group-hover:flex  hover:bg-gray-100">
        <Icons.CloseIcon className="text-[16px] text-gray-500" />
      </button>
    </div>
  );
};

export default Assignees;
