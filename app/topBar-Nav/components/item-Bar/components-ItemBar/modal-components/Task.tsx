"use client";
import React, { useState } from "react";
import ButtonDescrition from "./task-components/ButtonDescription";
import FirstLineButtons from "./task-components/FirstLineButtons";
import SecondLineButtons from "./task-components/SecondLineButtons";
import LastLineButtons from "./task-components/LastLineButtons";
import { Icons } from "@/icons/icons";

export default function Task() {
  // State to store the input query for the task's name or command
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
        {/* First line of buttons (likely action buttons for the task) */}
        <FirstLineButtons />

        {/* Input field for naming the task or typing commands */}
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query} // Set the input's value to the current state
            onChange={handleInputChange} // Trigger state update on input change
            placeholder="Tusk name or type '/' for commands" // Placeholder text guiding the user
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Description button or information related to the task */}
        <ButtonDescrition />

        {/* Second line of buttons for additional task actions */}
        <SecondLineButtons />

        {/* Section for custom fields related to the task */}
        <div className="p-6 pt-[14px]">
          {/* Label for the custom fields section */}
          <div className="flex items-center h-[34px] w-full mb-2 font-sans text-xs font-medium text-gray-500">
            Custom Fields
          </div>

          {/* Button to create a new custom field */}
          <button className="flex gap-1 h-6 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 px-[7px] mt-4 ">
            {/* Icon for adding a new custom field */}
            <Icons.PlusIcon className="text-[16px] text-gray-600" />
            <div className="flex items-center text-xs font-sans font-medium text-gray-600">
              Create new field
            </div>
          </button>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200" />

        {/* Last line of buttons for finalizing the task or performing actions */}
        <LastLineButtons />
      </div>
    </>
  );
}
