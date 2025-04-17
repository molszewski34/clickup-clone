import { Icons } from "@/icons/icons";

import IconAI from "../(dashboard)/_components/TopbarNav/components/icon/IconAI";
import ShareTaskIdButton from "./TaskTopMenu/ShareTaskIdButton";
import TaskName from "./MainContentTask/TaskName";
import Status from "./MainContentTask/Status";
import Assignees from "./MainContentTask/Assignees";
import Priority from "./MainContentTask/TaskPriority";

import Description from "./MainContentTask/Description";

export default function MainContentTask() {
  return (
    <>
      <div className="flex-grow h-full min-w-[565px] flex-col custom-scrollbar overflow-x-hidden overflow-y-auto">
        <div className="mt-6 mx-auto max-w-[970px] w-11/12 mb-12">
          <div className="flex min-h-9 items-center mb-3">
            <div className=" flex h-6 border rounded-md border-gray-200 mr-2">
              <button className="flex gap-1 items-center justify-center hover:bg-gray-100 px-[7px] py-[3px]">
                <Icons.DotIcon className="text-[12px] text-gray-500" />

                <div className="flex items-center text-xs font-sans font-medium text-gray-600">
                  Task
                </div>

                <Icons.ArrowDownIcon className="text-[12px] text-gray-500" />
              </button>
              <div className="w-px h-full bg-gray-200"></div>
              <ShareTaskIdButton />
            </div>
            <div className="flex gap-2 items-center">
              <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
                <Icons.ImageImg className="text-[16px] text-gray-700" />
              </button>
              <div className="w-px h-6 bg-gray-200 "></div>
              <button className="flex w-auto items-center h-6 bg-fuchsia-100 hover:bg-fuchsia-200 border border-gray-200  opacity-90 px-[6px] rounded-md flow-hidden  ">
                <IconAI width="12px" className="fill-[url(#custom-gradient)]" />
                <div className=" w-auto bg-transparent outline-none text-transparent bg-clip-text bg-text-gradient text-gray-400 font-semibold opacity-90 bg-opacity-20 text-xs ml-1 text-left font-sans">
                  Ask AI
                </div>
              </button>
            </div>
          </div>
          <TaskName />
          <div className=" flex justify-between w-full p-4 rounded-lg bg-fuchsia-50 mb-10 font-sans text-sm">
            <div className="flex items-center">
              <IconAI
                width="16px"
                className="fill-[url(#custom-gradient)] mr-2"
              />
              Ask Brain to
              <div className=" w-auto bg-transparent outline-none text-transparent bg-clip-text bg-text-gradient text-gray-400 font-semibold opacity-90 bg-opacity-20 text-sm mr-2 ml-2 text-left font-sans">
                write a description · create a summary · find similar tasks
              </div>
              or
              <div className=" w-auto bg-transparent outline-none text-transparent bg-clip-text bg-text-gradient text-gray-400 font-semibold opacity-90 bg-opacity-20 text-sm ml-2 text-left font-sans">
                ask about this task
              </div>
            </div>
            <div>
              <button className="flex justify-center items-center px-1 min-h-6 min-w-6 hover:bg-gray-200 rounded-lg">
                <Icons.CloseIcon className="text-[16px] text-fuchsia-500 stroke-2" />
              </button>
            </div>
          </div>
          <div className=" grid  grid-cols-2 mb-10">
            {/* <div> */}
            <Status />
            {/* 
            // * Zakomentowane elementy intereface prawie na pewno nie zostana wprowadzone.
            <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.CalendarIcon className=" text-[16px] text-gray-600" />
                  Dates
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.Hourglass className=" text-[16px] text-gray-600" />
                  Time Estimate
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.StopWatchIcon className=" text-[16px] text-gray-600" />
                  Track Time
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.Relationship className=" text-[16px] text-gray-600" />
                  Relationships
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* </div> */}
            {/* <div> */}
            <Assignees />
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
              <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                <Icons.PersonIcon className=" text-[16px] text-gray-600" />
                Assignees
              </button>
              <button className="flex items-center justify-between pl-[6px] h-9 gap-2 rounded-md group">
             
                <div className=" flex justify-center items-center w-7 h-7 bg-blue-500 text-white font-sans text-xs font-semibold rounded-full">
                  MO
                </div>
                <button className="px-1 min-h-6 min-w-6 items-center rounded-lg hidden group-hover:flex  hover:bg-gray-100">
                  <Icons.CloseIcon className="text-[16px] text-gray-500" />
                </button>
              </button>
            </div> */}
            <Priority />
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.CircleStar className=" text-[16px] text-gray-600" />
                  Sprint Points
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* <div className="grid grid-cols-[minmax(130px,1fr)_minmax(150px,2fr)] gap-1">
                <button className="flex items-center gap-2  h-9 font-sans text-sm text-gray-600">
                  <Icons.TagIcon className=" text-[16px] text-gray-600" />
                  Tags
                </button>
                <button className="flex items-center pl-[6px] h-9 gap-2 hover:bg-gray-100 rounded-md">
                  <div className=" flex items-center gap-1 h-6 px-[6px]  text-gray-500 font-sans text-sm font-medium   rounded">
                    Empty
                  </div>
                </button>
              </div> */}
            {/* </div> */}
          </div>
          <div className=" flex items-center p-3 border rounded-lg border-gray-200 mb-6">
            <Description />
          </div>
          <div className="mb-10">
            <div className="flex justify-between items-center group ">
              <div className=" py-2 font-sans text-lg text-gray-900 font-semibold ">
                Custom Fields
              </div>
              <button className="px-1 min-h-6 min-w-6 items-center rounded-lg hidden group-hover:flex  hover:bg-gray-100">
                <Icons.PlusIcon className="text-[16px] text-gray-500" />
              </button>
            </div>
            <button className="flex w-full h-10 p-2 pl-4  items-center px-[14px] font-sans text-sm font-medium text-gray-500 border border-gray-200 rounded-lg">
              <Icons.PlusIcon className="text-[14px] text-gray-500 mr-3" />{" "}
              Create Custom Field
            </button>
          </div>
          <div className="mb-10">
            <div className="flex justify-between items-center group ">
              <div className=" py-2 font-sans text-lg text-gray-900 font-semibold ">
                Subtasks
              </div>
              <button className="px-1 min-h-6 min-w-6 items-center rounded-lg hidden group-hover:flex  hover:bg-gray-100">
                <Icons.PlusIcon className="text-[16px] text-gray-500" />
              </button>
            </div>
            <button className="flex w-full h-10 p-2 pl-4  items-center px-[14px] font-sans text-sm font-medium text-gray-500 border border-gray-200 rounded-lg">
              <Icons.PlusIcon className="text-[14px] text-gray-500 mr-3" /> New
              Task
            </button>
          </div>
          <div className="mb-10">
            <div className="flex justify-between items-center group ">
              <div className=" py-2 font-sans text-lg text-gray-900 font-semibold ">
                Checklists
              </div>
              <button className="px-1 min-h-6 min-w-6 items-center rounded-lg hidden group-hover:flex  hover:bg-gray-100">
                <Icons.PlusIcon className="text-[16px] text-gray-500" />
              </button>
            </div>
            <button className="flex w-full h-10 p-2 pl-4  items-center px-[14px] font-sans text-sm font-medium text-gray-500 border border-gray-200 rounded-lg">
              <Icons.PlusIcon className="text-[14px] text-gray-500 mr-3" />{" "}
              Create Checklist
            </button>
          </div>
          <div className="mb-20">
            <div className="flex justify-between items-center group ">
              <div className=" py-2 font-sans text-lg text-gray-900 font-semibold ">
                Attachments
              </div>
              <button className="px-1 min-h-6 min-w-6 items-center rounded-lg hidden group-hover:flex  hover:bg-gray-100">
                <Icons.PlusIcon className="text-[16px] text-gray-500" />
              </button>
            </div>
            <div className="flex w-full h-10 p-2 gap-1 pl-4  justify-center  items-center px-[14px] font-sans text-xs font-medium text-gray-500 border border-gray-200 rounded-lg">
              Drop your files here to
              <button className=" underline">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
