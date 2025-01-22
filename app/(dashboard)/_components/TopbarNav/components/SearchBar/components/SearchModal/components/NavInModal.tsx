"use client";
import { Icons } from "@/icons/icons";
import Icon from "@/app/(dashboard)/ui/Icon";

export default function NavInModal() {
  return (
    <>
      <div className="flex items-center w-full px-3  gap-[7px] h-[39px]">
        <button className="flex items-center w-auto pt-2 pb-[7px] h-[39px] border-b-2 border-blue-500">
          <div className=" rounded-md hover:bg-gray-100 p-1 text-xs font-sans font-medium text-gray-600">
            All
          </div>
        </button>
        <button className="flex items-center w-auto p-1 pt-2 pb-[7px] h-[39px] group border-b-2 border-transparent group">
          <div className=" flex items-center gap-1 rounded-md p-1 hover:bg-gray-100">
            <Icon
              className="text-[14px] text-gray-400 group-hover:text-gray-700"
              icon={<Icons.AppsIcon />}
            />
            <div className="text-xs font-sans font-medium text-gray-400 group-hover:text-gray-700">
              Apps
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
