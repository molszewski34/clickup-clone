"use client";
import { useState } from "react";
import { searchItems } from "./components/searchAlgorithm";
import { useData } from "@/context/DataProvider/DataProvider";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";

import ButtonAI from "./components/Buttons/ButtonAI";
import NavInModal from "./components/NavInModal";
import SortMenuModal from "./components/SortMenuModal/SortMenuModal";
import SearchResults from "./components/SearchResults/SearchResults";

export default function SearchModal() {
  const [query, setQuery] = useState("");
  const { workspaceName, projectName } = useData();
  const { formData: taskData } = useTaskFormContext();

  const results = searchItems(query, {
    workspaceName,
    projectName,
    taskName: taskData.taskName,
    details: taskData.details,
  });
  return (
    <>
      <div className="flex-row w-full">
        <div className="flex items-center w-auto mx-3 mt-3 mb-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
