import { Icons } from "@/icons/icons";
import { useState } from "react";

export default function RelationshipTask() {
  const [Link, setLink] = useState("");

  return (
    <>
      <div className="flex flex-col p-12 mb-7">
        <div className=" font-sans text-xl/5 text-gray-900 font-semibold mb-9">
          Add to this task
        </div>
        <div className=" font-sans text-base text-gray-900 font-semibold mb-4">
          Connect a URL
        </div>
        <div className="flex gap-2 h-10 px-[11px] mb-7 items-center border rounded-lg border-gray-200 group focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
          <Icons.SearchIcon className="text-[16px] text-gray-400 group-focus-within:text-blue-500" />
          <input
            type="text"
            name=""
            id=""
            value={Link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste any link..."
            className="border-none mr-auto focus:outline-none py-[7px] text-sm w-full font-sans text-gray-800"
          />
        </div>
        <div className=" font-sans text-base text-gray-900 font-semibold mb-4">
          Add Relationship
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
          <div className=" flex h-24 flex-col justify-center items-center border hover:border-gray-300 border-gray-200 rounded-lg">
            <Icons.CheckboxOutline className="text-[24px] text-gray-500 mb-3" />
            <div className=" font-sans text-xs text-gray-900 font-medium ">
              Link Task
            </div>
          </div>
          <div className=" flex h-24 flex-col justify-center items-center border hover:border-gray-300 border-gray-200 rounded-lg">
            <Icons.Stop className="text-[24px] text-gray-500 mb-3" />
            <div className=" font-sans text-xs text-gray-900 font-medium ">
              Waiting on
            </div>
          </div>
          <div className=" flex h-24 flex-col justify-center items-center border hover:border-gray-300 border-gray-200 rounded-lg">
            <Icons.Blocked className="text-[24px] text-gray-500 mb-3" />
            <div className=" font-sans text-xs text-gray-900 font-medium ">
              Blocking
            </div>
          </div>
          <div className=" flex h-24 flex-col justify-center items-center border hover:border-gray-300 border-gray-200 rounded-lg">
            <Icons.DocIcon className="text-[24px] text-gray-500 mb-3" />
            <div className=" font-sans text-xs text-gray-900 font-medium ">
              Link Doc
            </div>
          </div>
          <div className=" flex h-24 flex-col justify-center items-center border hover:border-gray-300 border-gray-200 rounded-lg">
            <Icons.PlusIcon className="text-[24px] text-gray-500 mb-3" />
            <div className=" font-sans text-xs text-gray-900 font-medium ">
              Custom
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
