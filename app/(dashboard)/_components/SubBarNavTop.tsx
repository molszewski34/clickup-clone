"use client";
import React, { useState } from "react";
import { Icons } from "../../../icons/icons";
import ButtonVariant1 from "../../../components/ButtonVariant1";
import ButtonVariant2 from "../../../components/ButtonVariant2";
import ViewBarNavTop from "./ViewBarNavTop";
interface Props {
  setSubBarNavHeaderActive: React.Dispatch<React.SetStateAction<boolean>>;
  subBarNavHeaderActive: boolean;
}
const SubBarNavTop = ({
  setSubBarNavHeaderActive,
  subBarNavHeaderActive,
}: Props) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  return (
    <nav
      className={`text-gray_400 bg-nav border-gray_100 border-b dark:bg-darkGray_600 font-sans font-medium flex transition-all duration-500 ease-in-out
        ${subBarNavHeaderActive ? "px-12" : "px-4"}`}
    >
      <div className="w-full flex items-center h-12 text-sm capitalize ">
        <div className="flex mr-2 h-12 gap-2">
          <ButtonVariant1
            onClick={() => setActiveButton("overview")}
            isActive={activeButton === "overview"}
          >
            <Icons.DashboardIcon className="text-[14px] relative top-[4px]" />
            overview
          </ButtonVariant1>
          <ButtonVariant1
            onClick={() => setActiveButton("board")}
            isActive={activeButton === "board"}
          >
            <Icons.BoardIcon className="text-[14px] relative top-[4px]" />
            board
          </ButtonVariant1>
          <ButtonVariant1
            onClick={() => setActiveButton("list")}
            isActive={activeButton === "list"}
          >
            <Icons.ListUlicon className="text-[14px] relative top-[4px]" />
            list
          </ButtonVariant1>
          <ButtonVariant1
            onClick={() => setActiveButton("calendar")}
            isActive={activeButton === "calendar"}
          >
            <Icons.CalendarIcon
              className="text-[14px] relative top-[4px] "
              style={{ strokeWidth: "2.4px" }}
            />
            calendar
          </ButtonVariant1>
          <ButtonVariant1
            onClick={() => setActiveButton("gantt")}
            isActive={activeButton === "gantt"}
          >
            <Icons.GantIcon className="text-[14px] relative top-[4px]" />
            gantt
          </ButtonVariant1>
          <ButtonVariant1
            onClick={() => setActiveButton("table")}
            isActive={activeButton === "table"}
          >
            <Icons.TeableIcon className="text-[14px] relative top-[4px]" />
            table
          </ButtonVariant1>
        </div>
        <ButtonVariant2 isLineBefore={true}>
          <Icons.PlusIco className="text-[14px] relative top-[4px]" />
          view
        </ButtonVariant2>
      </div>
      <ViewBarNavTop
        activeButton={activeButton}
        setSubBarNavHeaderActive={setSubBarNavHeaderActive}
      />
    </nav>
  );
};
export default SubBarNavTop;
