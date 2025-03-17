"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type DataContextType = {
  userId: string | null;
  setUserId: Dispatch<React.SetStateAction<string>>;
  spaceId: string;
  setSpaceId: Dispatch<SetStateAction<string>>;
  spaceName: string;
  setSpaceName: Dispatch<SetStateAction<string>>;
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
  projectName: string;
  setProjectName: Dispatch<SetStateAction<string>>;
  taskId: string;
  setTaskId: Dispatch<SetStateAction<string>>;
  tasksLength: number;
  setTasksLength: Dispatch<SetStateAction<number>>;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState("");
  const [spaceId, setSpaceId] = useState("");
  const [spaceName, setSpaceName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [taskId, setTaskId] = useState("");
  const [tasksLength, setTasksLength] = useState(0);

  useEffect(() => {
    if (!spaceId) {
      setSpaceId(localStorage.getItem("spaceId") || "");
    }
    if (!projectId) {
      setProjectId(localStorage.getItem("projectId") || "");
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        spaceId,
        setSpaceId,
        spaceName,
        setSpaceName,
        projectId,
        setProjectId,
        projectName,
        setProjectName,
        taskId,
        setTaskId,
        tasksLength,
        setTasksLength,
      }}
    >
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
