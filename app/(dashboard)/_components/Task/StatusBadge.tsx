import React from "react";
import { TaskStatus } from "../../[id]/home/types";
import { StatusIcon } from "./StatusIcon";

type StatusBadgeProps = {
  taskStatus: TaskStatus;
};

export const StatusBadge = ({ taskStatus }: StatusBadgeProps) => {
  const status = Object.entries(TaskStatus).find(
    ([, value]) => value === taskStatus
  )?.[0] as keyof typeof TaskStatus;
  const statusColors: Record<keyof typeof TaskStatus, string> = {
    todo: "bg-gray-200 text-gray-700",
    inProgress: "bg-blue-600 text-white",
    completed: "bg-green-700 text-white",
  };
  return (
    <div
      className={`${statusColors[status]} flex flex-row gap-1 w-fit uppercase text-xs text-nowrap font-semibold p-1 pr-2 rounded-md items-center`}>
      <StatusIcon taskStatus={taskStatus} color={status !== "todo" ? "white" : undefined} />
      {taskStatus}
    </div>
  );
};
