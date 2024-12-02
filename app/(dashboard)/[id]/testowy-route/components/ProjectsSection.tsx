import { addProject } from '@/app/server-actions/project/addNewProject';
import { getProjects } from '@/app/server-actions/project/getProjects';
import React, { useEffect, useCallback } from 'react';

interface Project {
  id: string;
  name: string;
  desc?: string;
}

interface ProjectsSectionProps {
  userId: string;
  selectedWorkspace: string;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  newProjectName: string;
  setNewProjectName: React.Dispatch<React.SetStateAction<string>>;
  isPrivate: boolean;
  setisPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  projects: Project[];
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
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
  const fetchProjects = useCallback(async () => {
    if (!userId || !selectedWorkspace) return;

    const fetchedProjects = await getProjects(userId, selectedWorkspace);
    // @ts-expect-error: unkown type error
    setProjects(fetchedProjects);
  }, [userId, selectedWorkspace, setProjects]);

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
  }, [selectedWorkspace, fetchProjects]);

  return (
    <div>
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
            <input type="checkbox" onChange={() => setisPrivate(!isPrivate)} />
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
      </ul>
    </div>
  );
};

export default ProjectsSection;
