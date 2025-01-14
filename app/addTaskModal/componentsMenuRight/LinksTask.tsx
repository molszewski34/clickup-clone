import { Icons } from "@/icons/icons";
import { useState } from "react";

export default function LinksTask() {
  const [activeButton, setActiveButton] = useState<"squares" | "list" | null>(
    "squares"
  );

  const handleButtonClick = (button: "squares" | "list") => {
    setActiveButton((prev) => (prev === button ? null : button));
  };

  return (
    <>
      <div className="flex justify-between  px-6 py-3   items-center h-16 border-b border-gray-200">
        <div className=" font-sans text-xl/5 text-gray-900 font-semibold">
          Links
        </div>
        <div className="flex border border-gray-200 overflow-hidden rounded-lg">
          <button
            className={`px-2 min-h-8 min-w-8 ${
              activeButton === "squares" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            onClick={() => handleButtonClick("squares")}
          >
            <Icons.SquaresFour
              className={`text-[20px] ${
                activeButton === "squares" ? "text-gray-700" : "text-gray-500"
              }`}
            />
          </button>

          <button
            className={`px-2 min-h-8 min-w-8 ${
              activeButton === "list" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            onClick={() => handleButtonClick("list")}
          >
            <Icons.ListUlicon
              className={`text-[16px] ${
                activeButton === "list" ? "text-gray-700" : "text-gray-500"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
