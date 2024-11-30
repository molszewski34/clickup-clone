import { addSubTask } from '@/app/server-actions/subtasks/addNewSubTask';
import { getSubTasks } from '@/app/server-actions/subtasks/getSubtasks';
import React, { useEffect } from 'react';

const SubTaskSection = ({
  userId,
  selectedWorkspace,
  selectedProject,
  selectedTask,
  setSubTasks,
  newSubTaskName,
  subTaskStatus,
  subTaskDueDate,
  subTaskAssignees,
  subTaskTimeEstimate,
  subTaskPriority,
  subTaskDetails,
  setNewSubTaskName,
  subTasks,
}) => {
  const fetchSubTasks = async () => {
    if (!userId || !selectedWorkspace || !selectedProject || !selectedTask)
      return;
    const fetchedSubTasks = await getSubTasks(
      userId,
      selectedWorkspace,
      selectedProject,
      selectedTask
    );
    setSubTasks(fetchedSubTasks);
  };

  useEffect(() => {
    if (selectedTask) {
      fetchSubTasks();
    }
  }, [selectedTask]);

  const handleAddSubTask = async () => {
    if (!userId || !selectedWorkspace || !selectedProject || !selectedTask)
      return;

    try {
      await addSubTask(
        userId,
        selectedWorkspace,
        selectedProject,
        selectedTask,
        newSubTaskName,
        subTaskStatus,
        subTaskDueDate,
        subTaskAssignees,
        subTaskTimeEstimate,
        subTaskPriority,
        subTaskDetails
      );
      alert(
        `Dodano sub task "${newSubTaskName || 'List'}" do tasku ${selectedTask}`
      );
      setNewSubTaskName('');
    } catch (error) {
      console.error('Błąd podczas dodawania projektu:', error);
    }
  };
  return (
    <div>
      {' '}
      <div className="">
        {selectedTask && (
          <div className="add-project-form">
            <h3>
              Dodaj sub task do projektu o uuid: <b>{selectedTask}</b>
            </h3>
            <input
              type="text"
              placeholder="Nazwa sub tasku"
              value={newSubTaskName}
              onChange={(e) => setNewSubTaskName(e.target.value)}
            />

            <button onClick={handleAddSubTask}>Dodaj sub task</button>
          </div>
        )}
      </div>
      <ul>
        {subTasks.map((subtask: any) => (
          <li key={subtask.id}>
            <strong>{subtask.name}</strong> - {subtask.desc || 'No description'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubTaskSection;
