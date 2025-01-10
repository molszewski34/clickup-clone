import { useData } from '@/context/DataProvider/DataProvider';
import { useProjectQuery } from '@/hooks/useProjectQuery';
import React from 'react';

interface Project {
  id: string;
  name?: string;
}

const ProjectsList: React.FC = () => {
  const projectQueryResult = useProjectQuery();
  const projects: Project[] = projectQueryResult.data || [];

  const { setProjectId } = useData();

  return (
    <>
      <ul>
        {projects.map((project) => (
          <li onClick={() => setProjectId(project.id)} key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsList;
