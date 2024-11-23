"use client";
import React, { useState } from "react";
import FirstLineButtons from "./chat-components/FirstLineButtons";
import LineButtonsAfterClick from "./chat-components/LineButtonsAfterClick";
import LastLineButtons from "./chat-components/LastLineButtons";

export default function Chat() {
  // State to store the query input (chat name)
  const [query, setQuery] = useState("");

  // State to manage whether the message input field is focused or not
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Function to handle changes in the query input (chat name)
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value); // Update the query state with the new input value
  };

  // Function to handle when the message input field is focused
  const handleFocus = () => {
    setIsInputFocused(true); // Set focus state to true when the input field is focused
  };

  // Function to handle when the message input field loses focus
  const handleBlur = () => {
    setIsInputFocused(false); // Set focus state to false when the input field loses focus
  };

  return (
    <>
      <div className="pt-6">
        {/* First line of buttons related to the chat */}
        <FirstLineButtons />

        {/* Input field for naming the chat */}
        <div className="flex items-center w-auto mx-6 mb-3">
          <input
            type="text"
            value={query} // Bind the value of input to the query state
            onChange={handleInputChange} // Update query state on input change
            placeholder="Name this Chat..." // Placeholder for chat name input
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>

        {/* Message input field */}
        <div
          className={`flex items-start w-auto mx-6 transition-all duration-300 ${
            isInputFocused ? "h-20" : "h-[61px]"
          }`}
        >
          <input
            type="text"
            placeholder="Add message" // Placeholder text for adding a message
            className="w-full h-6 text-sm rounded-lg text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
            onFocus={handleFocus} // Trigger focus state on focus
            onBlur={handleBlur} // Trigger blur state when focus is lost
          />
        </div>

        {/* Render line buttons after input is focused */}
        {isInputFocused && <LineButtonsAfterClick />}

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200" />

        {/* Last line of buttons related to chat actions */}
        <LastLineButtons />
      </div>
    </>
  );
}
