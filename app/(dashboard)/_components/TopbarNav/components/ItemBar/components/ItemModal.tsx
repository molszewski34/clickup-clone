"use client";
import { useState } from "react";
import { ModalTabName, NewModalProps } from "../../type";
import { Icons } from "@/icons/icons";
import Task from "./components/Task/Task";
import DocElement from "./components/DocElement/DocElement";
import Reminder from "./components/Reminder/Reminder";
import ChatElement from "./components/ChatElement/ChatElement";
import Whiteboard from "./components/Whiteboard/Whiteboard";
import Dashboard from "./components/Dashboard/Dashboard";

export default function ItemModal({ onClose, defaultTab }: NewModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTabName>(defaultTab);

  const tabs = [
    { name: "Task", component: <Task /> },
    { name: "Doc", component: <DocElement /> },
    { name: "Reminder", component: <Reminder /> },
    { name: "Chat", component: <ChatElement /> },
    { name: "Whiteboard", component: <Whiteboard /> },
    { name: "Dashboard", component: <Dashboard /> },
  ];

  const tabClasses = (tabName: ModalTabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      activeTab === tabName
        ? "text-gray-800 border-b-2 border-blue-500 cursor-default"
        : "text-gray-500 border-b-2 border-transparent hover:border-gray-300"
    }`;

  return (
    <>
      <div className="flex relative items-center justify-between">
        <div className="flex items-center gap-6 h-12 px-6 ">
          {tabs.map(({ name }) => (
            <button
              key={name}
              className={tabClasses(name as ModalTabName)}
              onClick={() => setActiveTab(name as ModalTabName)}
            >
              {name}
            </button>
          ))}
        </div>
        <button
          className="absolute flex justify-center items-center p-[10px] top-1 right-1 rounded-lg hover:bg-gray-200"
          onClick={onClose}
        >
          <Icons.CloseIcon className="text-[16px] text-gray-300" />
        </button>
      </div>
      <div className="w-full h-px bg-gray-200" />
      {tabs.find((tab) => tab.name === activeTab)?.component || (
        <div>Error</div>
      )}{" "}
    </>
  );
}
