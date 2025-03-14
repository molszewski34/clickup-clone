"use client";
// import { useRouter } from "next/navigation";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/db/firebase/lib/firebase";

import { Icons } from "@/icons/icons";
import WidgetHeader from "../../_components/SubNavBar/WidgetHeader";
import ButtonVariant3 from "@/components/ButtonVariant3";
import ButtonVariant2 from "@/components/ButtonVariant2";
import HomeContentV2 from "@/app/HomeSpace/HomeContentV2";

const UserHomePage = () => {
  return (
    <div className="w-full">
      <WidgetHeader className="justify-between">
        <div className="flex px-2 items-center">
          <Icons.HomeIcon className="mr-1" />
          Home
        </div>
        <div className="flex items-center px-2 gap-1">
          <ButtonVariant3 className={` !text-sm h-8 font-semibold px-[11px]`}>
            Manage cards
          </ButtonVariant3>
          <div className="w-[1px] h-4 mx-2  bg-gray_50"></div>
          <ButtonVariant2 className={`items-center h-8`}>
            <Icons.SettingsIcon className="text-base" />
          </ButtonVariant2>
        </div>
      </WidgetHeader>
      <div
        className="w-full custom-scrollbar overflow-y-auto overflow-x-hidden"
        style={{ height: "calc(100vh - 90px)" }}
      >
        <HomeContentV2 />
      </div>
    </div>
  );
};

export default UserHomePage;
