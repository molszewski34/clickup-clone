'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/app/server-actions/task/getTasks';
import { useData } from '@/context/DataProvider/DataProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';

interface Task {
  id: string;
  name?: string;
  userId: string;
}

const TaskList = ({ projectId }: { projectId: string }) => {
  const { workspaceId } = useData();
  const { userId } = useUser();

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tasks', projectId],
    queryFn: () => getTasks(userId, workspaceId, projectId),
    enabled: !!projectId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading tasks</div>;
  }

  if (!tasks) {
    return <div>No tasks available.</div>;
  }

  return (
    <ul>
      {tasks.length > 0 ? (
        // @ts-expect-error nie wiem jak rozwiązać ten problem typowania
        tasks.map((task: Task) => <li key={task.id}>{task.name}</li>)
      ) : (
        <li>No tasks found for this project</li>
      )}
    </ul>
  );
};

export default TaskList;
