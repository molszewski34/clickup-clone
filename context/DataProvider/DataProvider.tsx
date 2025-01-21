"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type DataContextType = {
  userId: string | null;
  setUserId: Dispatch<React.SetStateAction<string>>;
  workspaceId: string;
  setWorkspaceId: Dispatch<SetStateAction<string>>;
  workspaceName: string;
  setWorkspaceName: Dispatch<SetStateAction<string>>;
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
  projectName: string;
  setProjectName: Dispatch<SetStateAction<string>>;
  taskId: string;
  setTaskId: Dispatch<SetStateAction<string>>;
  tasksLength: number;
  setTasksLength: Dispatch<SetStateAction<number>>;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [workspaceId, setWorkspaceId] = useState(localStorage.getItem("workspaceId") || "");
  const [workspaceName, setWorkspaceName] = useState("");
  const [projectId, setProjectId] = useState(localStorage.getItem("projectId") || "");
  const [projectName, setProjectName] = useState("");
  const [taskId, setTaskId] = useState("");
  const [tasksLength, setTasksLength] = useState(0);

  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        workspaceId,
        setWorkspaceId,
        workspaceName,
        setWorkspaceName,
        projectId,
        setProjectId,
        projectName,
        setProjectName,
        taskId,
        setTaskId,
        tasksLength,
        setTasksLength,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
