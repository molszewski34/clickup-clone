"use client";
import React, { useState } from "react";
import ButtonList from "./components/ButtonList";
import LastLineButtons from "../../../../components/LastLineButtons";

export default function Reminder() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="pt-6">
        <div className="flex items-center w-auto mx-6 mb-6">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Reminder name or type '/' for commands "
            className="w-full h-6 text-lg/6 rounded-lg font-medium text-gray-600 font-sans pl-1 border-2 border-none mr-auto focus:outline-none"
          />
        </div>
        <ButtonList />
        <div className="w-full h-px bg-gray-200 mt-20" />
        <LastLineButtons
          showAttachmentButtonS={true}
          checkboxLabel="Private"
          actionButtonText="Create Reminder"
        />
      </div>
    </>
  );
}
