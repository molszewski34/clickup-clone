"use client";
import React, { useState } from "react";
import ButtonDescrition from "./tusk-components/ButtonDescription";
import FirstLineButtons from "./tusk-components/FirstLineButtons";
import SecondLineButtons from "./tusk-components/SecondLineButtons";
import LastLineButtons from "./tusk-components/LastLineButtons";
import { FaPlus } from "react-icons/fa6";

export default function Tusk() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="pt-6">
        <FirstLineButtons />
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Tusk name or type '/' for commands"
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>
        <ButtonDescrition />
        <SecondLineButtons />
        <div className="p-6 pt-[14px]">
          <div className="flex items-center h-[34px] w-full mb-2 font-sans text-xs font-medium text-gray-500">
            Custom Fields
          </div>
          <button className="flex gap-1 h-6 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 px-[7px] mt-4 ">
            <FaPlus className="w-3 h-3 text-gray-600" />
            <div className="flex items-center text-xs font-sans font-medium text-gray-600">
              Create new field
            </div>
          </button>
        </div>
        <div className="w-full h-px bg-gray-200" />
        <LastLineButtons />
      </div>
    </>
  );
}
