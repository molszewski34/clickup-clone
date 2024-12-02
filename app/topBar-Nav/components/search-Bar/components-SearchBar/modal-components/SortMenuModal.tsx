// SortMenuModal.tsx
import React from "react";
import Button from "./sortMenu-button/Button"; // Import Button component
import { Icons } from "@/icons/icons";
import Icon from "@/app/(dashboard)/ui/Icon";

// SortMenuModal component renders a set of buttons for sorting/filtering
export default function SortMenuModal() {
  return (
    <div className="flex items-center w-full p-2 pl-3 gap-1 h-[40px]">
      {/* Button for tasks with a check icon */}
      <Button
        icon={<Icons.CheckCircleIcon className="text-[12px] text-gray-600" />}
      >
        Tasks
      </Button>

      {/* Button for docs with a document icon */}
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

      {/* Button with a plus icon, circular and dashed border */}
      <Button
        dashed
        circle
        icon={<Icons.PlusIcon className="text-[12px] text-gray-400" />}
      />

      {/* Vertical separator */}
      <div className="w-px h-4 m-1 bg-gray-200" />

      {/* Button for sorting with down arrow icon */}
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Sort
      </Button>

      {/* Button for assignee with down arrow icon */}
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Assignee
      </Button>

      {/* Button for creator with down arrow icon */}
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        Creator
      </Button>

      {/* Button for "In" filter with down arrow icon */}
      <Button
        icon={<Icons.ArrowDownIcon className="text-[12px] text-gray-400" />}
        iconPosition="right"
      >
        In
      </Button>

      {/* Button for sorting with a sort icon */}
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
