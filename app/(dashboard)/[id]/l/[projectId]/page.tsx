import React from 'react';
import { Table } from '../../home/components/TaskTable/Table';
import { MOCK_TASKS } from '../../home/data';
import { TaskStatus } from '../../home/types';
import TaskList from './components/TasksList';

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  await params;

  return (
    <div className="flex flex-col gap-4">
      <TaskList />
    </div>
  );
}
