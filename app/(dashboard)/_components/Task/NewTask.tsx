import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useData } from "@/context/DataProvider/DataProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskStatus } from "../../[id]/home/types";
import { Task } from "@/app/server-actions/types";

type NewTaskProps = {
  status?: TaskStatus;
};

export const NewTask = ({ status }: NewTaskProps) => {
  const { formData, setFormData } = useTaskFormContext();
  const { userId } = useUser();
  const { projectId, workspaceId } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const createTaskMutation = useCreateTask();

  const clearedTaskForm: Task = {
    id: "",
    projectId: "",
    taskName: "",
    assignees: [],
    timeEstimate: "",
    priority: "",
    details: "",
    status: TaskStatus.todo,
  };

  useEffect(() => {
    setFormData(clearedTaskForm);
  }, [isOpen]);

  const onSubmit: SubmitHandler<Task> = async () => {
    if (!userId) {
      console.error("User ID is required but is null.");
      return;
    }
    createTaskMutation.mutate({
      formData,
      userId,
      workspaceId,
      projectId,
    });
    setFormData(clearedTaskForm);
    setIsOpen(false);
  };
  const { register, handleSubmit } = useForm<Task>();

  return (
    <tr className="h-8 w-full table-row">
      <td key="title" colSpan={7} className="h-8 text-nowrap text-gray-500">
        {isOpen ? (
          <form
            className="flex flex-row w-full justify-between gap-2 h-8 text-sm items-center"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("taskName")}
              id="taskName"
              type="text"
              value={formData.taskName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  taskName: e.target.value,
                  status: status || TaskStatus.todo,
                })
              }
              placeholder="New task name"
              className="outline-none"></input>
            <div className="flex flex-row pr-32 gap-2">
              <Button
                color="gray"
                className="text-xs font-semibold"
                onClick={() => {
                  setIsOpen(false);
                }}>
                Cancel
              </Button>
              <Button color="indigo" className="text-xs font-semibold" type="submit">
                Add task
              </Button>
            </div>
          </form>
        ) : (
          <Button onClick={() => setIsOpen(true)} color="gray" className="h-6 rounded-md text-sm">
            + Add Task
          </Button>
        )}
      </td>
    </tr>
  );
};
