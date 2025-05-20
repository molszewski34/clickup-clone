import React, { useCallback, useRef, useState, useEffect } from "react";
import ButtonProps from "./components/ButtonProps";
import { Icons } from "@/icons/icons";
import {
  CreateListModal,
  MenuFileChangerModal,
  MenuListChangerModal,
  MenuWorkspaceListModal,
} from "./components/modals";
import { useData } from "@/context/DataProvider/DataProvider";

import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { useUpdateList } from "@/hooks/useUpdateList";
import { useUpdateSpace } from "@/hooks/useUpdateSpace";

const AddWorkspaceElement: React.FC<ButtonProps> = ({
  label,
  icon,
  extraIcons,
  active,
  onClick,
  width,
  onMouseEnter,
  onMouseLeave,
  isWorkspace,
  color,
  rotate = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [offsetTopState, setOffsetTopState] = useState<number | null>(null);
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(label);
  const { setSpaceName, setListName } = useData();
  useGetCurrentWorkspace();

  const { mutate: updateListMutation } = useUpdateList();
  const { mutate: updateSpaceMutation } = useUpdateSpace();

  useEffect(() => {
    setInputValue(label);
  }, [label]);

  const handleClick = () => {
    if (buttonRef.current) {
      const offsetTop = buttonRef.current.getBoundingClientRect().top;
      setOffsetTopState(offsetTop);
    }
    onClick();
  };

  const [modalState, setModalState] = useState<
    | "none"
    | "menuWorkspaceList"
    | "createList"
    | "menuFileChanger"
    | "menuListChanger"
  >("none");

  const toggleModal = (
    modal:
      | "none"
      | "menuWorkspaceList"
      | "createList"
      | "menuFileChanger"
      | "menuListChanger"
  ) => {
    setModalState(modalState === modal ? "none" : modal);
  };

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalState !== "none") {
        const modal = document.getElementById(modalState);
        if (modal && !modal.contains(e.target as Node)) {
          setModalState("none");
        }
      }
    },
    [modalState]
  );

  React.useEffect(() => {
    if (modalState !== "none") {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalState, handleOutsideClick]);

  const startRenaming = () => {
    setIsRenaming(true);
    setModalState("none");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleBlur = () => {
    if (inputValue !== label) {
      console.log("Zapisuję nową nazwę:", inputValue);
      if (isSpace) {
        setSpaceName(inputValue);

        updateSpaceMutation();
      } else {
        setListName(inputValue);
        updateListMutation();
      }
    }
    setIsRenaming(false);
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group/button flex items-center cursor-pointer rounded-md h-8 w-full mr-1 pl-1 mb-px flex-grow min-w-0 ${
          width < 200 ? "justify-center" : ""
        } ${
          modalState === "menuWorkspaceList" && !active
            ? "bg-gray-200"
            : active
            ? "bg-blue-200 text-blue-700"
            : "hover:bg-gray-200 hover:text-gray-700"
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center h-8 w-6">
            {isWorkspace ? (
              <div
                className={`flex justify-center items-center w-6 h-6  font-sans text-[12px] font-semibold text-white rounded ${
                  active ? "bg-gray-200" : `bg-${color}`
                }`}
              >
                {React.cloneElement(icon, {
                  className: `${active ? "text-blue-700" : ""}${
                    active && rotate
                      ? "transition-transform duration-300  group-hover/button:rotate-90 text-blue-700"
                      : ""
                  }`,
                })}
              </div>
            ) : (
              React.cloneElement(icon, {
                className: `${active ? "text-blue-700" : ""}${
                  active && rotate
                    ? "transition-transform duration-300  group-hover/button:rotate-90 text-blue-700"
                    : "text-gray-700"
                }
                
                `,
              })
            )}
          </div>
          {width >= 200 && (
            <div className="flex justify-start items-center flex-grow min-w-0 ml-1">
              {isRenaming ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={handleBlur}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span
                  className={`block text-sm font-sans truncate ${
                    active ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {label}
                </span>
              )}
            </div>
          )}
          {width >= 200 && extraIcons > 0 && (
            <div
              className={`flex justify-center items-center mr-1 opacity-0 group-hover/button:opacity-100 ${
                modalState !== "none" || active ? "opacity-100" : ""
              }`}
            >
              <div className="flex justify-center items-center h-6 w-12 ">
                {extraIcons == 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModal("menuListChanger");
                    }}
                    className={`flex justify-center items-center h-6 w-6 rounded-md ${
                      active ? "hover:bg-blue-300" : "hover:bg-gray-300 hidden"
                    }`}
                  >
                    <Icons.ThreeDotsIcon
                      className={
                        active
                          ? "text-[14px] text-blue-700"
                          : "text-[14px] text-gray-700"
                      }
                    />
                  </button>
                )}
                {extraIcons > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModal("menuFileChanger");
                    }}
                    className={`flex justify-center items-center h-6 w-6 rounded-md ${
                      active ? "hover:bg-blue-300" : "hover:bg-gray-300 hidden"
                    }`}
                  >
                    <Icons.ThreeDotsIcon
                      className={
                        active
                          ? "text-[14px] text-blue-700"
                          : "text-[14px] text-gray-700"
                      }
                    />
                  </button>
                )}
                {extraIcons >= 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModal("menuWorkspaceList");
                    }}
                    className={`flex justify-center items-center h-6 w-6 rounded-md ${
                      active ? "hover:bg-blue-300" : "hover:bg-gray-300 hidden"
                    }`}
                  >
                    <Icons.PlusIcon
                      className={
                        active
                          ? "text-[14px] text-blue-700"
                          : "text-[14px] text-gray-700 "
                      }
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <MenuListChangerModal
        modalState={modalState}
        toggleModal={toggleModal}
        width={width}
        startRenaming={startRenaming}
      />
      <MenuFileChangerModal
        modalState={modalState}
        toggleModal={toggleModal}
        width={width}
        startRenaming={startRenaming}
      />
      <MenuWorkspaceListModal
        modalState={modalState}
        toggleModal={toggleModal}
        width={width}
        offsetTopState={offsetTopState}
      />
      <CreateListModal modalState={modalState} toggleModal={toggleModal} />
    </div>
  );
};

export default AddWorkspaceElement;
