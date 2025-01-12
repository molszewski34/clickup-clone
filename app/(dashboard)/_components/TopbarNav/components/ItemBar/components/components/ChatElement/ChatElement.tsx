"use client";
import React, { useState } from "react";
import FirstLineButtons from "./components/FirstLineButtons";
import LineButtonsAfterClick from "./components/LineButtonsAfterClick";
import LastLineButtons from "./components/LastLineButtons";

export default function ChatElement() {
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
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
            placeholder="Name this Chat..."
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        <div
          className={`flex items-start w-auto mx-6 transition-all duration-300 ${
            isInputFocused ? "h-20" : "h-[61px]"
          }`}
        >
          <input
            type="text"
            placeholder="Add message"
            className="w-full h-6 text-sm rounded-lg text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {isInputFocused && <LineButtonsAfterClick />}

        <div className="w-full h-px bg-gray-200" />

        <LastLineButtons />
      </div>
    </>
  );
}
