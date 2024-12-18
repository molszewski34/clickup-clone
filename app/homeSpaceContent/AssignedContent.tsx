import { Icons } from "@/icons/icons";

export default function AssignedContent() {
  return (
    <>
      <div className="h-[576px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
        <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
          Assigned to me
          <div className=" hidden gap-1 group-hover:flex">
            <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.SettingsIcon className="text-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.FullScreen className="text-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
            </button>
          </div>
        </div>
        <div className="h-10 px-[14px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100">
              <Icons.LayersIcon className="w-[14px] h-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100">
              <Icons.Forked className="w-[14px] h-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100">
              <Icons.ColumnsIcon className="w-[14px] h-[14px] text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <button className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100">
              <Icons.SortIcon className="w-[14px] h-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100">
              <Icons.CheckCircleIcon className="w-[12px] h-[12px] text-gray-600" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-2"></div>
            <div className="flex gap-2 px-[11px] group/in  h-6 items-center border rounded-lg border-gray-200 hover:bg-gray-100 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="border-none focus:outline-none w-16 text-sm font-sans text-gray-800 group-hover/in:bg-gray-100"
              />
              <div className="flex justify-center items-center w-5 h-5 rounded-md  hover:bg-gray-100">
                <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
              </div>
            </div>
            <button className="flex justify-center items-center w-6 h-6 rounded-md  hover:bg-gray-100">
              <Icons.SettingsIcon className="w-[14px] h-[14px] text-gray-600" />
            </button>
          </div>
        </div>
        <div className="h-16 px-[14px] mt-2">
          <div className="flex items-center h-8 gap-1">
            <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.PlayWorkspace className="text-[14px] text-gray-700 rotate-90" />
            </div>
            <button className="flex items-center h-6     gap-2 rounded-md px-2 text-xs bg-blue-700 text-white  font-semibold">
              <Icons.DotIcon className="text-[12px] text-white" />
              IN PROGRESS
            </button>
            <div className="font-sans px-2 text-xs text-gray-500">5</div>
            <div className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.ThreeDotsIcon className="text-[14px] text-gray-700" />
            </div>
            <button className="flex items-center h-6  gap-2 rounded-md px-2 text-xs text-gray-500 hover:bg-gray-100  font-semibold">
              <Icons.PlusNew className="text-[14px] text-gray-500" />
              Add Task
            </button>
          </div>
          <div className="h-8 grid grid-cols-12 border-b border-gray-200">
            <div className="col-span-5 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
              Name
            </div>
            <div className="col-span-3 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
              Priority
            </div>
            <div className="col-span-3 flex items-center font-sans text-xs text-gray-500 hover:bg-gray-100 pl-2">
              Due date
            </div>
            <div className="col-span-1  flex items-center justify-center hover:bg-gray-100">
              <Icons.PlusCircleIcon className="text-[14px] text-gray-500" />
            </div>
          </div>
        </div>

        <div className=" w-full h-[370px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div className="text-center font-sans text-base text-gray-400 mt-3">
            Empty
          </div>
        </div>
      </div>
    </>
  );
}
