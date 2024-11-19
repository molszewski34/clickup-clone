"use client";

import { useState } from "react";

import Activity from "./menu-render-components/Activity";
import MyWork from "./menu-render-components/MyWork";
import Assig from "./menu-render-components/Assig";
import Calendar from "./menu-render-components/Calendar";

export default function MenuRender() {
  const [activeTab, setActiveTab] = useState("Activity");

  const tabClasses = (tabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      activeTab === tabName
        ? "text-blue-500 border-b-2 border-blue-500 cursor-default"
        : "text-gray-500 border-b-2 border-transparent hover:border-gray-300"
    }`;

  // Maping components we will render
  const tabComponents = {
    Activity: <Activity />,
    MyWork: <MyWork />,
    Assig: <Assig />,
    Calendar: <Calendar />,
  };

  return (
    <>
      <div className="flex relative items-center justify-between">
        <div className="flex items-center gap-6 h-12 px-8 ">
          <button
            className={tabClasses("Activity")}
            onClick={() => setActiveTab("Activity")}
          >
            Activity
          </button>
          <button
            className={tabClasses("MyWork")}
            onClick={() => setActiveTab("MyWork")}
          >
            My Work
          </button>
          <button
            className={tabClasses("Assig")}
            onClick={() => setActiveTab("Assig")}
          >
            Assigned
          </button>
          <button
            className={tabClasses("Calendar")}
            onClick={() => setActiveTab("Calendar")}
          >
            Calendar
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200" />

      {/* render a component depending on the active button */}
      {tabComponents[activeTab] || <div>Error</div>}
    </>
  );
}
