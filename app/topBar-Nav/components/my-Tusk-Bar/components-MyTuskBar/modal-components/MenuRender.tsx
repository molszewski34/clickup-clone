"use client";

import { useState } from "react";
// Importing components that will be rendered based on the active tab
import Activity from "./menu-render-components/Activity";
import MyWork from "./menu-render-components/MyWork";
import Assig from "./menu-render-components/Assig";
import Calendar from "./menu-render-components/Calendar";
// Importing type definitions for tab names and components
import { MyTuskTabName, MyTuskTabComponents } from "../../../type";

export default function MenuRender() {
  // useState hook to keep track of the active tab, initial tab is "Activity"
  const [activeTab, setActiveTab] = useState<MyTuskTabName>("Activity");

  // Function to dynamically set the CSS classes for each tab button based on the active tab
  const tabClasses = (tabName: MyTuskTabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      // If the tab is active, apply blue color and underline
      activeTab === tabName
        ? "text-blue-500 border-b-2 border-blue-500 cursor-default"
        : // If the tab is not active, apply gray color and transparent underline, with hover effect
          "text-gray-500 border-b-2 border-transparent hover:border-gray-300"
    }`;

  // An object that maps tab names to their corresponding components
  const tabComponents: MyTuskTabComponents = {
    Activity: <Activity />,
    MyWork: <MyWork />,
    Assig: <Assig />,
    Calendar: <Calendar />,
  };

  return (
    <>
      {/* Tab buttons: each button switches the active tab when clicked */}
      <div className="flex relative items-center justify-between">
        <div className="flex items-center gap-6 h-12 px-8 ">
          {/* Each button has a class from tabClasses based on whether it's active */}
          <button
            className={tabClasses("Activity")}
            onClick={() => setActiveTab("Activity")} // Set the active tab to "Activity"
          >
            Activity
          </button>
          <button
            className={tabClasses("MyWork")}
            onClick={() => setActiveTab("MyWork")} // Set the active tab to "MyWork"
          >
            My Work
          </button>
          <button
            className={tabClasses("Assig")}
            onClick={() => setActiveTab("Assig")} // Set the active tab to "Assig"
          >
            Assigned
          </button>
          <button
            className={tabClasses("Calendar")}
            onClick={() => setActiveTab("Calendar")} // Set the active tab to "Calendar"
          >
            Calendar
          </button>
        </div>
      </div>
      {/* Divider line between the tabs and content */}
      <div className="w-full h-px bg-gray-200" />

      {/* Render the component corresponding to the active tab */}
      {/* If no component matches the active tab, display an error message */}
      {tabComponents[activeTab] || <div>Error</div>}
    </>
  );
}
