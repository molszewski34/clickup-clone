import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWorkspaceQuery } from "@/hooks/useWorkspaceQuery";
import { useProjectQuery } from "@/hooks/useProjectQuery";
import { Icons } from "@/icons/icons";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/server-actions/task/getTasks";
import { AddIcons } from "../SidebarModal/components/AddIcons";
import AddWorkspaceElement from "./components/AddWorkspaceElement/AddWorkspaceElement";

const WorkspaceButtons = ({ width }: { width: number }) => {
  const router = useRouter();
  const workspaceQueryResult = useWorkspaceQuery();
  const workspaces = workspaceQueryResult.data || [];
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const {
    projectId,
    workspaceId,
    setWorkspaceName,
    setTasksLength,
    setWorkspaceId,
    setProjectId,
    setProjectName,
  } = useData();

  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { userId } = useUser();

  const {
    data: projects,
    isLoading: loadingProjects,
    error: projectsError,
  } = useProjectQuery();

  const { data: tasks } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(userId, workspaceId, projectId),
    enabled: !!projectId,
  });

  const handleWorkspaceClick = (workspaceId: string, workspaceName: string) => {
    if (activeWorkspace === workspaceId) {
      setActiveWorkspace(null);
      setActiveProject(null);
    } else {
      setActiveWorkspace(workspaceId);
      setWorkspaceId(workspaceId);
      setWorkspaceName(workspaceName);
    }
  };

  const handleProjectClick = (projectId: string, projectName: string) => {
    setActiveProject((prev) => (prev === projectId ? null : projectId));
    setProjectId(projectId);
    setProjectName(projectName);

    router.push(`/${userId}/l/${projectId}`);
  };

  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="flex w-full flex-col">
      {workspaces.length > 0 ? (
        workspaces.map((workspace) => {
          const firstLetterOfWorkspaceName =
            workspace.name?.charAt(0).toUpperCase() || "?";

          const selectedIcon = Array.isArray(workspace.icon)
            ? workspace.icon.reverse().find((item) => item.selectedIconName)
            : null;

          const DynamicIcon = selectedIcon?.selectedIconName
            ? AddIcons[selectedIcon.selectedIconName as keyof typeof AddIcons]
            : null;

          return (
            <div key={workspace.id}>
              <AddWorkspaceElement
                label={workspace.name}
                icon={
                  hoverStates[workspace.id] ? (
                    <Icons.PlayWorkspace className="text-[20px] text-white" />
                  ) : DynamicIcon ? (
                    <DynamicIcon className="text-[20px] text-white" />
                  ) : (
                    <span className="flex justify-center items-center text-[16px] w-4 h-4 font-sans font-bold text-white">
                      {firstLetterOfWorkspaceName}
                    </span>
                  )
                }
                color={
                  Array.isArray(workspace.icon)
                    ? [...workspace.icon]
                        .reverse()
                        .find((item) => item?.activeColor)?.activeColor ??
                      "indigo-500"
                    : "indigo-500"
                }
                extraIcons={2}
                active={activeWorkspace === workspace.id}
                onClick={() =>
                  handleWorkspaceClick(workspace.id, workspace.name)
                }
                width={width}
                onMouseEnter={() => {
                  handleMouseEnter(workspace.id);
                  setWorkspaceName(workspace.name);
                }}
                onMouseLeave={() => handleMouseLeave(workspace.id)}
                isWorkspace={true}
              />
              {activeWorkspace === workspace.id && (
                <div className="ml-4 mt-2">
                  {loadingProjects ? (
                    <p>Loading projects...</p>
                  ) : projectsError ? (
                    <p className="text-red-500">
                      Error while downloading projects.
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
                          handleProjectClick(project.id, project.name);
                        }}
                        width={width}
                        onMouseEnter={() => {
                          setTasksLength(tasks?.length ?? 0);
                        }}
                        isWorkspace={false}
                      />
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      No projects in this workspace.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">No workspace to display.</p>
      )}
    </div>
  );
};

export default WorkspaceButtons;
