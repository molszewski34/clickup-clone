import React, { useState } from 'react';
import { useWorkspaceQuery } from '@/hooks/useWorkspaceQuery';
import { useProjectQuery } from '@/hooks/useProjectQuery';
import { Icons } from '@/icons/icons';
import AddWorkspaceElement from '../AddWorkspaceElement';
import { useData } from '@/context/DataProvider/DataProvider';

const WorkspaceButtons = ({ width }: { width: number }) => {
  const workspaceQueryResult = useWorkspaceQuery();
  const workspaces = workspaceQueryResult.data || [];
  const { setWorkspaceId } = useData();
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(null);
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Używamy query hook, aby pobrać projekty
  const {
    data: projects,
    isLoading: loadingProjects,
    error: projectsError,
  } = useProjectQuery();

  const handleWorkspaceClick = (workspaceId: string) => {
    if (activeWorkspace === workspaceId) {
      setActiveWorkspace(null);
    } else {
      setActiveWorkspace(workspaceId);
      setWorkspaceId(workspaceId);
    }
  };

  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleSetWorkspace = (id: string) => {
    setWorkspaceId(id);
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
                  <Icons.ArrowDownIcon className="text-[20px] text-gray-700" />
                ) : (
                  <Icons.CodeSquare className="text-[20px] text-gray-700" />
                )
              }
              extraIcons={2}
              active={activeWorkspace === workspace.id}
              onClick={() => handleWorkspaceClick(workspace.id)}
              width={width}
              onMouseEnter={() => {
                handleMouseEnter(workspace.id);
                handleSetWorkspace(workspace.id);
              }}
              onMouseLeave={() => handleMouseLeave(workspace.id)}
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
                        hoverStates[project.id] ? (
                          <Icons.ArrowDownIcon className="text-[20px] text-gray-700" />
                        ) : (
                          <Icons.NewTabIcon className="text-[20px] text-gray-700" />
                        )
                      }
                      extraIcons={2}
                      active={false}
                      onClick={() => {}}
                      width={width}
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={() => handleMouseLeave(project.id)}
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
