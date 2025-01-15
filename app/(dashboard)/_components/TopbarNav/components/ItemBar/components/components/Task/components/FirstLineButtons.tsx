"use client";
import { Icons } from "@/icons/icons";
import UniversalButton from "../../../../../components/UniversalButton";
import useFetchUserInitial from "../../../../../UserProfilBar/components/useFetchUserInitial";

export default function FirstLineButtons() {
  const { userInitial } = useFetchUserInitial();

  return (
    <>
      <div className=" flex items-center px-6 gap-2 mb-3">
        <UniversalButton
          userInitial={userInitial}
          text="Personal List"
          IconComponent2={Icons.ArrowDownIcon}
        />
        <UniversalButton
          IconComponent1={Icons.DotIcon}
          text="Task"
          IconComponent2={Icons.ArrowDownIcon}
        />
      </div>
    </>
  );
}
