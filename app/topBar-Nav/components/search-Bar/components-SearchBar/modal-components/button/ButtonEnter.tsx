"use client";

import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

export default function ButtonEnter() {
  return (
    <>
      <button className="flex justify-center items-center bg-indigo-600 border border-gray-200  opacity-90 rounded-md flow-hidden h-[32px] w-[32px]">
        <Icon className="text-[12px] text-white" icon={<Icons.EnterIcon />} />
      </button>
    </>
  );
}
