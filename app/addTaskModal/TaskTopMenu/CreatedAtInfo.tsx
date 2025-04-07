import { useParams } from "next/navigation";
import React from "react";
import { useTaskById } from "@/hooks/useTaskById";
import { formatFirestoreDate } from "@/db/firebase/lib/formatFirestoreDate";
import Skeleton from "react-loading-skeleton";

const CreatedAtInfo = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task, isLoading, error } = useTaskById(taskId);

  if (isLoading) return <Skeleton width={120} height={16} borderRadius={4} />;
  if (error || !task) return <p>Nie znaleziono taska od danym id</p>;

  const createdAtFormatted = formatFirestoreDate(task.createdAt, "en-US", {
    month: true,
    day: true,
  });

  return (
    <div className="ml-2 font-sans text-gray-500 text-xs">
      Created on {createdAtFormatted}
    </div>
  );
};

export default CreatedAtInfo;
