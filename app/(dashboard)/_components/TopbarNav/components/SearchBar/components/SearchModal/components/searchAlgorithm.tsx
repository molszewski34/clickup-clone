interface SearchItem {
    id: string;
    type: "task" | "list" | "other";
    name: string;
    description?: string;
  }
  
  export const searchItems = (
    query: string,
    items: SearchItem[]
  ): SearchItem[] => {
    if (!query.trim()) return [];
  
    const lowerCaseQuery = query.toLowerCase();
  
    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      (item.description && item.description.toLowerCase().includes(lowerCaseQuery))
    );
  };