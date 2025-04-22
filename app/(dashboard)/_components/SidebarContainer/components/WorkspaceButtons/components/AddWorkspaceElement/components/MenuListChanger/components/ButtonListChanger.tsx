import { Icons } from "@/icons/icons";
import React, { useState } from "react";
import DeleteProjectButton from "./DeleteListButton";
import { useData } from "@/context/DataProvider/DataProvider";

interface ButtonProps {
  label: string;
  icon: React.ReactElement;
  active: boolean;
  onClick: () => void;
  extraIcon?: React.ReactElement | null;
  groupIndex: number;
  NumberIndex: number;
  startRenaming?: () => void;
}

const ButtonListChanger: React.FC<ButtonProps> = ({
  label,
  icon,
  active,
  onClick,
  groupIndex,
  NumberIndex,
  startRenaming,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [NumbersTemplates] = useState(0);

  const { listName, tasksLength } = useData();

  const isFourthGroupAndIndex3 = groupIndex === 3 && NumberIndex === 3;
  const isFirstGroupAndIndex0 = groupIndex === 0 && NumberIndex === 0;

  const handleButtonClick = () => {
    if (isFourthGroupAndIndex3) {
      setIsModalOpen(!isModalOpen);
    } else if (isFirstGroupAndIndex0 && startRenaming) {
      startRenaming();
    } else {
      onClick();
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`group/button flex items-center rounded-md h-8 mx-2 w-auto flex-grow min-w-0 justify-center ${
          active
            ? "bg-blue-200 text-blue-700"
            : "hover:bg-gray-200 hover:text-gray-500"
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center h-8 w-6">
            {React.cloneElement(icon, {
              className: active
                ? "text-blue-700"
                : isFourthGroupAndIndex3
                ? "text-red-500"
                : "text-gray-500",
            })}
          </div>
          <div className="flex justify-start items-center flex-grow min-w-0 ml-1">
            <span
              className={`block text-sm font-sans truncate ${
                active
                  ? "text-blue-700"
                  : isFourthGroupAndIndex3
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
          {(groupIndex === 1 && [0, 2, 3, 4].includes(NumberIndex)) ||
          (groupIndex === 2 && NumberIndex === 2) ||
          (groupIndex === 3 && NumberIndex === 0) ? (
            <div className="flex justify-center items-center mr-2">
              <Icons.ArrowForward
                className={`text-[14px] ${
                  active ? "text-blue-700" : "text-gray-500"
                }`}
              />
            </div>
          ) : null}
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center bg-gray-950 bg-opacity-50 z-50">
          <div
            className="bg-white rounded-xl w-[440px] h-fit mt-[128px] shadow-lg border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6">
              <div className="flex justify-center items-center w-10 h-10 border-red-300 border bg-red-50 rounded-xl ">
                <Icons.Trash className="text-[18px] text-red-800 " />
              </div>
              <div className="flex items-center text-lg  mt-4 font-sans font-medium text-gray-950">
                Delete: <span className=" ml-2">{listName}</span>
              </div>
              <div className="flex mt-1 text-sm font-sans text-gray-950">
                <span>
                  <b className="text-gray-600 font-semibold mr-1">
                    {tasksLength} tasks
                  </b>
                  and
                  <b className="text-gray-600 font-semibold mx-1">
                    {NumbersTemplates} templates
                  </b>
                  within this List will be deleted. Additionally, automations
                  will become inactive.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 w-auto h-auto border-t border-gray-200  bg-gray-100">
              <button
                className=" flex-1 px-4 w- py-2 bg-white font-sans text-sm font-medium text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <DeleteProjectButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonListChanger;
