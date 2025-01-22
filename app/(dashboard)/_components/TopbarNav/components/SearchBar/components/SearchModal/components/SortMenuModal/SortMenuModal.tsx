import React from "react";
import { Icons } from "@/icons/icons";
import Icon from "@/app/(dashboard)/ui/Icon";
import Button from "./components/Button";

export default function SortMenuModal() {
  return (
    <div className="flex items-center w-full p-2 pl-3 gap-1 h-[40px]">
      <Button
        icon={<Icons.CheckCircleIcon className="text-[12px] text-gray-600" />}
      >
        Tasks
      </Button>
      <Button
        icon={
          <Icon
            className="text-[12px] text-gray-600"
            icon={<Icons.DocIcon />}
          />
        }
      >
        Docs
      </Button>
      <Button
        dashed
        circle
        icon={<Icons.PlusIcon className="text-[12px] text-gray-400" />}
      />
      <div className="w-px h-4 m-1 bg-gray-200" />
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Sort
      </Button>
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Assignee
      </Button>
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Creator
      </Button>
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        In
      </Button>
      <Button
        icon={
          <Icon
            className="text-[16px] text-gray-600"
            icon={<Icons.SortIcon />}
          />
        }
      />
    </div>
  );
}
