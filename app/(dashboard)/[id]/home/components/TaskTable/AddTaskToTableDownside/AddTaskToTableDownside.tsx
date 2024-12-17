import { usetaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import React, { useState } from "react";
import AddAssignee from "./AddAssignee";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useData } from "@/context/DataProvider/DataProvider";
import { useCreateTask } from "@/hooks/useCreateTask";
import { Task } from "@/app/server-actions/types";

const AddTaskToTableDownside = ({ status }: { status: string }) => {
  const { formData, setFormData } = usetaskFormContext();
  const { userId } = useUser();
  const { projectId, workspaceId } = useData();

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      priority: event.target.value,
    });
  };
  const createTaskMutation = useCreateTask();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <tr className="h-8 w-full table-row bg-green-400">
      <td></td>
      <td></td>
      <td key="title" colSpan={7} className="h-8 text-nowrap text-gray-500 border-b"></td>
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            setFormData((prevState: Task) => ({
              ...prevState,
              status,
            }));
          }}>
          + Add Task
        </button>
      ) : (
        <div className="mb-4 flex gap-3">
          <input
            type="text"
            value={formData.taskName}
            onChange={(e) =>
              setFormData((prevState: Task) => ({
                ...prevState,
                taskName: e.target.value,
              }))
            }
            placeholder="New subtask"
            className="outline-none"
          />
          <div className="flex">
            <label htmlFor="priority-select">Priority:</label>
            <select id="priority-select" value={formData.priority} onChange={handleChange}>
              <option value=""></option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>
          {/* <AddAssignee /> */}
          <button onClick={handleSubmit}>Save</button>
        </div>
      )}
    </tr>
  );
};

export default AddTaskToTableDownside;
