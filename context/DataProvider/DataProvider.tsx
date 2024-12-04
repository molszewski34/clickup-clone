'use client';

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type DataContextType = {
  userId: string | null;
  setUserId: Dispatch<React.SetStateAction<string>>;
  workspaceId: string;
  setWorkspaceId: Dispatch<SetStateAction<string>>;
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
  taskId: string;
  setTaskId: Dispatch<SetStateAction<string>>;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [taskId, setTaskId] = useState('');

  console.log('userId', userId);
  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        workspaceId,
        setWorkspaceId,
        projectId,
        setProjectId,
        taskId,
        setTaskId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
