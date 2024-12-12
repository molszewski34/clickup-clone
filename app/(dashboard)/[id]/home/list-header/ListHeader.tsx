"use client";

import React from "react";
import {Icons} from "@/icons/icons";
import Badge from "@/components/Badge";
import {Button} from "@/components/Button";

const ListHeader: React.FC = () => {
    return (
        <div className="flex items-center bg-gray-500 border-gray-200 dark:bg-gray-600 py-1">
            <div className="flex ">
                <button className="btn">
                    <Icons.ArrowDownIcon className="-backdrop-hue-rotate-0"/>
                </button>
                <div>
                    <Badge status={'to do'}/>
                </div>
                <div className="flex">
                    <Button className={'bg-transparent hover:bg-gray-700'}>
                        <Icons.ThreeDotsIcon className="text-[16px] text-gray-500"/>
                    </Button>
                </div>
                <div className=" m-1.75 text-gray-500">
                    10
                </div>
                <div>
                    <Button className="flex bg-transparent hover:bg-gray-700">
                        <Icons.PlusIcon className="text-[16px] pl-0 text-gray-500"/>
                        <span className="text-gray-500 -ml-1 text-sm font-semibold">Add Task</span>
                    </Button>

                </div>
            </div>
        </div>

    );
};

export default ListHeader;