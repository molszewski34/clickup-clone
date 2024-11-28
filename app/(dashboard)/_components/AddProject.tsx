import React from 'react';

interface AddProjectFormProps {
  selectedWorkspace: string;
  handleAddProject: () => void;
  newProjectName: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPrivate: boolean;
  setIsPrivate: (value: boolean) => void;
  onCancel: () => void;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({
  selectedWorkspace,
  handleAddProject,
  newProjectName,
  handleInputChange,
  isPrivate,
  setIsPrivate,
  onCancel,
}) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2em',
    }}
  >
    <h2 style={{ color: 'red' }}>
      Add Project to Workspace ID: {selectedWorkspace}
    </h2>
    <input
      type="text"
      value={newProjectName}
      onChange={handleInputChange}
      placeholder="Enter project name"
    />
    <label>
      Is Private{' '}
      <input
        type="checkbox"
        checked={isPrivate}
        onChange={() => setIsPrivate(!isPrivate)}
      />
    </label>
    <button onClick={handleAddProject}>Add Project</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);

export default AddProjectForm;
