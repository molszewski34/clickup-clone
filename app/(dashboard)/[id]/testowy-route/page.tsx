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
import ProjectsSection from './components/ProjectsSection';
import TasksSection from './components/TasksSection';
import SubTaskSection from './components/SubTaskSection';

interface UserHomeProps {
  params: { id: string };
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any | null>(null);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [isPrivate, setisPrivate] = useState<boolean>(false);
  const [projects, setProjects] = useState<any[]>([]);

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
      <ProjectsSection
        userId={userId}
        selectedWorkspace={selectedWorkspace}
        setProjects={setProjects}
        newProjectName={newProjectName}
        isPrivate={isPrivate}
        setNewProjectName={setNewProjectName}
        setisPrivate={setisPrivate}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <TasksSection
        userId={userId}
        selectedWorkspace={selectedWorkspace}
        selectedProject={selectedProject}
        setTasks={setTasks}
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        setSelectedTask={setSelectedTask}
        tasks={tasks}
        newProjectName={newProjectName}
        newSubTaskName={newSubTaskName}
        taskStatus={taskStatus}
        taskDueDate={taskDueDate}
        taskAssignees={taskAssignees}
        taskTimeEstimate={taskTimeEstimate}
        taskPriority={taskPriority}
        taskDetails={taskDetails}
      />
      <SubTaskSection
        userId={userId}
        selectedWorkspace={selectedWorkspace}
        selectedProject={selectedProject}
        selectedTask={selectedTask}
        setSubTasks={setSubTasks}
        newSubTaskName={newSubTaskName}
        subTaskStatus={subTaskStatus}
        subTaskDueDate={subTaskDueDate}
        subTaskAssignees={subTaskAssignees}
        subTaskTimeEstimate={subTaskTimeEstimate}
        subTaskPriority={subTaskPriority}
        subTaskDetails={subTaskDetails}
        setNewSubTaskName={setNewSubTaskName}
        subTasks={subTasks}
      />
    </div>
  );
};

export default UserHomePage;
