import { Icons } from "@/icons/icons";
import { useState } from "react";
import ActivityTask from "./componentsMenuRight/ActivityTask";
import LinksTask from "./componentsMenuRight/LinksTask";
import RelationshipTask from "./componentsMenuRight/RelationshipTask";

export default function MenuRightTask() {
  const [activeButton, setActiveButton] = useState("activity");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleActivityClick = () => {
    if (activeButton === "activity") {
      setIsCollapsed((prev) => !prev);
    } else {
      setActiveButton("activity");
      setIsCollapsed(false);
    }
  };

  return (
    <>
      <div
        className={`relative flex flex-col h-full overflow-hidden bg-gray-50 border-l border-gray-200 transition-all duration-300 ${
          isCollapsed ? "w-0" : "w-[420px]"
        }`}
      >
        {activeButton === "activity" && <ActivityTask />}
        {activeButton === "links" && <LinksTask />}
        {activeButton === "relationships" && <RelationshipTask />}
      </div>
      <div className="flex px-2 py-3 flex-col h-full w-[60px] overflow-hidden bg-gray-50 border-l border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full gap-1 h-auto flex-col justify-center items-center">
            <button
              className={`flex justify-center min-h-8 min-w-8 items-center rounded-lg ${
                activeButton === "activity"
                  ? "bg-blue-200 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={handleActivityClick}
            >
              <Icons.CommentIcon
                className={`text-[16px] ${
                  activeButton === "activity"
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              />
            </button>
            <div
              className={`font-sans text-[10px] leading-3 font-medium ${
                activeButton === "activity" ? "text-blue-600" : "text-gray-900"
              }`}
            >
              Activity
            </div>
          </div>

          <div className="h-px w-full bg-gray-200"></div>

          <div className="flex w-full gap-1 h-auto flex-col justify-center items-center">
            <button
              className={`flex justify-center min-h-8 min-w-8 items-center rounded-lg ${
                activeButton === "links"
                  ? "bg-blue-200 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveButton("links")}
            >
              <Icons.AttachIcon
                className={`text-[16px] ${
                  activeButton === "links" ? "text-blue-600" : "text-gray-500"
                }`}
              />
            </button>
          </div>

          <div className="h-px w-full bg-gray-200"></div>

          <div className="flex w-full gap-1 h-auto flex-col justify-center items-center">
            <button
              className={`flex justify-center min-h-8 min-w-8 items-center rounded-lg ${
                activeButton === "relationships"
                  ? "bg-blue-200 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveButton("relationships")}
            >
              <Icons.PlusIcon
                className={`text-[16px] ${
                  activeButton === "relationships"
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              />
            </button>
            <div
              className={`font-sans text-[10px] leading-3 font-medium ${
                activeButton === "relationships"
                  ? "text-blue-600"
                  : "text-gray-900"
              }`}
            >
              More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
