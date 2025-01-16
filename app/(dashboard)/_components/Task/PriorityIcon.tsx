import React from "react";
import { TaskPriority } from "../../[id]/home/types";
import { Icons } from "@/icons/icons";

type PriorityProps = {
  taskPriority?: TaskPriority | "";
};

export const Priority = ({ taskPriority }: PriorityProps) => {
  const priority = Object.keys(TaskPriority).find(
    (key) => key === taskPriority?.toLowerCase()
  ) as keyof typeof TaskPriority;
  const priorityColors: Record<keyof typeof TaskPriority, string> = {
    urgent: "text-red-600",
    high: "text-yellow-400",
    normal: "text-blue-600",
    low: "text-gray-400",
    none: "",
  };

  if (!taskPriority) return <Icons.RiFlag2Line color="gray" size={17} className="mx-1" />;
  return (
    <div className={`${priorityColors[priority]}`}>
      <Icons.RiFlag2Fill size={15} className={`mx-1`} />
    </div>
  );
};
