//K: TODO: Trzeba tutaj dodać dwie funkcjonalności: możliwość wyboru statusu i możliwość przypisania assignee do taska

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { usetaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useData } from "@/context/DataProvider/DataProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskStatus } from "../../types";
import { User } from "@/app/server-actions/user/getUser";

type NewTaskProps = {
  status?: TaskStatus;
};

type NewTaskInput = {
  taskName: string;
  taskStatus: TaskStatus;
  assignees: User[];
};

export const NewTask = ({ status }: NewTaskProps) => {
  const { formData, setFormData } = usetaskFormContext();
  const { userId } = useUser();
  const { projectId, workspaceId } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const createTaskMutation = useCreateTask();

  const onSubmit: SubmitHandler<NewTaskInput> = async () => {
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
    setFormData(() => ({
      id: "",
      taskName: "",
      dueDate: "",
      assignees: [],
      timeEstimate: "",
      priority: "",
      details: "",
      status: null,
    }));
    setIsOpen(false);
  };
  const { register, handleSubmit } = useForm<NewTaskInput>();

  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(filter.toLowerCase())
  );

  {/* Lista tasków */}
  <table>
  <tbody>
    {filteredTasks.map((task, index) => (
      <tr key={index}>
        <td>{task.taskName}</td>
        <td>{task.taskStatus}</td>
        <td>{task.assignees.map((assignee) => assignee.name).join(", ")}</td>
      </tr>
    ))}
  </tbody>
</table>


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
                  status: status || TaskStatus.todo, //K: TODO: jak zaimplementujecie wybór statusu to tu trzeba usunąć, na razie przekazywany jest z props
                })
              }
              placeholder="New task"
              className="outline-none"></input>
            <div className="flex flex-row pr-32 gap-2">
              <Button
                color="gray"
                className="text-xs font-semibold"
                onClick={() => {
                  setIsOpen(false);
                  setFormData(() => ({
                    id: "",
                    taskName: "",
                    dueDate: "",
                    assignees: [],
                    timeEstimate: "",
                    priority: "",
                    details: "",
                  }));
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
