import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWorkspaceQuery } from '@/hooks/useWorkspaceQuery';
import { useProjectQuery } from '@/hooks/useProjectQuery';
import { Icons } from '@/icons/icons';
import AddWorkspaceElement from '../AddWorkspaceElement';
import { useData } from '@/context/DataProvider/DataProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/app/server-actions/task/getTasks';

const WorkspaceButtons = ({ width }: { width: number }) => {
  const router = useRouter();
  const workspaceQueryResult = useWorkspaceQuery();
  const workspaces = workspaceQueryResult.data || [];
  const { setWorkspaceId, setProjectId, setProjectName } = useData();
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const { projectId, workspaceId, setTasksLength } = useData();

  const { userId } = useUser();

  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const {
    data: projects,
    isLoading: loadingProjects,
    error: projectsError,
  } = useProjectQuery();

  const { data: tasks } = useQuery({
    queryKey: ['tasks', projectId],
    queryFn: () => getTasks(userId, workspaceId, projectId),
    enabled: !!projectId,
  });

  const handleWorkspaceClick = (workspaceId: string) => {
    if (activeWorkspace === workspaceId) {
      setActiveWorkspace(null);
      setActiveProject(null); // Reset aktywnego projektu
    } else {
      setActiveWorkspace(workspaceId);
      setWorkspaceId(workspaceId);
    }
  };

  const handleProjectClick = (projectId: string) => {
    setActiveProject((prev) => (prev === projectId ? null : projectId));
    setProjectId(projectId);

    router.push(`/${userId}/l/${projectId}`);
  };

  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="flex flex-col">
      {workspaces.length > 0 ? (
        workspaces.map((workspace) => (
          <div key={workspace.id}>
            <AddWorkspaceElement
              label={workspace.name}
              icon={
                hoverStates[workspace.id] ? (
                  <Icons.PlayWorkspace className="text-[20px] text-gray-700" />
                ) : (
                  <Icons.People className="text-[20px] text-gray-700" />
                )
              }
              extraIcons={2}
              active={activeWorkspace === workspace.id}
              onClick={() => handleWorkspaceClick(workspace.id)}
              width={width}
              onMouseEnter={() => handleMouseEnter(workspace.id)}
              onMouseLeave={() => handleMouseLeave(workspace.id)}
              isWorkspace={true}
            />
            {activeWorkspace === workspace.id && (
              <div className="ml-4 mt-2">
                {loadingProjects ? (
                  <p>Ładowanie projektów...</p>
                ) : projectsError ? (
                  <p className="text-red-500">
                    Błąd podczas pobierania projektów.
                  </p>
                ) : projects && projects.length > 0 ? (
                  projects.map((project) => (
                    <AddWorkspaceElement
                      key={project.id}
                      label={project.name}
                      icon={
                        <Icons.ListOutline className="text-[20px] text-gray-700" />
                      }
                      extraIcons={1}
                      active={activeProject === project.id}
                      onClick={() => {
                        handleProjectClick(project.id);
                        setProjectId(project.id);
                        setProjectName(project.name);
                        setTasksLength(tasks?.length ?? 0);
                      }}
                      width={width}
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={() => handleMouseLeave(project.id)}
                      isWorkspace={false}
                    />
                  ))
                ) : (
                  <p>Brak projektów w tym workspace.</p>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">Brak workspace do wyświetlenia.</p>
      )}
    </div>
  );
};

export default WorkspaceButtons;
