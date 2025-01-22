"use client";

import React, { useState } from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { TaskTable } from "@/app/(dashboard)/_components/Task/TaskTable";
import { TaskStatus } from "../../../home/types";
import { Task } from "@/app/server-actions/types";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import { Workspace } from "@/app/server-actions/types";
import { StatusBadge } from "@/app/(dashboard)/_components/Task/StatusBadge";
import ButtonIcon from "@/app/(dashboard)/ui/ButtonIcon";
import { Icons } from "@/icons/icons";
import { Button } from "@/components/Button";

const TasksList = () => {
  const { formData } = useWorkspaceFormContext();
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);
  const [visibleGroups, setVisibleGroups] = useState<TaskStatus[]>([]);

  const handleVisibleGroups = (status: TaskStatus) => {
    if (visibleGroups.includes(status)) {
      setVisibleGroups(visibleGroups.filter((singleVisibleGroup) => singleVisibleGroup !== status));
    } else {
      setVisibleGroups([...visibleGroups, status]);
    }
  };

  const applyFilters = (tasks: Task[], filtersState: Workspace["filtersState"]) => {
    return tasks.filter((task) => {
      // Filter by taskName
      if (
        filtersState?.searchQuery &&
        !task.taskName.toLowerCase().includes(filtersState.searchQuery.toLowerCase())
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
    [TaskStatus.todo]: filteredTasks.filter((task) => task.status === TaskStatus.todo),
    [TaskStatus.inProgress]: filteredTasks.filter((task) => task.status === TaskStatus.inProgress),
    [TaskStatus.completed]: filteredTasks.filter((task) => task.status === TaskStatus.completed),
  };
  const tableOrder = formData.filtersState?.statuses?.includes(TaskStatus.completed)
    ? [TaskStatus.completed, TaskStatus.inProgress, TaskStatus.todo]
    : [TaskStatus.inProgress, TaskStatus.todo];

  return (
    <div className="flex flex-col gap-4 p-5">
      {tableOrder.map((status) => {
        const isGroupVisible = visibleGroups.includes(status);
        return (
          <div key={status}>
            <div className="flex flex-row items-center gap-3 text-gray-500">
              <ButtonIcon
                icon={isGroupVisible ? <Icons.IoMdArrowDropdown /> : <Icons.IoMdArrowDropright />}
                onClick={() => handleVisibleGroups(status)}
                className="flex items-center justify-center w-5 h-5 hover:bg-gray-200 rounded"></ButtonIcon>
              <StatusBadge taskStatus={status} />
              <p className="text-xs font-semibold">{tasksGroupedByStatus[status].length}</p>
              <Button
                color="gray"
                className="px-0.5 gap-[8px] rounded-md text-xs font-semibold hover:bg-gray-100 border-transparent">
                <div className="flex flex-row items-center gap-1 text-gray-500">
                  <Icons.PlusIco size={14} />
                  Add Task
                </div>
              </Button>
            </div>
            {isGroupVisible && (
              <TaskTable tasks={tasksGroupedByStatus[status]} status={status as TaskStatus} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
