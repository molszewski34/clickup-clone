"use client";

import React from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { Table } from "../../../home/components/TaskTable/Table";
import { TaskStatus } from "../../../home/types";

const TasksList = () => {
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);

  const tasksInProgress = tasks.filter(
    (task) => task.status === TaskStatus.inProgress
  );
  const tasksTodo = tasks.filter((task) => task.status === TaskStatus.todo);
  const tasksCompleted = tasks.filter(
    (task) => task.status === TaskStatus.completed
  );

  return (
    <div className="flex flex-col gap-4 p-5">
      <Table tasks={tasksCompleted} status={TaskStatus.completed} />
      <Table tasks={tasksInProgress} status={TaskStatus.inProgress} />
      <Table tasks={tasksTodo} status={TaskStatus.todo} />
    </div>
  );
};

export default TasksList;
