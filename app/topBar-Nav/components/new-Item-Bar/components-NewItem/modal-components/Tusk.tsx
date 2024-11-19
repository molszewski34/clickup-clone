"use client";
import React, { useState } from "react";
import ButtonDescrition from "./tusk-components/ButtonDescription";
import FirstLineButtons from "./tusk-components/FirstLineButtons";
import SecondLineButtons from "./tusk-components/SecondLineButtons";
import LastLineButtons from "./tusk-components/LastLineButtons";

export default function Tusk() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-gray-600"
              height="12px"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
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
