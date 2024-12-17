import { Icons } from "@/icons/icons";

export default function ActivityTask() {
  return (
    <>
      <div className="flex justify-between  pr-3 py-3 pl-4  items-center h-12 border-b border-gray-200">
        <div className=" font-sans text-xl/5 text-gray-900 font-semibold">
          Subtasks
        </div>
        <div className="flex">
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.SearchIcon className="text-[16px] text-gray-500" />
          </button>
          <button className=" flex items-center px-2 gap-1 min-h-8 min-w-12 hover:bg-gray-200 rounded-lg font-sans text-base text-gray-900 ">
            <Icons.RingingIcon className="text-[16px] text-gray-500" />1
          </button>
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.SortIcon className="text-[16px] text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex  min-h-max w-full overflow-y-auto overflow-x-hidden  flex-col px-3 ">
        <button className="flex pl-1 mt-2 py-[6px] items-center gap-2 hover:bg-gray-100 rounded-md h-7 w-full text-xs font-sans text-gray-500">
          <Icons.ArrowForward className="text-[16px] text-gray-500" />
          Show more
        </button>
        <button className="flex pl-1 mt-2 py-[6px] items-start gap-2  rounded-md  w-full text-left text-xs font-sans text-gray-500">
          <Icons.DotFill className="text-[8px] text-gray-500 m-1 " />
          Mariusz Olszewski changed name: create-user-data-providerhook
          <div className="min-w-fit">Yesterday at 9:24 am</div>
        </button>
        <div className="absolute bottom-12 left-0 w-full px-3 pb-3 ">
          <div className="flex items-center justify-between border gap-2 px-4 border-gray-200 rounded-lg h-12">
            <input
              type="text"
              disabled
              name=""
              id=""
              value="Write a comment..."
              className="font-sans text-sm text-gray-400"
            />
            <button className="h-8 bg-violet-200 rounded-md px-3 py-1 font-sans text-sm text-white font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
