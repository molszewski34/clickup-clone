"use client";

import IconAI from "../../../../icon/IconAI";

export default function ButtonAI() {
  return (
    <>
      <button className="flex items-center bg-gray-100 border border-gray-200 hover:bg-blue-50 bg-opacity-10 opacity-90 group px-3 -m-1 mb-0 rounded-md flow-hidden h-[34px] w-auto">
        <IconAI
          width="16px"
          className="fill-gray-400 -ml-1 group-hover:fill-[url(#custom-gradient)]"
        />
        <div className="w-auto bg-transparent outline-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-text-gradient text-gray-400 font-semibold opacity-90 hover:bg-opacity-20 text-sm/[16px] ml-1 text-left font-sans">
          Search with AI
        </div>
      </button>
    </>
  );
}
