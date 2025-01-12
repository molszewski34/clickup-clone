"use client";

import IconAI from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconAI";

export default function ButtonAiMenu() {
  return (
    <>
      <button className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 opacity-90 group px-3 -mr-3  mb-0 rounded-br-md rounded-tr-md flow-hidden h-7 w-auto">
        <IconAI
          width="16px"
          className="fill-white -ml-1 group-hover:fill-[url(#custom-gradient)]"
        />
        <div className="w-auto bg-transparent outline-none text-white opacity-90 hover:bg-opacity-20 text-sm/[16px] ml-1 text-left font-sans">
          AI
        </div>
      </button>
    </>
  );
}
