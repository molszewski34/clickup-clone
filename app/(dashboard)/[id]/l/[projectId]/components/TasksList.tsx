"use client";

import React from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { Table } from "../../../home/components/TaskTable/Table";
import { TaskStatus } from "../../../home/types";
import { Task } from "@/app/server-actions/types";

type FiltersTypes = {
  filters: { taskName: string };
};

const TasksList = ({ filters }: FiltersTypes) => {
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);

  
  const filterTasksByName = (taskList: Task[]) => {
    const { taskName } = filters;
    return taskList.filter((task) =>
      taskName
        ? task.taskName.toLowerCase().includes(taskName.toLowerCase())
        : true
    );
  };

  // Filtrowanie tasków według statusu i nazwy
  const tasksInProgress = filterTasksByName(
    tasks.filter((task) => task.status === TaskStatus.inProgress)
  );
  const tasksTodo = filterTasksByName(
    tasks.filter((task) => task.status === TaskStatus.todo)
  );
  const tasksCompleted = filterTasksByName(
    tasks.filter((task) => task.status === TaskStatus.completed)
  );

  return (
    <div className="flex flex-col gap-4 p-5">
      COMPLETED TASKS
      <Table tasks={tasksCompleted} status={TaskStatus.completed} />
      IN PROGRES TASKS
      <Table tasks={tasksInProgress} status={TaskStatus.inProgress} />
      TO DO TASKS
      <Table tasks={tasksTodo} status={TaskStatus.todo} />
    </div>
  );
};

export default TasksList;
