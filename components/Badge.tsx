import React from "react";

type BadgeProps = {
    status?: "complete" | "in progress" | "to do";
    className?: string,
};

export const Badge = ({
                          status = "complete",
                          className,
                      }: BadgeProps) => {
    switch (status) {
        case "to do":
            className = "flex text-xs items-center bg-gray-800 text-white rounded-l-[0.25rem]";
            break;
        case "in progress":
            className = "flex text-xs items-center bg-blue-500  text-white rounded-l-[0.25rem]";
            break;
        default:
            className = "flex text-xs items-center bg-green-500  text-white rounded-l-[0.25rem]";
    }

    return (
        <div
            className={`${className}`}>
            <span className="text-sm p-[4px_8px_4px_5px] font-semibold uppercase">
                {status}</span>
        </div>
    );
}
export default Badge;