// SortMenuModal.tsx
import React from "react";
import Button from "./sortMenu-button/Button"; // Import Button component
import { FaPlus, FaRegCircleCheck } from "react-icons/fa6"; // Import icons directly
import IconArrowDownStatic from "../../../icon/IconArrowDownStatic"; // Import each icon individually
import IconDoc from "../../../icon/IconDoc";
import IconSort from "../../../icon/IconSort";

// SortMenuModal component renders a set of buttons for sorting/filtering
export default function SortMenuModal() {
  return (
    <div className="flex items-center w-full p-2 pl-3 gap-1 h-[40px]">
      {/* Button for tasks with a check icon */}
      <Button icon={<FaRegCircleCheck className="w-3 h-3 text-gray-600" />}>
        Tasks
      </Button>

      {/* Button for docs with a document icon */}
      <Button icon={<IconDoc fill="gray-600" stroke="gray-600" size={12} />}>
        Docs
      </Button>

      {/* Button with a plus icon, circular and dashed border */}
      <Button
        dashed
        circle
        icon={<FaPlus className="w-3 h-3 text-gray-400" />}
      />

      {/* Vertical separator */}
      <div className="w-px h-4 m-1 bg-gray-200" />

      {/* Button for sorting with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" />}
        iconPosition="right"
      >
        Sort
      </Button>

      {/* Button for assignee with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" />}
        iconPosition="right"
      >
        Assignee
      </Button>

      {/* Button for creator with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" />}
        iconPosition="right"
      >
        Creator
      </Button>

      {/* Button for "In" filter with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" />}
        iconPosition="right"
      >
        In
      </Button>

      {/* Button for sorting with a sort icon */}
      <Button icon={<IconSort size="16" color="gray-600" />} />
    </div>
  );
}
