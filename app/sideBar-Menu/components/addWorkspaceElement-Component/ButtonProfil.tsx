import React from "react";

interface ButtonProps {
  label: string;
  icon: React.ReactElement;
  active: boolean;
  onClick: () => void;
}

const ButtonProfil: React.FC<ButtonProps> = ({
  label,
  icon,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group/button flex items-center rounded-md h-8 mx-2  w-auto flex-grow min-w-0 justify-center" ${
        active
          ? "bg-blue-200 text-blue-700"
          : "hover:bg-gray-200 hover:text-gray-500"
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-center items-center h-8 w-6">
          {React.cloneElement(icon, {
            className: active ? "text-blue-700" : "text-gray-500",
          })}
        </div>
        <div className="flex justify-start items-center flex-grow min-w-0 ml-1">
          <span
            className={`block text-sm font-sans truncate ${
              active ? "text-blue-700" : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    </button>
  );
};
export default ButtonProfil;
