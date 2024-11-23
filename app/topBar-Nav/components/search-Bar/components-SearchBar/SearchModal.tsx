"use client";

import { SetStateAction, useState } from "react";
import ButtonAI from "./modal-components/button/ButtonAI";
import NavInModal from "./modal-components/NavInModal";
import SortMenuModal from "./modal-components/SortMenuModal";
import SearchResults from "./modal-components/SearchResults";

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
        {/* Search in modal */}
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
        {/* menu navigation in modal */}
        <NavInModal />
        <div className="w-full h-px bg-gray-200" />
        {/* menu sort in modal */}
        <SortMenuModal />
        <div className="flex items-center h-[34px] w-full px-4 py-1 font-sans text-xs font-medium text-gray-500">
          Results
        </div>
        <SearchResults />
      </div>
    </>
  );
}
