import { Icons } from "@/icons/icons";
import { SetStateAction, useState } from "react";

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

  const toggleVisibility = (section: keyof typeof visibility) => {
    setVisibility({ ...visibility, [section]: !visibility[section] });
  };

  return (
    <>
      <div className="h-[576px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
        <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
          My Work
          <div className="hidden gap-1 group-hover:flex">
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.SettingsIcon className="text-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.FullScreen className="text-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
            </button>
          </div>
        </div>

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
            {activeTab === "To Do" && (
              <div>
                <div className="flex flex-col group/plus">
                  <div
                    className="flex items-center justify-between mx-4 mt-4 cursor-pointer"
                    onClick={() => toggleVisibility("today")}
                  >
                    <div className="flex h-6 items-center w-full gap-2">
                      <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
                        <Icons.PlayWorkspace
                          className={`text-[14px] text-gray-700 ${
                            visibility.today ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="items-center font-sans text-sm text-gray-700 font-medium rounded-md">
                        Today
                      </div>
                      <div className="items-center font-sans text-xs m-2 text-gray-500 font-medium rounded-md">
                        0
                      </div>
                      <div className="hidden justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100 group-hover/plus:flex">
                        <Icons.PlusNew className="text-[14px] text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      visibility.today ? "flex" : "hidden"
                    } items-center px-3 h-10 font-sans text-sm text-gray-400`}
                  >
                    Tasks and reminders assigned to you will show here.
                  </div>
                </div>
                <div className="flex flex-col group/plus">
                  <div
                    className="flex items-center justify-between mx-4 mt-4 cursor-pointer"
                    onClick={() => toggleVisibility("overdue")}
                  >
                    <div className="flex h-6 items-center w-full gap-2">
                      <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
                        <Icons.PlayWorkspace
                          className={`text-[14px] text-gray-700 ${
                            visibility.overdue ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="items-center font-sans text-sm text-gray-700 font-medium rounded-md">
                        Overdue
                      </div>
                      <div className="items-center font-sans text-xs m-2 text-gray-500 font-medium rounded-md">
                        0
                      </div>
                      <div className="hidden justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100 group-hover/plus:flex">
                        <Icons.PlusNew className="text-[14px] text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      visibility.overdue ? "flex" : "hidden"
                    } items-center px-3 h-10 font-sans text-sm text-gray-400`}
                  >
                    No overdue tasks or reminders scheduled.
                  </div>
                </div>
                <div className="flex flex-col group/plus">
                  <div
                    className="flex items-center justify-between mx-4 mt-4 cursor-pointer"
                    onClick={() => toggleVisibility("next")}
                  >
                    <div className="flex h-6 items-center w-full gap-2">
                      <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
                        <Icons.PlayWorkspace
                          className={`text-[14px] text-gray-700 ${
                            visibility.next ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="items-center font-sans text-sm text-gray-700 font-medium rounded-md">
                        Next
                      </div>
                      <div className="items-center font-sans text-xs m-2 text-gray-500 font-medium rounded-md">
                        0
                      </div>
                      <div className="hidden justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100 group-hover/plus:flex">
                        <Icons.PlusNew className="text-[14px] text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      visibility.next ? "flex" : "hidden"
                    } items-center px-3 h-10 font-sans text-sm text-gray-400`}
                  >
                    No upcoming tasks or reminders scheduled.
                  </div>
                </div>
                <div className="flex flex-col group/plus">
                  <div
                    className="flex items-center justify-between mx-4 mt-4 cursor-pointer"
                    onClick={() => toggleVisibility("unscheduled")}
                  >
                    <div className="flex h-6 items-center w-full gap-2">
                      <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
                        <Icons.PlayWorkspace
                          className={`text-[14px] text-gray-700 ${
                            visibility.unscheduled ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="items-center font-sans text-sm text-gray-700 font-medium rounded-md">
                        Unscheduled
                      </div>
                      <div className="items-center font-sans text-xs m-2 text-gray-500 font-medium rounded-md">
                        0
                      </div>
                      <div className="hidden justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100 group-hover/plus:flex">
                        <Icons.PlusNew className="text-[14px] text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      visibility.unscheduled ? "flex" : "hidden"
                    } items-center px-3 h-10 font-sans text-sm text-gray-400`}
                  >
                    No unscheduled tasks or reminders scheduled.
                  </div>
                </div>
              </div>
            )}

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
      </div>
    </>
  );
}
