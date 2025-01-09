import React from "react";
import { Icons } from "@/icons/icons";

const SearchBar: React.FC = () => (
  <div className="flex gap-2 px-[11px] group/in h-6 items-center border rounded-lg border-gray-200 hover:bg-gray-100 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
    <input
      type="text"
      placeholder="Search..."
      className="border-none focus:outline-none w-16 text-sm font-sans text-gray-800 group-hover/in:bg-gray-100"
    />
    <div className="flex justify-center items-center w-5 h-5 rounded-md hover:bg-gray-100">
      <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
    </div>
  </div>
);

export default SearchBar;
