import { usetaskFormContext } from '@/context/FormProviders/TaskFormProvider';
import React, { useEffect, useState } from 'react';
import AddAssignee from './AddAssignee';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { useData } from '@/context/DataProvider/DataProvider';
import { useCreateTask } from '@/hooks/useCreateTask';

const AddTaskToTableDownside = ({ status }: { status: any }) => {
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
      console.error('User ID is required but is null.');
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
    <>
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            setFormData((prevState: any) => ({
              ...prevState,
              status,
            }));
          }}
        >
          + Add Task
        </button>
      ) : (
        <div className="mb-4 flex gap-3">
          <input
            type="text"
            value={formData.taskName}
            onChange={(e) =>
              setFormData((prevState: any) => ({
                ...prevState,
                taskName: e.target.value,
              }))
            }
            placeholder=""
            className="border  w-full"
          />
          <div className="flex">
            <label htmlFor="priority-select">Priority:</label>
            <select
              id="priority-select"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>
          <AddAssignee />
          <button onClick={handleSubmit}>Save</button>
        </div>
      )}
    </>
  );
};

export default AddTaskToTableDownside;
