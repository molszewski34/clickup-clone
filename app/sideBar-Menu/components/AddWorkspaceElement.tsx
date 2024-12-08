import React, { useState } from "react";
import { Icons } from "@/icons/icons";
import ButtonRender from "./addWorkspaceElement-Component/ButtonRender";
import ListModal from "./list-Components/ListModal";

interface ButtonProps {
  label: string;
  icon: React.ReactElement;
  extraIcons: number;
  active: boolean;
  onClick: () => void;
  width: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AddWorkspaceElement: React.FC<ButtonProps> = ({
  label,
  icon,
  extraIcons,
  active,
  onClick,
  width,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [modalState, setModalState] = useState<"none" | "modal1" | "modal2">(
    "none"
  );

  const toggleModal = (modal: "none" | "modal1" | "modal2") => {
    setModalState(modalState === modal ? "none" : modal);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalState !== "none") {
      const modal = document.getElementById(modalState);
      if (modal && !modal.contains(e.target as Node)) {
        setModalState("none");
      }
    }
  };

  React.useEffect(() => {
    if (modalState !== "none") {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalState]);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group/button flex items-center rounded-md h-8 w-full mr-1 pl-1 mb-px flex-grow min-w-0 ${
          width < 200 ? "justify-center" : ""
        } ${
          modalState === "modal1" && !active
            ? "bg-gray-200"
            : active
            ? "bg-blue-200 text-blue-700"
            : "hover:bg-gray-200 hover:text-gray-700"
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center h-8 w-6">
            {React.cloneElement(icon, {
              className: active ? "text-blue-700" : "text-gray-700",
            })}
          </div>
          {width >= 200 && (
            <div className="flex justify-start items-center flex-grow min-w-0 ml-1">
              <span
                className={`block text-sm font-sans truncate ${
                  active ? "text-blue-700" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </div>
          )}
          {width >= 200 && extraIcons > 0 && (
            <div
              className={`flex justify-center items-center mr-1 opacity-0 group-hover/button:opacity-100 ${
                modalState !== "none" || active ? "opacity-100" : ""
              }`}
            >
              <div className="flex justify-center items-center h-6 w-12">
                {extraIcons >= 1 && (
                  <Icons.ThreeDotsIcon
                    className={
                      active
                        ? "text-[14px] text-blue-700"
                        : "text-[14px] text-gray-700"
                    }
                  />
                )}
                {extraIcons >= 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModal("modal1");
                    }}
                    className="flex justify-center items-center h-6 w-6"
                  >
                    <Icons.PlusIcon
                      className={
                        active
                          ? "text-[14px] text-blue-700"
                          : "text-[14px] text-gray-700"
                      }
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </button>

      {modalState === "modal1" && (
        <div
          id="modal1"
          className="fixed z-50 bg-white border border-gray-300 shadow-lg rounded py-2"
          style={{ left: `${width - 20}px` }}
        >
          <ButtonRender toggleModal={toggleModal} />
        </div>
      )}

      {modalState === "modal2" && (
        <div
          className="fixed inset-0 flex justify-center  bg-gray-950 bg-opacity-50 z-50"
          onClick={() => toggleModal("none")}
        >
          <div
            className="bg-white rounded-xl w-[540px] h-[326px] mt-[128px] shadow-lg  border border-gray-20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ListModal toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWorkspaceElement;
