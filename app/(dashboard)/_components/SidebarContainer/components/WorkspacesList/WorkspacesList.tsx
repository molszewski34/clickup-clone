"use client";

import React, { useState } from "react";
import { useData } from "@/context/DataProvider/DataProvider";
import ProjectsList from "./components/ProjectsList";
import useSpacesQuery from "@/hooks/useSpacesQuery";

const WorkspacesList = () => {
  const spaceQueryResult = useSpacesQuery();
  const spaces = spaceQueryResult.data || [];
  const { setSpaceId } = useData();

  const [showProjectList, setShowProjectList] = useState<boolean>(true);

  return (
    <div>
      <h1>Your Spaces</h1>
      {spaces.length > 0 ? (
        <ul>
          {spaces.map((space) => (
            <li
              onClick={() => {
                setSpaceId(space.id);
                setShowProjectList(!showProjectList);
              }}
              key={space.id}
            >
              {space.name}
              {showProjectList && <ProjectsList />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No spaces found.</p>
      )}
    </div>
  );
};

export default WorkspacesList;
