import React from "react";
import { Icons } from "@/icons/icons";

interface ButtonProps {
  label: string;
  icon: React.ReactElement;
  extraIcons: number;
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  width: number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  extraIcons,
  active,
  disabled,
  onClick,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group/button flex items-center rounded-md h-8 w-full mr-1 pl-1 mb-px flex-grow min-w-0 ${
        width < 200 ? "justify-center max-w-8" : ""
      } ${
        active
          ? "bg-blue-200 text-blue-700"
          : "hover:bg-gray-200 hover:text-gray-700"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-center items-center h-8 w-6">
          {React.cloneElement(icon, {
            className: active
              ? "text-[18px] text-blue-700"
              : "text-[18px] text-gray-700",
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
          <div className="flex justify-center items-center opacity-0 group-hover/button:opacity-100 mr-1">
            {extraIcons >= 1 && (
              <div className="flex justify-center items-center h-6 w-6">
                <Icons.ThreeDotsIcon
                  className={
                    active
                      ? "text-[14px] text-blue-700"
                      : "text-[14px] text-gray-700"
                  }
                />
              </div>
            )}
            {extraIcons === 2 && (
              <div className="flex justify-center items-center h-6 w-6">
                <Icons.PlusIcon
                  className={
                    active
                      ? "text-[14px] text-blue-700"
                      : "text-[14px] text-gray-700"
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
