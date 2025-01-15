"use client";
import { Icons } from "@/icons/icons";
import UniversalButton from "../../../../../components/UniversalButton";
import useFetchUserData from "../../../../../UserProfilBar/components/UserProfilModal/components/useFetchUserData";

export default function ButtonList() {
  const { userInitial } = useFetchUserData();

  return (
    <>
      <div className="flex items-center px-6 gap-2 mb-3">
        <UniversalButton
          IconComponent1={Icons.CalendarChackedIcon}
          text="Today"
        />

        <UniversalButton
          userInitial={userInitial}
          text="For Me"
          IconComponent2={Icons.ArrowDownIcon}
        />
        <UniversalButton IconComponent1={Icons.RingingIcon} text="Notify me" />
      </div>
    </>
  );
}
