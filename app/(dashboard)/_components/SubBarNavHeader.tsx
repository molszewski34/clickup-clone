import ButtonVariant2 from "@/components/ButtonVariant2";
import ButtonVariant3 from "@/components/ButtonVariant3";
import { Icons } from "@/icons/icons";
import React, { useState } from "react";

type Props = {
  spaceName: string;
  subBarNavHeaderActive: boolean;
};

const SubBarNavHeader: React.FC<Props> = ({
  spaceName,
  subBarNavHeaderActive,
}) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  return (
    <div
      className={`font-sans flex items-center text-white_100 dark:bg-darkGray_600 transition-all duration-500 ease-in-out overflow-hidden
      ${
        subBarNavHeaderActive
          ? "max-h-[112px] px-12  pt-6 pb-4"
          : "max-h-0 px-12"
      } `}
    >
      <div className="flex mr-auto overflow-hidden ">
        <h1 className="text-2xl mr-[6px] font-semibold">{spaceName}</h1>
        <ButtonVariant2
          isActive={activeButton === "dots"}
          onClick={() =>
            setActiveButton((prev) => (prev === "dots" ? "" : "dots"))
          }
        >
          <Icons.DotsIcon className="my-1" />
        </ButtonVariant2>
      </div>
      <ButtonVariant3 doubleButtonLeft={true} height="h-7">
        <span className="text-sm font-semibold">Add Task</span>
      </ButtonVariant3>
      <ButtonVariant3
        doubleButtonRight={true}
        onClick={() =>
          setActiveButton((prev) =>
            prev === "addTaskRightButton" ? "" : "addTaskRightButton"
          )
        }
        padding="px-[6px] py-1"
        height="h-7"
      >
        <Icons.ArrowDownIcon
          className={`text-[14px] relative top-[1px] transition-transform ease-in-out
          ${activeButton === "addTaskRightButton" ? "rotate-180" : ""}`}
        />
      </ButtonVariant3>
    </div>
  );
};

export default SubBarNavHeader;
