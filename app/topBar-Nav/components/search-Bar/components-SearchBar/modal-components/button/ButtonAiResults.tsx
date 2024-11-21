"use client";
import IconAI from "../../../../icon/IconAI";

export default function ButtonAiResults() {
  return (
    <>
      <button className="flex w-[87px] items-center bg-blue-50 border border-gray-200  opacity-90 px-3 rounded-md flow-hidden h-[32px] ">
        <IconAI width="16px" className="fill-[url(#custom-gradient)]" />
        <div className=" w-auto bg-transparent outline-none text-transparent bg-clip-text bg-text-gradient text-gray-400 font-semibold opacity-90 bg-opacity-20 text-sm/[16px] ml-1 text-left font-sans">
          Ask AI
        </div>
      </button>
    </>
  );
}
