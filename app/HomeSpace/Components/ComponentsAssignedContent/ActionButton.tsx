import React from "react";
interface ActionButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sclass?: string;
  onClick?: () => void;
}
const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  sclass,
  onClick,
}) => (
  <button
    className="flex justify-center items-center w-8 h-6 rounded-xl border border-gray-200 hover:bg-gray-100 "
    onClick={onClick}
  >
    <Icon className={`w-[14px] h-[14px] text-gray-600 ${sclass}`} />
  </button>
);
export default ActionButton;
