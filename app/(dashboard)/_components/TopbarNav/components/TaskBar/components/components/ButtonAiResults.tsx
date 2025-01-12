"use client";
import IconAI from "../../../icon/IconAI";

export default function ButtonAiResults() {
  return (
    <>
      <button className="flex w-full justify-center gap-1 items-center bg-blue-500 hover:bg-blue-600 border border-gray-200 px-3 rounded-md flow-hidden h-8 mb-8">
        <IconAI width="16" className="fill-[url(#custom-gradient)]" />

        <div className="w-auto outline-none text-white font-semibold text-sm ml-1 font-sans">
          Write StandUp
        </div>
      </button>
    </>
  );
}
