import React from "react";
import { Icons } from "@/icons/icons";
import { TaskStatus } from "../../[id]/home/types";

type StatusIconProps = {
  taskStatus: TaskStatus;
  color?: string;
};

export const StatusIcon = ({ taskStatus, color }: StatusIconProps) => {
  const status = Object.entries(TaskStatus).find(
    ([, value]) => value === taskStatus
  )?.[0] as keyof typeof TaskStatus;
  const statusColors: Record<keyof typeof TaskStatus, string> = {
    todo: "text-gray-400",
    inProgress: "text-blue-600",
    completed: "text-green-700",
  };

  return (
    <div className={`${color ? `text-${color}` : statusColors[status]} justify-items-center`}>
      {taskStatus === TaskStatus.completed ? (
        <Icons.IoCheckmarkCircle size={18} />
      ) : (
        <Icons.IoRadioButtonOn size={18} />
      )}
    </div>
  );
};
