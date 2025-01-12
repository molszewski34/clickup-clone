"use client";

import { useState } from "react";
import Activity from "./components/Activity";
import MyWork from "./components/MyWork";
import Assig from "./components/Assig";
import Calendar from "./components/Calendar";
import {
  TaskTabComponents,
  TaskTabName,
} from "@/app/(dashboard)/_components/TopbarNav/components/type";

export default function MenuRender() {
  const [activeTab, setActiveTab] = useState<TaskTabName>("Activity");

  const tabClasses = (tabName: TaskTabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      activeTab === tabName
        ? "text-blue-500 border-b-2 border-blue-500 cursor-default"
        : "text-gray-500 border-b-2 border-transparent hover:border-gray-300"
    }`;

  const tabComponents: TaskTabComponents = {
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
      {tabComponents[activeTab] || <div>Error</div>}
    </>
  );
}
