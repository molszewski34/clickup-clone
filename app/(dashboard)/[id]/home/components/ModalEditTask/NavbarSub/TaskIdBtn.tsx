import { useParams } from "next/navigation";
import React from "react";

const TaskIdBtn = () => {
  const params = useParams();
  const taskId = params.taskId as string;
  return (
    <button className="flex gap-2 items-center bg-grayv4  text-xs text-gray-300  px-2 py-[3px] rounded-r border border-l-0 border-gray-500 hover:bg-[#3c414a]">
      {taskId}
    </button>
  );
};

export default TaskIdBtn;
