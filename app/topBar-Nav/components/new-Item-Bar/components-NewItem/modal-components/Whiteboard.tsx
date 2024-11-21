"use client";
import React, { useState } from "react";
import FirstLineButtons from "./whiteboard-components/FirstLineButtons";
import LastLineButtons from "./whiteboard-components/LastLineButtons";

export default function Whiteboard() {
  // State to store the input query for the whiteboard's name
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
        {/* First line of buttons (likely some action buttons) */}
        <FirstLineButtons />

        {/* Input field for naming the whiteboard */}
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query} // Set the input's value to the current state
            onChange={handleInputChange} // Trigger state update on input change
            placeholder="Name this Whiteboard..." // Placeholder text
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 mt-20" />

        {/* Last line of buttons (likely some actions to finalize or interact with the whiteboard) */}
        <LastLineButtons />
      </div>
    </>
  );
}
