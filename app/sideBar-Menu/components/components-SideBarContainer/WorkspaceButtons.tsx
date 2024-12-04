"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/icons/icons";
import { getWorkspaces } from "@/app/server-actions/workspace/getWorkspaces";
import { getProjects } from "@/app/server-actions/project/getProjects";
import { getTasks } from "@/app/server-actions/task/getTasks";
import { getSubTasks } from "@/app/server-actions/subtasks/getSubtasks";
import { Workspace } from "@/app/server-actions/types";
import AddWorkspaceElement from "../AddWorkspaceElement";
import { getAuth } from "firebase/auth";

const WorkspaceButtons = ({ width }: { width: number }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [projectsMap, setProjectsMap] = useState<{ [key: string]: any[] }>({});
  const [tasksMap, setTasksMap] = useState<{ [key: string]: any[] }>({});
  const [subTasksMap, setSubTasksMap] = useState<{ [key: string]: any[] }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Nowa mapa hoverState dla każdego elementu
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
    } else {
      setError("Brak użytkownika! Zaloguj się, aby kontynuować.");
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchWorkspaces = async () => {
      try {
        setIsLoading(true);
        const fetchedWorkspaces = await getWorkspaces(userId);
        setWorkspaces(fetchedWorkspaces);
      } catch (err) {
        setError("Błąd podczas pobierania workspace.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkspaces();
  }, [userId]);

  const handleWorkspaceClick = async (workspaceId: string) => {
    if (!userId) {
      setError("Brak użytkownika! Zaloguj się, aby wybrać workspace.");
      return;
    }

    if (activeWorkspace === workspaceId) {
      setActiveWorkspace(null);
      setActiveProject(null);
      setActiveTask(null);
    } else {
      setActiveWorkspace(workspaceId);
      setActiveProject(null);
      setActiveTask(null);

      if (!projectsMap[workspaceId] || projectsMap[workspaceId].length === 0) {
        try {
          setIsLoading(true);
          const fetchedProjects = await getProjects(userId, workspaceId);
          setProjectsMap((prevState) => ({
            ...prevState,
            [workspaceId]: fetchedProjects,
          }));
        } catch (err) {
          setError("Błąd podczas pobierania projektów.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const handleProjectClick = async (projectId: string) => {
    if (!userId) {
      setError("Brak użytkownika! Zaloguj się, aby wybrać projekt.");
      return;
    }

    if (activeProject === projectId) {
      setActiveProject(null);
      setActiveTask(null);
    } else {
      setActiveProject(projectId);
      setActiveTask(null);

      if (!tasksMap[projectId] || tasksMap[projectId].length === 0) {
        try {
          setIsLoading(true);
          const fetchedTasks = await getTasks(
            userId,
            activeWorkspace!,
            projectId
          );
          setTasksMap((prevState) => ({
            ...prevState,
            [projectId]: fetchedTasks,
          }));
        } catch (err) {
          setError("Błąd podczas pobierania tasków.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const handleTaskClick = async (taskId: string) => {
    if (!userId) {
      setError("Brak użytkownika! Zaloguj się, aby wybrać zadanie.");
      return;
    }

    if (activeTask === taskId) {
      setActiveTask(null);
    } else {
      setActiveTask(taskId);

      if (!subTasksMap[taskId] || subTasksMap[taskId].length === 0) {
        try {
          setIsLoading(true);
          const fetchedSubTasks = await getSubTasks(
            userId,
            activeWorkspace!,
            activeProject!,
            taskId
          );
          setSubTasksMap((prevState) => ({
            ...prevState,
            [taskId]: fetchedSubTasks,
          }));
        } catch (err) {
          setError("Błąd podczas pobierania subtasków.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  // Funkcje zmieniające stan hover dla każdego elementu
  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col">
      {workspaces.map((workspace) => (
        <div key={workspace.id}>
          <AddWorkspaceElement
            label={workspace.name}
            icon={
              hoverStates[workspace.id] ? (
                <Icons.ArrowDownIcon className="text-[20px] text-gray-700" />
              ) : (
                <Icons.CodeSquare className="text-[20px] text-gray-700" />
              )
            }
            extraIcons={2}
            active={activeWorkspace === workspace.id}
            onClick={() => handleWorkspaceClick(workspace.id)}
            width={width}
            onMouseEnter={() => handleMouseEnter(workspace.id)} // Przekazujemy ID dla hover
            onMouseLeave={() => handleMouseLeave(workspace.id)} // Przekazujemy ID dla hover
          />

          {activeWorkspace === workspace.id &&
            projectsMap[workspace.id]?.map((project) => (
              <div key={project.id} className="ml-4 mt-1">
                <AddWorkspaceElement
                  label={project.name}
                  icon={
                    hoverStates[project.id] ? (
                      <Icons.ArrowDownIcon className="text-[20px] text-gray-700" />
                    ) : (
                      <Icons.NewTabIcon className="text-[20px] text-gray-700" />
                    )
                  }
                  extraIcons={2}
                  active={activeProject === project.id}
                  onClick={() => handleProjectClick(project.id)}
                  width={width}
                  onMouseEnter={() => handleMouseEnter(project.id)} // Przekazujemy ID dla hover
                  onMouseLeave={() => handleMouseLeave(project.id)} // Przekazujemy ID dla hover
                />

                {activeProject === project.id &&
                  tasksMap[project.id]?.map((task) => (
                    <div key={task.id} className="ml-6 mt-1">
                      <AddWorkspaceElement
                        label={task.name}
                        icon={
                          hoverStates[task.id] ? (
                            <Icons.DotIcon className="text-[20px] text-gray-700" />
                          ) : (
                            <Icons.DotIcon className="text-[20px] text-gray-700" />
                          )
                        }
                        extraIcons={1}
                        active={activeTask === task.id}
                        onClick={() => handleTaskClick(task.id)}
                        width={width}
                        onMouseEnter={() => handleMouseEnter(task.id)} // Przekazujemy ID dla hover
                        onMouseLeave={() => handleMouseLeave(task.id)} // Przekazujemy ID dla hover
                      />

                      {activeTask === task.id &&
                        subTasksMap[task.id]?.map((subTask) => (
                          <div key={subTask.id} className="ml-8 mt-1">
                            <span className="block text-sm text-gray-600">
                              {subTask.name}
                            </span>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default WorkspaceButtons;
