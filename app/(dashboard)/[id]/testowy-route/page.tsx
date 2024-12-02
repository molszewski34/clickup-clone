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

interface Project {
  id: string;
  name: string;
  isPrivate: boolean;
}

interface Task {
  id: string;
  name: string;
  desc?: string;
}

interface SubTask {
  id: string;
  name: string;
  status: string;
}

interface UserHomeProps {
  params: Promise<{ id: string; name: string; desc: string }>;
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(
    null
  );
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]); // Typowanie stanu projects

  const [selectedProject, setSelectedProject] = useState<string>('');
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [taskStatus] = useState<string>(''); // Typowanie taskStatus
  const [taskDueDate] = useState<Date | null>(null); // Typowanie taskDueDate
  const [taskAssignees] = useState<string>('');
  const [taskTimeEstimate] = useState<string>('');
  const [taskPriority] = useState<string>('');
  const [taskDetails] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]); // Typowanie stanu tasks

  const [newSubTaskName, setNewSubTaskName] = useState<string>('');
  const [subTaskStatus] = useState<string>(''); // Typowanie subTaskStatus
  const [subTaskDueDate] = useState<Date | null>(null); // Typowanie subTaskDueDate
  const [subTaskAssignees] = useState<string>('');
  const [subTaskTimeEstimate] = useState<string>('');
  const [subTaskPriority] = useState<string>('');
  const [subTaskDetails] = useState<string>('');
  const [subTasks, setSubTasks] = useState<SubTask[]>([]); // Typowanie stanu subTasks

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
      if (!user || user.uid !== params.id) {
        router.push('/login');
      }
    });
    // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
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
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        userId={userId}
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        selectedWorkspace={selectedWorkspace}
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        setProjects={setProjects}
        newProjectName={newProjectName}
        isPrivate={isPrivate}
        setNewProjectName={setNewProjectName}
        setIsPrivate={setIsPrivate}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <TasksSection
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        userId={userId}
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
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
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        taskDueDate={taskDueDate}
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
        taskAssignees={taskAssignees}
        // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
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
