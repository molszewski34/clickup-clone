import React from "react";
import {Icons} from "@/icons/icons";
import {IconType} from "react-icons";

type BadgeProps = {
    status?: "complete" | "in progress" | "to do";
    className?: string,
    classNameIcon?: string
    iconType?: IconType
};

export const Badge = ({
                          status = "complete",
                          className,
                          classNameIcon,
                          iconType
                      }: BadgeProps) => {
    switch (status) {
        case "to do":
            className = "flex text-xs items-center h-6 p-[4px_8px_4px_5px] bg-gray-800 text-white rounded-[0.25rem]";
            classNameIcon = "me-1.5 fill-white text-white-500";
            iconType = Icons.DotIcon;
            break;
        case "in progress":
            className = "flex text-xs items-center h-6 p-[4px_8px_4px_5px] bg-blue-500  text-white rounded-[0.25rem]";
            classNameIcon = "me-1.5 fill-white text-white-500";
            iconType = Icons.DotIcon;
            break;
        default:
            className = "flex text-xs items-center h-6 p-[4px_8px_4px_5px] bg-green-500  text-white rounded-[0.25rem]";
            classNameIcon = "me-1.5 fill-white text-green-500";
            iconType = Icons.CheckCircleIcon;
    }

    return (
        <div className={`${className}`}>
            <div>
                {iconType && React.createElement(iconType, {className: classNameIcon})}
            </div>
            <div>
            <span className="text-sm font-semibold uppercase">
                {status}</span>
            </div>
        </div>
    );
}
export default Badge;