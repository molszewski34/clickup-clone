"use client";

import React from "react";
import { Icons } from "@/icons/icons";

const ListHeader: React.FC = () => {
return (
    <div className="flex items-center bg-gray-500 border-gray-200 dark:bg-gray-600 py-1" >
        <div className="flex space-x-2 mr-4">
            <button className="btn">
            <Icons.ArrowDownIcon className="-backdrop-hue-rotate-0" />
            </button>
            <button className="flex text-xs items-center bg-green-500 hover:bg-green-600 text-white rounded-l-[0.25rem]">
                <span className="text-sm p-[4px_8px_4px_5px] font-semibold uppercase">Complete</span>
            </button>
            <button className="btn">
                15</button>
            <button className="flex justify-center items-center hover:bg-black bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1">
                <Icons.ThreeDotsIcon className="text-[16px] text-black" />
            </button>
            <button className="flex px-[7px] h-6 text-xs items-center hover:bg-[#606574] text-white rounded-l-[0.25rem]">
                <Icons.PlusIcon className="text-[16px] text-white" />
                <span className="text-sm font-semibold">Add task</span>
            </button>
        </div>
    </div>
    
    );
};

export default ListHeader;