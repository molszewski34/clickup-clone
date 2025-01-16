import { FlatTaskElement, TaskElement } from "../types";

export const flattenTableData = (
  data: TaskElement[],
  parentId: string | null,
  depth: number
): FlatTaskElement[] => {
  return data.flatMap((singleTask) => [
    {
      id: singleTask.id,
      level: depth,
      parentId: parentId,
      title: singleTask.title,
      status: singleTask.status,
      assignees: singleTask.assignees,
      dueDate: singleTask.dueDate,
      priority: singleTask.priority,
      numberOfSubtasks: singleTask.subtasks.length,
    },
    ...flattenTableData(singleTask.subtasks, singleTask.id, depth + 1),
  ]);
};
