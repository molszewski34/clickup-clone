'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import { useInitializeWorkspace } from '../../_hooks/useInitializeWorkspace';

import TopbarNav from '@/app/topBar-Nav/components/TopbarNav';
import PageNavbar from '../../ui/PageNavbar';
import PageIndicator from '../../ui/PageIndicator';
import { Icons } from '@/icons/icons';
import useFetchWorkspaces from '../../_hooks/useFetchWorspaces';
import AddWorkspace from '../../_components/AddWorkspace';
import WorkspacesList from '../../_components/WorkspaceList/WorkspaceList';

import { addProject } from '@/app/server-actions/project/addNewProject';
import { getProjects } from '@/app/server-actions/project/getProjects';
import { getTasks } from '@/app/server-actions/task/getTasks';
import { addTask } from '@/app/server-actions/task/addNewTask';
import { addSubTask } from '@/app/server-actions/subtasks/addNewSubTask';
import { getSubTasks } from '@/app/server-actions/subtasks/getSubtasks';

interface UserHomeProps {
  params: { id: string };
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any | null>(null);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [isPrivate, setisPrivate] = useState<boolean>(false);
  const [projects, setProjects] = useState<any[]>([]); // Stan dla projektów

  const [selectedProject, setSelectedProject] = useState<string>('');
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskDueDate, setTaskDueDate] = useState(null);
  const [taskAssignees, setTaskAssignees] = useState('');
  const [taskTimeEstimate, setTaskTimeEstimate] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);
  const [newSubTaskName, setNewSubTaskName] = useState('');
  const [subTaskStatus, setSubTaskStatus] = useState('');
  const [subTaskDueDate, setSubTaskDueDate] = useState(null);
  const [subTaskAssignees, setSubTaskAssignees] = useState('');
  const [subTaskTimeEstimate, setSubTaskTimeEstimate] = useState('');
  const [subTaskPriority, setSubTaskPriority] = useState('');
  const [subTaskDetails, setSubTaskDetails] = useState('');
  const [subTasks, setSubTasks] = useState<any[]>([]);
  console.log('projects', projects);
  console.log('tasks', tasks);
  console.log('subtasks', subTasks);
  console.log('selectedtask', selectedTask);
  console.log('new subtask name', newSubTaskName);

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.uid !== params.id) {
        router.push('/login');
      }
    });

    setUserId(params.id);
    return () => unsubscribe();
  }, [params, router]);

  const { workspaces } = useFetchWorkspaces();

  const fetchProjects = async () => {
    if (!userId || !selectedWorkspace) return;
    const fetchedProjects = await getProjects(userId, selectedWorkspace);
    setProjects(fetchedProjects);
  };

  useEffect(() => {
    if (selectedWorkspace) {
      fetchProjects();
    }
  }, [selectedWorkspace]);

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

  const handleAddProject = async () => {
    if (!userId || !selectedWorkspace) return;

    try {
      await addProject(
        userId,
        selectedWorkspace,
        newProjectName || 'List',
        isPrivate
      );
      alert(
        `Dtask "${newProjectName || 'List'}" do workspace ${selectedWorkspace}`
      );
      setNewProjectName('');
    } catch (error) {
      console.error('Błąd podczas dodawania projektu:', error);
    }
  };

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
      <TopbarNav />
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
      <div>
        <h2>Workspace List</h2>
        <WorkspacesList
          workspaces={workspaces}
          setSelectedWorkspace={setSelectedWorkspace}
        />
        <hr />
        <AddWorkspace />
      </div>
      {selectedWorkspace && (
        <div className="add-project-form">
          <h3>
            Dodaj projekt do: <b>{selectedWorkspace}</b>
          </h3>
          <input
            type="text"
            placeholder="Nazwa projektu"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <label htmlFor="">
            Czy jest prywatny?{' '}
            <input type="checkbox" onClick={() => setisPrivate(!isPrivate)} />
          </label>
          <button onClick={handleAddProject}>Dodaj Projekt</button>
        </div>
      )}
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => setSelectedProject(project.id)}>
            <strong>{project.name}</strong> - {project.desc || 'No description'}
          </li>
        ))}
      </ul>
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

export default UserHomePage;
