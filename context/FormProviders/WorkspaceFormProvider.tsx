'use client';

import React, { createContext, useContext, useState } from 'react';

const WorkspaceFormContext = createContext<any>(null);

export const WorkspaceFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: '',
    createdAt: new Date().toISOString(),
    desc: '',
    isPrivate: false,
    icon: { activeColor: 'indigo-500', selectedIconName: '' },
  });

  console.log('formData w WorkspaceFormContext', formData);

  return (
    <WorkspaceFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </WorkspaceFormContext.Provider>
  );
};

export const useWorkspaceFormContext = () => {
  const context = useContext(WorkspaceFormContext);
  if (!context) {
    throw new Error(
      'useFormContext must be used within a WorkspaceFormProvider'
    );
  }
  return context;
};
