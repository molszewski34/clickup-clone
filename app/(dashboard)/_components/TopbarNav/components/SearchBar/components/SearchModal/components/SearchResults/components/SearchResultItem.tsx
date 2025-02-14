"use client";
import {
  IconMap,
  SearchResult,
} from "@/app/(dashboard)/_components/TopbarNav/components/type";
import ButtonAiResults from "../../Buttons/ButtonAiResults";
import ButtonAttach from "../../Buttons/ButtonAttach";
import ButtonEnter from "../../Buttons/ButtonEnter";
import ButtonNewTab from "../../Buttons/ButtonNewTab";
import ButtonTab from "../../Buttons/ButtonTab";

interface SearchResultItemProps {
  item: SearchResult;
  iconMap: IconMap;
}

const SearchResultItem = ({ item, iconMap }: SearchResultItemProps) => {
  const Icon = iconMap[item.type];

  return (
    <div className="flex items-center group">
      <div className="flex items-center justify-between w-full hover:bg-gray-100">
        <button className="flex items-center w-full">
          <div className="flex justify-center items-center w-[60px] h-[60px] p-3">
            {Icon && <Icon />}
          </div>
          <div className="flex-row font-sans">
            <div className="text-sm text-gray-900 font-medium text-left">
              {item.title}
            </div>
            <div className="flex gap-1 w-auto text-xs text-gray-600">
              <span>{item.type}</span>
              {/* <span>&#8226;</span>
              <span>{item.space}</span>
              <span>/</span>
              <span>{item.category}</span>
              <span>&#8226;</span>
              <span>{item.updated}</span> */}
            </div>
          </div>
        </button>
        <div className="flex gap-2 pr-3 w-auto opacity-0 group-hover:opacity-100">
          {item.type === "Task" ? <ButtonAiResults /> : <ButtonTab />}
          <ButtonAttach />
          <ButtonNewTab />
          <ButtonEnter />
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
