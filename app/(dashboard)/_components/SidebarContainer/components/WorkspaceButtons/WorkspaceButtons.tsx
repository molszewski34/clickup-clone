"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWorkspaceQuery } from "@/hooks/useWorkspaceQuery";
import { useProjectQuery } from "@/hooks/useProjectQuery";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/server-actions/task/getTasks";
import { WorkspaceElement } from "./components/WorkspaceElements";
import { ProjectElement } from "./components/ProjectElement";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";

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

  const { userId } = useUser();

  const {
    data: projects,
    isLoading: loadingProjects,
    error: projectsError,
  } = useProjectQuery();

  useEffect(() => {
    setActiveProject(projectId);
  }, [projectId]);

  const { data: tasks } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(userId, workspaceId, projectId),
    enabled: !!projectId,
  });

  const handleWorkspaceClick = (workspaceId: string, workspaceName: string) => {
    if (activeWorkspace === workspaceId) {
      setActiveWorkspace(null);
      setActiveProject(null);
      router.push(`/${userId}/o/${workspaceId}`);
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

  return (
    <div className="flex w-full flex-col">
      {workspaces.length > 0 ? (
        workspaces.map((workspace) => (
          <WorkspaceElement
            key={workspace.id}
            workspace={workspace}
            isActive={activeWorkspace === workspace.id}
            onClick={handleWorkspaceClick}
            width={width}
            setWorkspaceName={setWorkspaceName}
          >
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
                    <ProjectElement
                      key={project.id}
                      project={project}
                      isActive={activeProject === project.id}
                      onClick={handleProjectClick}
                      width={width}
                      setTasksLength={setTasksLength}
                      tasks={tasks}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No projects in this workspace.
                  </p>
                )}
              </div>
            )}
          </WorkspaceElement>
        ))
      ) : (
        <p className="text-gray-500">No workspace to display.</p>
      )}
    </div>
  );
};

export default WorkspaceButtons;
