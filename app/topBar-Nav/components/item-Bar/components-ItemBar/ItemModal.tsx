"use client";

import { useState } from "react";
import Task from "./modal-components/Task";
import Doc from "./modal-components/Doc";
import Reminder from "./modal-components/Reminder";
import Chat from "./modal-components/Chat";
import Dashboard from "./modal-components/Dashboard";
import Whiteboard from "./modal-components/Whiteboard";
import { ModalTabName, NewModalProps } from "../../type";
import IconClose from "../../icon/IconClose";

export default function ItemModal({ onClose, defaultTab }: NewModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTabName>(defaultTab); // State to track active tab

  // List of tab names and their corresponding components
  const tabs = [
    { name: "Task", component: <Task /> },
    { name: "Doc", component: <Doc /> },
    { name: "Reminder", component: <Reminder /> },
    { name: "Chat", component: <Chat /> },
    { name: "Whiteboard", component: <Whiteboard /> },
    { name: "Dashboard", component: <Dashboard /> },
  ];

  // Function for generating the CSS classes for each tab
  const tabClasses = (tabName: ModalTabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      activeTab === tabName
        ? "text-gray-800 border-b-2 border-blue-500 cursor-default" // Active tab styles
        : "text-gray-500 border-b-2 border-transparent hover:border-gray-300" // Inactive tab styles
    }`;

  return (
    <>
      <div className="flex relative items-center justify-between">
        {/* Tab buttons */}
        <div className="flex items-center gap-6 h-12 px-6 ">
          {tabs.map(({ name }) => (
            <button
              key={name}
              className={tabClasses(name as ModalTabName)}
              onClick={() => setActiveTab(name as ModalTabName)} // Change the active tab when clicked
            >
              {name}
            </button>
          ))}
        </div>
        {/* Close button for the modal */}
        <button
          className="absolute flex justify-center items-center p-[10px] top-1 right-1 rounded-lg hover:bg-gray-200"
          onClick={onClose} // Calls the function to close the modal
        >
          {/* Close icon */}
          <IconClose size="16" color="gray-300" />
        </button>
      </div>
      <div className="w-full h-px bg-gray-200" />
      {/* Render the component based on the active tab */}
      {tabs.find((tab) => tab.name === activeTab)?.component || (
        <div>Error</div>
      )}{" "}
      {/* Default Error if no component found */}
    </>
  );
}
