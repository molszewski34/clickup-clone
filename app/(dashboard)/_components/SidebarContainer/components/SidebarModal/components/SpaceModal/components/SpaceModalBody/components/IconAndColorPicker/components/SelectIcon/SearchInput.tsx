import React from "react";
import { Icons } from "@/icons/icons";

export function SearchInput({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative flex items-center cursor-pointer ml-[10px] w-3/5 border rounded-full border-gray-200 pl-[10px] pr-[6px]">
      <div className="mr-[14px]">
        <Icons.SearchIcon className="text-[13px] text-gray-500" />
      </div>
      <input
        type="search"
        placeholder="Search avatars"
        className="h-6 w-full font-sans text-gray-400 text-sm focus:outline-none caret-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
