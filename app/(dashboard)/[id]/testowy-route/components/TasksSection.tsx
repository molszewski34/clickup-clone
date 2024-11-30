import { addTask } from '@/app/server-actions/task/addNewTask';
import { getTasks } from '@/app/server-actions/task/getTasks';
import React, { useEffect } from 'react';

const TasksSection = ({
  userId,
  selectedWorkspace,
  selectedProject,
  setTasks,
  newTaskName,
  setNewTaskName,
  setSelectedTask,
  tasks,
  newProjectName,
  newSubTaskName,
  taskStatus,
  taskDueDate,
  taskAssignees,
  taskTimeEstimate,
  taskPriority,
  taskDetails,
}) => {
  const fetchTasks = async () => {
    if (!userId || !selectedWorkspace || !selectedProject) return;
    const fetchedTasks = await getTasks(
      userId,
      selectedWorkspace,
      selectedProject
    );
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    if (selectedWorkspace) {
      fetchTasks();
    }
  }, [selectedProject]);
  const handleAddTask = async () => {
    if (!userId || !selectedWorkspace || !selectedProject) return;

    try {
      await addTask(
        userId,
        selectedWorkspace,
        selectedProject,
        newSubTaskName,
        taskStatus,
        taskDueDate,
        taskAssignees,
        taskTimeEstimate,
        taskPriority,
        taskDetails
      );
      alert(
        `Dodano task "${
          newProjectName || 'List'
        }" do projektu ${selectedProject}`
      );
      setNewTaskName('');
    } catch (error) {
      console.error('Błąd podczas dodawania projektu:', error);
    }
  };
  return (
    <div>
      {' '}
      <div className="">
        {selectedProject && (
          <div className="add-project-form">
            <h3>
              Dodaj task do projektu o uuid: <b>{selectedProject}</b>{' '}
            </h3>
            <input
              type="text"
              placeholder="Nazwa tasku"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />

            <button onClick={handleAddTask}>Dodaj task</button>
          </div>
        )}
      </div>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id} onClick={() => setSelectedTask(task.id)}>
            <strong>{task.name}</strong> - {task.desc || 'No description'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksSection;
