"use client";
import React, { useState } from "react";
import FirstLineButtons from "./doc-components/FirstLineButtons";
import ButtonWriting from "./doc-components/ButtonWriting";
import LastLineButtons from "./doc-components/LastLineButtons";

export default function Doc() {
  // State to store the input query for the document's name
  const [query, setQuery] = useState("");

  // Function to handle changes in the input field and update the state
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value); // Update the state with the new input value
  };

  return (
    <>
      <div className="pt-6">
        {/* First line of buttons related to the document */}
        <FirstLineButtons />

        {/* Input field for naming the document */}
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query} // Bind the input value to the query state
            onChange={handleInputChange} // Update state on input change
            placeholder="Name this Doc... " // Placeholder text for the input field
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Component responsible for document writing actions */}
        <ButtonWriting />

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 mt-6" />

        {/* Last line of buttons related to document actions */}
        <LastLineButtons />
      </div>
    </>
  );
}
