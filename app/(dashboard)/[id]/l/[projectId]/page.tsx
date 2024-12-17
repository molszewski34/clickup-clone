import React from "react";
import TaskList from "./components/TasksList";

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
  await params;

  return (
    <div className="flex flex-col gap-4">
      <TaskList />
    </div>
  );
}
