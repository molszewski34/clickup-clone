"use client";
import React, { useState } from "react";
import ButtonWriting from "./components/ButtonWriting";
import LastLineButtons from "../../../../components/LastLineButtons";
import UniversalButton from "../../../../components/UniversalButton";
import { Icons } from "@/icons/icons";

export default function DocElement() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="pt-6">
        <div className="flex items-center px-6 gap-2 mb-3">
          <UniversalButton
            IconComponent1={Icons.ListPlusIcon}
            text="Personal List"
            IconComponent2={Icons.ArrowDownIcon}
          />
        </div>
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
        <LastLineButtons
          showCheckbox={true}
          checkboxLabel="Private"
          actionButtonText="Create Doc"
        />
      </div>
    </>
  );
}
