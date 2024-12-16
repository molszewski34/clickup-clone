import React from "react";
import { Table } from "../../home/components/TaskTable/Table";
import { MOCK_TASKS } from "../../home/data";
import { TaskStatus } from "../../home/types";
import ViewsBarContainer from "@/app/(dashboard)/_components/ViewsBarContainer";
import WidgetHeader from "@/app/(dashboard)/_components/WidgetHeader";
import ButtonVariant2 from "@/components/ButtonVariant2";

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  await params;
  const tasksInProgress = MOCK_TASKS.filter(
    (task) => task.status === TaskStatus.inProgress
  );
  const tasksTodo = MOCK_TASKS.filter(
    (task) => task.status === TaskStatus.todo
  );
  const tasksCompleted = MOCK_TASKS.filter(
    (task) => task.status === TaskStatus.completed
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div>
        <WidgetHeader>
          <ButtonVariant2
            isActive={true}
            className={`items-center h-8 font-semibold `}
          >
            Everything
          </ButtonVariant2>
        </WidgetHeader>
        <ViewsBarContainer />
      </div>
      {/* Example for using the Table with filtered tasks */}
      <Table tasks={tasksCompleted} status={TaskStatus.completed} />
      <Table tasks={tasksInProgress} status={TaskStatus.inProgress} />
      <Table tasks={tasksTodo} status={TaskStatus.todo} />
    </div>
  );
}
