"use client";

import React, { useState } from "react";
import { useWorkspaceQuery } from "@/hooks/useWorkspaceQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import ProjectsList from "./components/ProjectsList";

const WorkspacesList = () => {
  const workspaceQueryResult = useWorkspaceQuery();
  const workspaces = workspaceQueryResult.data || [];
  const { setWorkspaceId } = useData();

  const [showProjectList, setShowProjectList] = useState<boolean>(true);

  return (
    <div>
      <h1>Your Workspaces</h1>
      {workspaces.length > 0 ? (
        <ul>
          {workspaces.map((workspace) => (
            <li
              onClick={() => {
                setWorkspaceId(workspace.id);
                setShowProjectList(!showProjectList);
              }}
              key={workspace.id}
            >
              {workspace.name}
              {showProjectList && <ProjectsList />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No workspaces found.</p>
      )}
    </div>
  );
};

export default WorkspacesList;
