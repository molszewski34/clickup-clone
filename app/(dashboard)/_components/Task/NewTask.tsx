import React, { useEffect } from "react";
import { Button } from "@/components/Button";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useData } from "@/context/DataProvider/DataProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskPriority, TaskStatus } from "../../[id]/home/types";
import { Task } from "@/app/server-actions/types";
import { StatusIcon } from "./StatusIcon";
import { Icons } from "@/icons/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { createNewTaskSchema } from "../../schemas/createNewTaskSchema";
import { useUpdateTaskForm } from "../../_hooks/useUpdateTaskForm";

type NewTaskProps = {
  openedNewTask: "top" | "bottom" | "none";
  setOpenedNewTask: (arg: "top" | "bottom" | "none") => void;
  status?: TaskStatus;
  ref?: React.MutableRefObject<null>;
};

export const NewTask = ({ status, openedNewTask, setOpenedNewTask, ref }: NewTaskProps) => {
  const { formData, setFormData } = useTaskFormContext();
  const { userId } = useUser();
  const { projectId, workspaceId } = useData();
  const createTaskMutation = useCreateTask();
  const { updateTaskForm } = useUpdateTaskForm();

  const clearedTaskForm: Task = {
    id: "",
    projectId: "",
    taskName: "",
    assignees: [],
    timeEstimate: "",
    priority: TaskPriority.none,
    details: "",
    status: status || TaskStatus.todo,
    createdAt: null,
    dueDate: null,
  };

  useEffect(() => {
    setFormData(clearedTaskForm);
    setValue("taskName", clearedTaskForm.taskName);
    setValue("status", clearedTaskForm.status);
  }, [openedNewTask]);

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
    setOpenedNewTask("none");
  };
  const { register, handleSubmit, watch, setValue } = useForm<Task>({
    mode: "onSubmit",
    resolver: yupResolver(createNewTaskSchema),
  });

  const taskNameValue = watch("taskName");

  return (
    <tr
      className={`h-8 group w-full table-row border-b ${
        openedNewTask === "none" && "hover:cursor-pointer hover:bg-gray-50"
      }`}
      ref={ref}>
      <>
        <td key="status-icon" className="justify-items-center">
          <div className="relative hover:bg-gray-200 hover:cursor-pointer h-6 w-6 place-content-center rounded-md">
            <StatusIcon taskStatus={status || TaskStatus.todo} />
          </div>
        </td>
        <td key="title" colSpan={4} className="h-8 text-nowrap text-gray-500 ">
          <form
            className="flex flex-row w-full h-8 text-sm items-center"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-9/12 justify-between">
              <div className="flex flex-row">
                <input
                  {...register("taskName", {
                    onChange: (e) => {
                      updateTaskForm("taskName", e.target.value);
                    },
                  })}
                  id="taskName"
                  type="text"
                  value={taskNameValue}
                  placeholder="New task name"
                  className="outline-none bg-transparent"></input>
              </div>
              <div className="flex flex-row gap-2">
                <Button
                  color="gray"
                  className="text-xs font-semibold rounded-[4.5px]"
                  onClick={() => {
                    setOpenedNewTask("none");
                  }}>
                  Cancel
                </Button>
                <Button
                  color="indigo"
                  className="text-xs font-semibold rounded-[4.5px]"
                  type="submit">
                  <div className="flex flex-row items-end gap-1">
                    <p>Save</p>
                    <Icons.BsArrowReturnLeft size={14} />
                  </div>
                </Button>
              </div>
            </div>
          </form>
        </td>
      </>
    </tr>
  );
};
