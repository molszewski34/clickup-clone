"use client";

import React from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { TaskTable } from "@/app/(dashboard)/_components/Task/TaskTable";
import { TaskStatus } from "../../../home/types";
import { Task } from "@/app/server-actions/types";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import { Workspace } from "@/app/server-actions/types";
import { StatusBadge } from "@/app/(dashboard)/_components/Task/StatusBadge";
const TasksList = () => {
  const { formData } = useWorkspaceFormContext();
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);

  const applyFilters = (
    tasks: Task[],
    filtersState: Workspace["filtersState"]
  ) => {
    return tasks.filter((task) => {
      // Filter by taskName
      if (
        filtersState?.searchQuery &&
        !task.taskName
          .toLowerCase()
          .includes(filtersState.searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filtrer by status
      // if (filtersState?.statuses.length > 0 &&
      //     !filtersState.statuses.includes(task.status)) {
      //   return false;
      // }

      // Filter by user, show only taskassigned to logged user
      // if (filtersState.assignedToMe && !task.assignedUsers.includes(filtersState.userId)) {
      //   return false;
      // }

      // Filter by assigned user to some task, show tasks choosen user
      // if (filtersState.assignedTo.length > 0 &&
      //     !filtersState.assignedTo.some(user => task.assignedUsers.includes(user))) {
      //   return false;
      // }
      return true;
    });
  };
  const filteredTasks = applyFilters(tasks, formData.filtersState);

  const tasksGroupedByStatus = {
    [TaskStatus.todo]: filteredTasks.filter(
      (task) => task.status === TaskStatus.todo
    ),
    [TaskStatus.inProgress]: filteredTasks.filter(
      (task) => task.status === TaskStatus.inProgress
    ),
    [TaskStatus.completed]: filteredTasks.filter(
      (task) => task.status === TaskStatus.completed
    ),
  };
  const tableOrder = formData.filtersState?.statuses?.includes(
    TaskStatus.completed
  )
    ? [TaskStatus.completed, TaskStatus.inProgress, TaskStatus.todo]
    : [TaskStatus.inProgress, TaskStatus.todo];

  return (
    <div className="flex flex-col gap-4 p-5">
      {tableOrder.map((status) => (
        <div key={status}>
          <div>
            <StatusBadge taskStatus={status} />
          </div>
          <TaskTable
            tasks={tasksGroupedByStatus[status]}
            status={status as TaskStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default TasksList;
