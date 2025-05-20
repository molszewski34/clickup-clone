import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { Icons } from "@/icons/icons";
import Icon from "@/app/(dashboard)/ui/Icon";
import SwitchTask from "./SwitchTask";
import RightSectionBtns from "./RightSectionBtns";
import ShareBtn from "./ShareBtn";
import Timestamp from "./Timestamp";

const NavbarTop = () => {
  return (
    <div className="flex items-center justify-between bg-grayv4 text-gray-300 px-2 py-2 shadow-md">
      <div className="flex items-center ">
        <div className="relative flex items-center justify-center w-5 h-5  rounded-md text-grayv1 text-sm  font-bold cursor-pointer p-4 hover:bg-[#3c414a]">
          <Icon icon={<Icons.SidebarExpandIcon />} />
        </div>
        <SwitchTask />
        <Breadcrumbs />
        <div className="bg-gray-500 w-[1px] h-3" />
        <Icon
          className="hover:bg-[#3c414a] p-1 rounded-sm cursor-pointer"
          icon={<Icons.Logout />}
        />
        <Icon
          className="text-sm hover:bg-[#3c414a] p-1 rounded-sm cursor-pointer"
          icon={<Icons.PlusIco />}
        />
      </div>
      <div className="flex items-center gap-2">
        <Timestamp />
        <ShareBtn />
        <div className="bg-gray-600 w-[1px] h-6" />
        <RightSectionBtns />
      </div>
    </div>
  );
};

export default NavbarTop;
