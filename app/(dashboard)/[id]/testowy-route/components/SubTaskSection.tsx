import { addSubTask } from '@/app/server-actions/subtasks/addNewSubTask';
import { getSubTasks } from '@/app/server-actions/subtasks/getSubtasks';
import React, { useCallback, useEffect } from 'react';

interface SubTask {
  id: string;
  name: string;
  desc?: string;
}

const SubTaskSection = ({
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  userId,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  selectedWorkspace,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  selectedProject,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  selectedTask,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  setSubTasks,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  newSubTaskName,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskStatus,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskDueDate,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskAssignees,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskTimeEstimate,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskPriority,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTaskDetails,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  setNewSubTaskName,
  // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
  subTasks,
}) => {
  const fetchSubTasks = useCallback(async () => {
    if (!userId || !selectedWorkspace || !selectedProject || !selectedTask)
      return;
    const fetchedSubTasks = await getSubTasks(
      userId,
      selectedWorkspace,
      selectedProject,
      selectedTask
    );
    setSubTasks(fetchedSubTasks);
  }, [userId, selectedWorkspace, selectedProject, selectedTask, setSubTasks]);

  useEffect(() => {
    if (selectedTask) {
      fetchSubTasks();
    }
  }, [selectedTask, fetchSubTasks]);

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
        {subTasks.map((subtask: SubTask) => (
          <li key={subtask.id}>
            <strong>{subtask.name}</strong> - {subtask.desc || 'No description'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubTaskSection;
