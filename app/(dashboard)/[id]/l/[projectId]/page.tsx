import React from 'react';
import TaskList from './components/TasksList';

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  return (
    <div>
      <p>Project ID: {projectId}</p>
      <TaskList projectId={projectId} />
    </div>
  );
}
