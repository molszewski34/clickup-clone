"use client";
import { SetStateAction, useState } from "react";
import ButtonAI from "./components/Buttons/ButtonAI";
import NavInModal from "./components/NavInModal";
import SortMenuModal from "./components/SortMenuModal/SortMenuModal";
import SearchResults from "./components/SearchResults/SearchResults";

export default function SearchModal() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
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
        <SearchResults />
      </div>
    </>
  );
}
