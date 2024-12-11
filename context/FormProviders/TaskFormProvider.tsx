'use client';

import React, { createContext, useContext, useState } from 'react';

const TaskFormContext = createContext<any>(null);

export const TaskFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState({
    taskName: '',
    taskStatus: '',
    dueDate: new Date(),
    assignees: [],
    timeEstimate: '',
    priority: '',
    details: '',
  });

  console.log('formData w TaskFormContext', formData);

  return (
    <TaskFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </TaskFormContext.Provider>
  );
};

export const usetaskFormContext = () => {
  const context = useContext(TaskFormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a taskFormProvider');
  }
  return context;
};
