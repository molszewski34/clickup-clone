'use client';

import React from 'react';
import { useTasksQuery } from '@/hooks/useTaskQuery';
import { useData } from '@/context/DataProvider/DataProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { Table } from '../../../home/components/TaskTable/Table';
import { TaskStatus } from '../../../home/types';
import { MOCK_TASKS } from '../../../home/data';

const TasksList = () => {
  const { workspaceId, projectId } = useData();
  const { userId } = useUser();

  console.log('workspaceId', workspaceId);
  console.log('projectId', projectId);
  console.log('userId', userId);
  const { data: tasks = [] } = useTasksQuery(userId, workspaceId, projectId);

  console.log('tasks', tasks);

  const tasksInProgress = tasks.filter(
    (task) => task.status === TaskStatus.inProgress
  );
  const tasksTodo = tasks.filter((task) => task.status === TaskStatus.todo);
  const tasksCompleted = tasks.filter(
    (task) => task.status === TaskStatus.completed
  );

  console.log('tasksCompleted', tasksCompleted);
  console.log('tasksInProgress', tasksInProgress);
  console.log('tasksTodo', tasksTodo);

  return (
    <div className="flex flex-col gap-4">
      <Table tasks={tasks} status={TaskStatus.completed} />
      <Table tasks={tasksInProgress} status={TaskStatus.inProgress} />
      <Table tasks={tasksTodo} status={TaskStatus.todo} />
    </div>
  );
};

export default TasksList;
