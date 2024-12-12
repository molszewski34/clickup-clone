import React, { useState } from "react";
import { FlatTaskElement } from "../../types";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/Button";

type NewSubtaskProps = {
  indent: string;
  row: Row<FlatTaskElement>;
  isCreateSubtaskVisible: boolean;
  setIsCreateSubtaskVisible: (arg: boolean) => void;
};

export const NewSubtask = ({
  indent,
  row,
  //   isCreateSubtaskVisible,
  setIsCreateSubtaskVisible,
}: NewSubtaskProps) => {
  const [taskName, setTaskName] = useState<string>("");

  const remainingColumns = row.getVisibleCells().length;
  return (
    <tr className="h-8 w-full table-row">
      <td></td>
      <td></td>
      <td
        key="title"
        colSpan={remainingColumns}
        className="h-8 text-nowrap text-gray-500 border-b"
        style={{ paddingLeft: `${indent}px` }}>
        <form className="flex flex-row w-full justify-between gap-2 h-8 text-sm items-center">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onBlur={() => setIsCreateSubtaskVisible(false)}
            placeholder="New subtask"
            className="outline-none"></input>
          <div className="flex flex-row pr-32 gap-2">
            <Button color="gray" className="text-xs font-semibold">
              Cancel
            </Button>
            <Button color="indigo" className="text-xs font-semibold">
              Add task
            </Button>
          </div>
        </form>
      </td>
    </tr>
  );
};
