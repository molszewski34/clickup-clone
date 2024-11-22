"use client";

import { SearchResult, IconMap } from "../../../../type"; // Importing types for search result and icon map
import ButtonAiResults from "../button/ButtonAiResults"; // Button component for AI results
import ButtonAttach from "../button/ButtonAttach"; // Button component for attaching
import ButtonEnter from "../button/ButtonEnter"; // Button component for entering
import ButtonNewTab from "../button/ButtonNewTab"; // Button component for opening in a new tab
import ButtonTab from "../button/ButtonTab"; // Button component for tabs

interface SearchResultItemProps {
  item: SearchResult; // Props to pass the search result item
  iconMap: IconMap; // Icon map to choose the correct icon based on item type
}

const SearchResultItem = ({ item, iconMap }: SearchResultItemProps) => {
  const Icon = iconMap[item.type]; // Assign the icon based on the result type

  return (
    <div className="flex items-center group">
      <div className="flex items-center justify-between w-full hover:bg-gray-100">
        <button className="flex items-center w-full">
          <div className="flex justify-center items-center w-[60px] h-[60px] p-3">
            {Icon && <Icon />} {/* Render the icon if it exists */}
          </div>
          <div className="flex-row font-sans">
            <div className="text-sm text-gray-900 font-medium text-left">
              {item.title} {/* Display the title of the search result */}
            </div>
            <div className="flex gap-1 w-auto text-xs text-gray-600">
              {/* Display the type, space, category, and updated time of the result */}
              <span>{item.type}</span>
              <span>&#8226;</span>
              <span>{item.space}</span>
              <span>/</span>
              <span>{item.category}</span>
              <span>&#8226;</span>
              <span>{item.updated}</span>
            </div>
          </div>
        </button>
        <div className="flex gap-2 pr-3 w-auto opacity-0 group-hover:opacity-100">
          {/* Conditional rendering of buttons based on the type of the result */}
          {item.type === "Doc" ? <ButtonAiResults /> : <ButtonTab />}
          <ButtonAttach />
          <ButtonNewTab />
          <ButtonEnter />
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
