import { Icons } from "@/icons/icons";
import AddWorkspaceElement from "./AddWorkspaceElement/AddWorkspaceElement";
import { Task } from "@/app/server-actions/types";
interface ProjectElementProps {
  project: Project;
  isActive: boolean;
  onClick: (projectId: string, projectName: string) => void;
  width: number;
  setTasksLength: (length: number) => void;
  tasks: Task[];
}
interface Project {
  id: string;
  name: string;
}

export const ProjectElement = ({
  project,
  isActive,
  onClick,
  width,
  setTasksLength,
  tasks,
}: ProjectElementProps) => (
  <AddWorkspaceElement
    label={project.name}
    icon={<Icons.ListOutline className="text-[20px] text-gray-700" />}
    extraIcons={1}
    active={isActive}
    onClick={() => onClick(project.id, project.name)}
    width={width}
    onMouseEnter={() => setTasksLength(tasks ? tasks.length : 0)}
    isWorkspace={false}
    rotate={false}
  />
);
