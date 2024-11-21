"use client";

import { useState } from "react";
import Tusk from "./modal-components/Tusk";
import Doc from "./modal-components/Doc";
import Reminder from "./modal-components/Reminder";
import Chat from "./modal-components/Chat";
import Dashboard from "./modal-components/Dashboard";
import Whiteboard from "./modal-components/Whiteboard";
import { ModalTabName, ModalTabComponents, NewModalProps } from "../../type";

export default function NewItemModal({ onClose, defaultTab }: NewModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTabName>(defaultTab);

  // Funkcja dla klas CSS zakładek
  const tabClasses = (tabName: ModalTabName) =>
    `flex items-center font-sans font-medium h-[47px] text-sm/4 text-center ${
      activeTab === tabName
        ? "text-gray-800 border-b-2 border-blue-500 cursor-default"
        : "text-gray-500 border-b-2 border-transparent hover:border-gray-300"
    }`;

  // Obiekt mapujący zakładki na komponenty
  const tabComponents: ModalTabComponents = {
    Task: <Tusk />,
    Doc: <Doc />,
    Reminder: <Reminder />,
    Chat: <Chat />,
    Whiteboard: <Whiteboard />,
    Dashboard: <Dashboard />,
  };

  return (
    <>
      <div className="flex relative items-center justify-between">
        <div className="flex items-center gap-6 h-12 px-6 ">
          <button
            className={tabClasses("Task")}
            onClick={() => setActiveTab("Task")}
          >
            Task
          </button>
          <button
            className={tabClasses("Doc")}
            onClick={() => setActiveTab("Doc")}
          >
            Doc
          </button>
          <button
            className={tabClasses("Reminder")}
            onClick={() => setActiveTab("Reminder")}
          >
            Reminder
          </button>
          <button
            className={tabClasses("Chat")}
            onClick={() => setActiveTab("Chat")}
          >
            Chat
          </button>
          <button
            className={tabClasses("Whiteboard")}
            onClick={() => setActiveTab("Whiteboard")}
          >
            Whiteboard
          </button>
          <button
            className={tabClasses("Dashboard")}
            onClick={() => setActiveTab("Dashboard")}
          >
            Dashboard
          </button>
        </div>
        {/* Przycisk do zamknięcia modala */}
        <button
          className="absolute flex justify-center items-center p-[10px] top-2 right-2 rounded-lg hover:bg-gray-200 w-8 h-8"
          onClick={onClose} // użycie funkcji do zamknięcia modala
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10px"
            className="fill-gray-500"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8-9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </div>
      <div className="w-full h-px bg-gray-200" />
      {/* Renderowanie komponentu na podstawie aktywnej zakładki */}
      {tabComponents[activeTab] || <div>Error</div>}
    </>
  );
}
