import { User } from "@/app/server-actions/types";
export interface SearchResult {
  id: string;
  title: string;
  type: "Task" | "Project" | "Workspace" | "Person";
  description?: string;
}
export interface SearchQuery {
  workspaceName: string;
  projectName: string;
  taskName: string;
  details?: string;
  assignees: User[];
  assignedTo: (string | null)[];
}
export const searchItems = (
  query: string,
  {
    workspaceName,
    projectName,
    taskName,
    details,
    assignees,
    assignedTo,
  }: SearchQuery
): SearchResult[] => {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  const results: SearchResult[] = [];

  // Przeszukiwanie przestrzeni roboczych
  if (workspaceName.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: "workspace",
      title: workspaceName,
      type: "Workspace",
    });
  }

  // Przeszukiwanie projektów
  if (projectName.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: "project",
      title: projectName,
      type: "Project",
    });
  }

  // Przeszukiwanie zadań
  if (taskName.toLowerCase().includes(lowerQuery) || details.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: "task",
      title: taskName,
      type: "Task",
      description: details,
    });
  }

  // Przeszukiwanie osób
  [...assignees, ...assignedTo].forEach((person) => {
    if (person && person.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: `person-${person}`,
        title: person,
        type: "Person",
      });
    }
  });

  return results;
};