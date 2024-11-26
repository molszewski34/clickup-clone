"use client";
import React, { useState } from "react";
import FirstLineButtons from "./dashboard-components/FirstLineButtons";
import LastLineButtons from "./dashboard-components/LastLineButtons";

export default function Dashboard() {
  // State to store the input query for the dashboard's name
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
        {/* First line of buttons related to the dashboard */}
        <FirstLineButtons />

        {/* Input field for naming the dashboard */}
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query} // Bind the input value to the query state
            onChange={handleInputChange} // Update state on input change
            placeholder="Name this Dashboard..." // Placeholder text for the input field
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 mt-20" />

        {/* Last line of buttons related to dashboard actions */}
        <LastLineButtons />
      </div>
    </>
  );
}
