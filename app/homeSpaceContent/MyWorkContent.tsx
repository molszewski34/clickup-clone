import { Icons } from "@/icons/icons";
import { SetStateAction, useState } from "react";
import CardContainer from "./Components/CardContainer";
import { sections } from "./Components/ComponentsMyWorkContent/sections";

export default function MyWorkContent() {
  const [activeTab, setActiveTab] = useState("To Do");
  const [visibility, setVisibility] = useState({
    today: false,
    overdue: false,
    next: false,
    unscheduled: false,
  });

  const handleClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const toggleVisibility = (
    section: "today" | "overdue" | "next" | "unscheduled"
  ) => {
    setVisibility({ ...visibility, [section]: !visibility[section] });
  };

  return (
    <>
      <CardContainer title="My Work" NumberIcons={3} height="576px">
        <div className="flex flex-row mx-[14px] gap-2 border-b border-gray-200">
          {["To Do", "Done", "Delegated"].map((tab) => (
            <div key={tab}>
              <button
                className={`font-sans font-medium text-sm mb-2 px-1 rounded-md py-2 ${
                  activeTab === tab
                    ? "text-gray-700"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(tab)}
              >
                {tab}
              </button>
              <div
                className={`${
                  activeTab === tab ? "w-auto h-[2px] bg-gray-700" : "hidden"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="w-full h-[457px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div className="w-full" style={{ width: "calc(100%)" }}>
            {activeTab === "To Do" &&
              sections.map((section) => (
                <div key={section.key} className="flex flex-col group/plus">
                  <div
                    className="flex items-center justify-between mx-4 mt-4 cursor-pointer"
                    onClick={() => toggleVisibility(section.key)}
                  >
                    <div className="flex h-6 items-center w-full gap-2">
                      <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
                        <Icons.PlayWorkspace
                          className={`text-[14px] text-gray-700 ${
                            visibility[section.key] ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="items-center font-sans text-sm text-gray-700 font-medium rounded-md">
                        {section.name}
                      </div>
                      <div className="items-center font-sans text-xs m-2 text-gray-500 font-medium rounded-md">
                        {section.iconCount}
                      </div>
                      <div className="hidden justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100 group-hover/plus:flex">
                        <Icons.PlusNew className="text-[14px] text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      visibility[section.key] ? "flex" : "hidden"
                    } items-center px-3 h-10 font-sans text-sm text-gray-400`}
                  >
                    {section.message}
                  </div>
                </div>
              ))}
            {activeTab === "Done" && (
              <div className="font-sans text-sm font-medium text-gray-500 mt-4 mx-4">
                Przestrzeń dla zakończonych zadań.
              </div>
            )}
            {activeTab === "Delegated" && (
              <div className="font-sans text-sm font-medium text-gray-500 mt-4 mx-4">
                Przestrzeń dla zadań delegowanych.
              </div>
            )}
          </div>
        </div>
      </CardContainer>
    </>
  );
}
