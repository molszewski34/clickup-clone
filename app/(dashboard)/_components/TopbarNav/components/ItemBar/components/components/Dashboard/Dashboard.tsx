"use client";
import React, { useState } from "react";
import FirstLineButtons from "../Task/components/FirstLineButtons";
import LastLineButtons from "../Task/components/LastLineButtons";

export default function Dashboard() {
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
            placeholder="Name this Dashboard..."
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        <div className="w-full h-px bg-gray-200 mt-20" />

        <LastLineButtons />
      </div>
    </>
  );
}
