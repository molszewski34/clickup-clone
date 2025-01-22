"use client";

import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

export default function ButtonTab() {
  return (
    <>
      <button className="flex justify-center items-center bg-white border hover:bg-gray-100 border-gray-200  opacity-90 rounded-md flow-hidden h-[32px] w-auto px-3">
        <div className=" text-sm font-medium font-sans text-gray-700 ">Tab</div>
        <Icon
          className="text-[14px] text-gray-700 ml-2"
          icon={<Icons.TabIcon />}
        />
      </button>
    </>
  );
}
