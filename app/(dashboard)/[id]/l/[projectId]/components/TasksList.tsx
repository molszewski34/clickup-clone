"use client";

import React from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";

import { TaskStatus } from "../../../home/types";
import { Task } from "@/app/server-actions/types";
import { TaskTable } from "@/app/(dashboard)/_components/Task/TaskTable";

type FiltersTypes = {
  filters: { taskName: string };
};

const TasksList = ({ filters }: FiltersTypes) => {
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);

  const filterTasksByName = (taskList: Task[]) => {
    const { taskName } = filters;
    return taskList.filter((task) => task.taskName.toLowerCase().includes(taskName.toLowerCase()));
  };

  const tasksInProgress = filterTasksByName(
    tasks.filter((task) => task.status === TaskStatus.inProgress)
  );
  const tasksTodo = filterTasksByName(tasks.filter((task) => task.status === TaskStatus.todo));
  const tasksCompleted = filterTasksByName(
    tasks.filter((task) => task.status === TaskStatus.completed)
  );

  return (
    <div className="flex flex-col gap-4 p-5 overflow-y-auto">
      <TaskTable tasks={tasksCompleted} status={TaskStatus.completed} />
      <TaskTable tasks={tasksInProgress} status={TaskStatus.inProgress} />
      <TaskTable tasks={tasksTodo} status={TaskStatus.todo} />
    </div>
  );
};

export default TasksList;
