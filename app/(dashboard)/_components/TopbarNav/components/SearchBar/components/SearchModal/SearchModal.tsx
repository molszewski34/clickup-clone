"use client";
import { SetStateAction, useState } from "react";
import ButtonAI from "./components/Buttons/ButtonAI";
import NavInModal from "./components/NavInModal";
import SortMenuModal from "./components/SortMenuModal/SortMenuModal";
import SearchResults from "./components/SearchResults/SearchResults";
import { searchItems } from "./components/searchAlgorithm";
interface SearchItem {
  id: string;
  type: "task" | "list" | "other";
  name: string;
  description?: string;
}

const mockData: SearchItem[] = [
  {
    id: "1",
    type: "task",
    name: "Fix bug in modal",
    description: "Bug with input focus",
  },
  {
    id: "2",
    type: "list",
    name: "Grocery List",
    description: "Buy milk, bread, and eggs",
  },
  {
    id: "3",
    type: "other",
    name: "Meeting Notes",
    description: "Project kickoff meeting notes",
  },
];

  // const fakeData: SearchResult[] = [
  //   {
  //     title: "Project 1",
  //     type: "Doc",
  //     space: "Team Space",
  //     category: "Marketing",
  //     updated: "2 days ago",
  //   },
  //   {
  //     title: "Dashboard",
  //     type: "Dashboard",
  //     space: "Personal",
  //     category: "Finance",
  //     updated: "5 days ago",
  //   },
  //   {
  //     title: "Whiteboard",
  //     type: "Whiteboard",
  //     space: "Team Space",
  //     category: "Design",
  //     updated: "1 week ago",
  //   },
  // ];
export default function SearchModal() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const value = event.target.value;
    setQuery(value);

    // Wywołanie funkcji wyszukiwania
    const searchResults = searchItems(value, mockData);
    setResults(searchResults);
  };

  return (
    <>
      <div className="flex-row w-full">
        <div className="flex items-center w-auto mx-3 mt-3 mb-1">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search, run a command, or ask a question…"
            className="w-[377px] h-6 text-base rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
          <ButtonAI />
        </div>
        <NavInModal />
        <div className="w-full h-px bg-gray-200" />
        <SortMenuModal />
        <div className="flex items-center h-[34px] w-full px-4 py-1 font-sans text-xs font-medium text-gray-500">
          Results
        </div>
        <SearchResults results={results} />
      </div>
    </>
  );
}
