"use client";
import React, { useState } from "react";
import FirstLineButtons from "./doc-components/FirstLineButtons";
import ButtonWriting from "./doc-components/ButtonWriting";
import LastLineButtons from "./doc-components/LastLineButtons";

export default function Doc() {
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
            placeholder="Name this Doc... "
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>
        <ButtonWriting />
        <div className="w-full h-px bg-gray-200 mt-6" />
        <LastLineButtons />
      </div>
    </>
  );
}
