import { addProject } from '@/app/server-actions/project/addNewProject';
import { getProjects } from '@/app/server-actions/project/getProjects';
import React, { useEffect } from 'react';

const ProjectsSection = ({
  userId,
  selectedWorkspace,
  setProjects,
  newProjectName,
  setNewProjectName,
  isPrivate,
  setisPrivate,
  projects,
  setSelectedProject,
}) => {
  const fetchProjects = async () => {
    if (!userId || !selectedWorkspace) return;
    const fetchedProjects = await getProjects(userId, selectedWorkspace);
    setProjects(fetchedProjects);
  };

  const handleAddProject = async () => {
    if (!userId || !selectedWorkspace) return;

    try {
      await addProject(
        userId,
        selectedWorkspace,
        newProjectName || 'List',
        isPrivate
      );
      alert(
        `Dtask "${newProjectName || 'List'}" do workspace ${selectedWorkspace}`
      );
      setNewProjectName('');
    } catch (error) {
      console.error('Błąd podczas dodawania projektu:', error);
    }
  };

  useEffect(() => {
    if (selectedWorkspace) {
      fetchProjects();
    }
  }, [selectedWorkspace]);
  return (
    <div>
      {' '}
      {selectedWorkspace && (
        <div className="add-project-form">
          <h3>
            Dodaj projekt do: <b>{selectedWorkspace}</b>
          </h3>
          <input
            type="text"
            placeholder="Nazwa projektu"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <label htmlFor="">
            Czy jest prywatny?{' '}
            <input type="checkbox" onClick={() => setisPrivate(!isPrivate)} />
          </label>
          <button onClick={handleAddProject}>Dodaj Projekt</button>
        </div>
      )}
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => setSelectedProject(project.id)}>
            <strong>{project.name}</strong> - {project.desc || 'No description'}
          </li>
        ))}
      </ul>{' '}
    </div>
  );
};

export default ProjectsSection;
