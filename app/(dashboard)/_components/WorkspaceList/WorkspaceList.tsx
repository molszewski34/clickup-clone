import React from 'react';

interface WorkspacesListProps {
  workspaces: { id: string; name: string; desc?: string }[];
  setSelectedWorkspace: (id: string) => void;
}

const WorkspacesList: React.FC<WorkspacesListProps> = ({
  workspaces,
  setSelectedWorkspace,
}) => {
  if (workspaces.length === 0) {
    return <p>No workspaces available</p>;
  }

  return (
    <ul>
      {workspaces.map((workspace) => (
        <li
          key={workspace.id}
          onClick={() => setSelectedWorkspace(workspace.id)}
        >
          <strong>{workspace.name}</strong> -{' '}
          {workspace.desc || 'No description'}
        </li>
      ))}
    </ul>
  );
};

export default WorkspacesList;
