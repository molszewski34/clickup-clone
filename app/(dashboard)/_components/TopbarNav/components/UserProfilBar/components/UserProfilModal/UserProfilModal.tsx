import React from "react";
import ButtonRender from "./components/ButtonRender";
import useFetchUserData from "./components/useFetchUserData";

export default function UserProfilModal() {
  const { userInitial, fullName } = useFetchUserData();

  return (
    <>
      <div className="flex items-center justify-between my-2 px-4 py-2">
        <div className="flex w-full gap-[12px]">
          <div className="static">
            <div className="flex justify-center items-center min-w-8 h-8 bg-blue-400 rounded-full text-white text-[14px] font-bold font-sans cursor-default">
              {userInitial}
            </div>
            <div className="absolute z-[60] w-3 h-3 border-[2px] border-white bg-green-600 rounded-full top-[87px] right-[236px]"></div>
          </div>
          <div className="flex-row">
            <div className="flex text-sm/4 font-sans font-medium text-gray-950 mb-[2px]">
              {fullName}
            </div>
            <div className="flex text-xs/[16px] font-sans text-gray-800">
              Online
            </div>
          </div>
        </div>
      </div>
      <ButtonRender />
    </>
  );
}
