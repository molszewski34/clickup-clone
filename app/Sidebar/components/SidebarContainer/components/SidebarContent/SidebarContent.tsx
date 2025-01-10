"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Icons } from "@/icons/icons";
import UserProfile from "./components/UserProfile";
import buttons from "./components/buttons";
import Button from "./components/Button";
import ButtonFavourites from "./components/ButtonFavourites";
import WorkspaceButtons from "../WorkspaceButtons";

interface SidebarContentProps {
  userName: string;
  userInitial: string;
  loading: boolean;
  width: number;
  openModal: () => void;
  toggleModal: (modal: "none" | "menuFavorite" | "menuSpace") => void;
}

const SidebarContent = ({
  userName,
  userInitial,
  loading,
  width,
  openModal,
  toggleModal,
}: SidebarContentProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const paths = useMemo(
    () => [
      "home",
      "inbox",
      "docs",
      "dashboards",
      "whiteboards",
      "pulse",
      "goals",
      "timesheets",
    ],
    []
  );

  const handleNavigation = useCallback(
    (index: number) => {
      const userId = pathname.split("/")[1];
      const newPath = paths[index];

      if (newPath && userId && pathname !== `/${userId}/${newPath}`) {
        router.push(`/${userId}/${newPath}`);
      }
    },
    [pathname, paths, router]
  );

  return (
    <>
      <div>
        <UserProfile
          userName={userName}
          userInitial={userInitial}
          loading={loading}
          width={width}
        />

        <div className="w-full h-px bg-gray-200" />

        <div className="flex-row rounded-lg w-auto h-auto my-2 ml-3 mr-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              icon={button.icon}
              extraIcons={button.extraIcons}
              active={activeButton === index}
              onClick={() => {
                setActiveButton(index);
                handleNavigation(index); // Navigate on click
              }}
              width={width}
            />
          ))}
        </div>

        <div className="w-full h-px bg-gray-200 " />

        {width > 200 && <ButtonFavourites />}

        <div className="flex-row">
          <div
            className={`items-center h-8 pl-4 pr-2 justify-between ${
              width < 200 ? "hidden" : "flex"
            }`}
          >
            <div className="flex items-center text-xs font-sans font-medium text-gray-500">
              Space
            </div>
            <div className="flex gap-[2px]">
              <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
                <Icons.ThreeDotsIcon className="text-[16px] text-gray-500" />
              </button>
              <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
                <Icons.SearchIcon className="text-[16px] text-gray-500" />
              </button>
              <button
                className="flex justify-center items-center w-6 h-6 rounded-md bg-blue-500 hover:bg-blue-700"
                onClick={openModal}
              >
                <Icons.PlusIcon className="text-[14px] text-white" />
              </button>
            </div>
          </div>

          {/* Zmieniona część: ikonki wyświetlające się przy mniejszej szerokości */}
          {width < 200 && (
            <div className="flex flex-col justify-center items-center gap-1 mt-2">
              <button
                className="flex justify-center items-center w-9 h-8 rounded-md  hover:bg-gray-200"
                onClick={(e) => {
                  toggleModal("menuFavorite");
                  e.stopPropagation();
                }}
              >
                <Icons.Star className="text-[18px] text-gray-500" />
              </button>
              <button
                className="flex justify-center items-center w-9 h-8 rounded-md bg-blue-200 hover:bg-blue-300"
                onClick={(e) => {
                  toggleModal("menuSpace");
                  e.stopPropagation();
                }}
              >
                <Icons.AppsIcon className="text-[18px] text-blue-500" />
              </button>
            </div>
          )}

          {/* Reszta komponentu, jeśli szerokość ekranu jest większa niż 200 */}
          <div
            className={`flex-row rounded-lg w-auto h-auto my-2 ml-3 mr-2 ${
              width < 200 ? "hidden" : ""
            }`}
          >
            <WorkspaceButtons width={width} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContent;
