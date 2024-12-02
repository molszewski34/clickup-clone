import { addTask } from '@/app/server-actions/task/addNewTask';
import { getTasks } from '@/app/server-actions/task/getTasks';
import React, { useCallback, useEffect } from 'react';

interface Task {
  id: string;
  name: string;
  desc?: string;
}

interface TasksSectionProps {
  userId: string;
  selectedWorkspace: string;
  selectedProject: string;
  setTasks: (tasks: Task[]) => void;
  newTaskName: string;
  setNewTaskName: (name: string) => void;
  setSelectedTask: (taskId: string) => void;
  tasks: Task[];
  newProjectName: string;
  newSubTaskName: string;
  taskStatus: string;
  taskDueDate: string;
  taskAssignees: string[];
  taskTimeEstimate: number;
  taskPriority: string;
  taskDetails: string;
}

const TasksSection: React.FC<TasksSectionProps> = ({
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
  const fetchTasks = useCallback(async () => {
    if (!userId || !selectedWorkspace || !selectedProject) return;
    const fetchedTasks = await getTasks(
      userId,
      selectedWorkspace,
      selectedProject
    );
    // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
    setTasks(fetchedTasks);
  }, [userId, selectedWorkspace, selectedProject, setTasks]);

  useEffect(() => {
    if (selectedWorkspace) {
      fetchTasks();
    }
  }, [selectedProject, selectedWorkspace, fetchTasks]);

  const handleAddTask = async () => {
    if (!userId || !selectedWorkspace || !selectedProject) return;

    try {
      await addTask(
        userId,
        selectedWorkspace,
        selectedProject,
        newSubTaskName,
        taskStatus,
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
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
        {tasks.map((task: Task) => (
          <li key={task.id} onClick={() => setSelectedTask(task.id)}>
            <strong>{task.name}</strong> - {task.desc || 'No description'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksSection;
