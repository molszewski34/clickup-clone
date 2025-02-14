import { SearchQuery,SearchResult } from "../../../../type";

export const searchItems = (
  query: string,
  {
    workspaceName,
    projectName,
    taskName,
    details,
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
  if (taskName.toLowerCase().includes(lowerQuery) || details?.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: "task",
      title: taskName,
      type: "Task",
      description: details,
    });
  }


  return results;
};