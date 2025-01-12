"use client";

import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

export default function ButtonNewTab() {
  return (
    <>
      <button className="flex justify-center items-center bg-white hover:bg-gray-100 border border-gray-300 rounded-md flow-hidden h-[32px] w-[32px]">
        <Icon
          className="text-[12px] text-gray-500"
          icon={<Icons.NewTabIcon />}
        />
      </button>
    </>
  );
}
