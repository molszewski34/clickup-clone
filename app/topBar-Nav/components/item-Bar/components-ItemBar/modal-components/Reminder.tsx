"use client";
import React, { useState } from "react";
import ButtonList from "./reminder-components/ButtonList";
import LastLineButtons from "./reminder-components/LastLineButtons";

export default function Reminder() {
  // State to store the input query for the reminder's name or commands
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
        {/* Input field for naming the reminder or typing commands */}
        <div className="flex items-center w-auto mx-6 mb-6">
          <input
            type="text"
            value={query} // Set the input's value to the current state
            onChange={handleInputChange} // Trigger state update on input change
            placeholder="Reminder name or type '/' for commands " // Placeholder text guiding the user
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Button list component for the reminder actions */}
        <ButtonList />

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 mt-20" />

        {/* Last line of buttons for finalizing reminder actions */}
        <LastLineButtons />
      </div>
    </>
  );
}
