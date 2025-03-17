"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProjectQuery } from "@/hooks/useProjectQuery";
// import { useQuery } from "@tanstack/react-query";
// import { getTasks } from "@/app/server-actions/task/getTasks";
import { WorkspaceElement } from "./components/WorkspaceElements";
import { ProjectElement } from "./components/ProjectElement";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useSpacesQuery from "@/hooks/useSpacesQuery";

const WorkspaceButtons = ({ width }: { width: number }) => {
  const router = useRouter();
  const spaceQueryResult = useSpacesQuery();
  const spaces = spaceQueryResult.data || [];
  const [activeSpace, setActiveSpace] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const {
    projectId,
    // spaceId,
    setSpaceName,
    setTasksLength,
    setSpaceId,
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

  // const { data: tasks } = useQuery({
  //   queryKey: ["tasks", projectId],
  //   queryFn: () => getTasks(userId, spaceId, projectId),
  //   enabled: !!projectId,
  // }); TODO: Uncomment when implementing new tasks

  const handleWorkspaceClick = (spaceId: string, spaceName: string) => {
    if (activeSpace === spaceId) {
      setActiveSpace(null);
      setActiveProject(null);
      router.push(`/${userId}/o/${spaceId}`);
    } else {
      setActiveSpace(spaceId);
      setSpaceId(spaceId);
      setSpaceName(spaceName);
      localStorage.setItem("spaceId", spaceId);
    }
  };

  const handleProjectClick = (projectId: string, projectName: string) => {
    setActiveProject((prev) => (prev === projectId ? null : projectId));
    setProjectId(projectId);
    setProjectName(projectName);
    localStorage.setItem("projectId", projectId);

    router.push(`/${userId}/l/${projectId}`);
  };

  return (
    <div className="flex w-full flex-col">
      {spaces.length > 0 ? (
        spaces.map((space) => (
          <WorkspaceElement
            key={space.id}
            space={space}
            isActive={activeSpace === space.id}
            onClick={handleWorkspaceClick}
            width={width}
            setSpaceName={setSpaceName}
          >
            {activeSpace === space.id && (
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
                      tasks={[]}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No projects in this space.
                  </p>
                )}
              </div>
            )}
          </WorkspaceElement>
        ))
      ) : (
        <p className="text-gray-500">No space to display.</p>
      )}
    </div>
  );
};

export default WorkspaceButtons;
