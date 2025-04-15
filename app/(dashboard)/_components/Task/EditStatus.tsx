import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { TaskRowEditableCell } from "./TaskTableRow";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { StatusIcon } from "./StatusIcon";
import { Icons } from "@/icons/icons";
import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { TaskStatus } from "../../[id]/home/types";

type EditStatusProps = {
  setTaskRowEditableCell?: Dispatch<SetStateAction<TaskRowEditableCell>>;
  setStatusMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

export const EditStatus = ({
  setTaskRowEditableCell,
  setStatusMenuOpen,
}: EditStatusProps) => {
  const statusRef = useRef(null);
  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate, isSuccess } = useUpdateTask();
  const { formData } = useTaskFormContext();

  useOnClickOutside(statusRef, () => {
    if (setTaskRowEditableCell) setTaskRowEditableCell("");
    else if (setStatusMenuOpen) setStatusMenuOpen(false);
  });

  useEffect(() => {
    if (isSuccess && setTaskRowEditableCell) {
      setTaskRowEditableCell("");
    }
  }, [isSuccess, setTaskRowEditableCell]);

  useEffect(() => {
    if (isSuccess && setStatusMenuOpen) {
      setStatusMenuOpen(false);
    }
  }, [isSuccess, setStatusMenuOpen]);

  return (
    <div
      className="absolute top-8 z-10 bg-white rounded-lg shadow-customPopupTableShadow w-fit p-2"
      ref={statusRef}
    >
      {Object.keys(TaskStatus).map((key) => {
        const statusValue = TaskStatus[key as keyof typeof TaskStatus];
        const isSelected = formData.status === statusValue;

        return (
          <div
            key={key}
            className="flex flex-row px-2 py-1 gap-2 hover:bg-zinc-100 rounded-lg justify-between"
            onClick={(e) => {
              e.stopPropagation();
              updateTaskForm("status", statusValue);
              mutate();
            }}
          >
            <div className="flex flex-row gap-2">
              <StatusIcon taskStatus={statusValue} />
              <p
                className={`text-xs uppercase font-semibold text-nowrap ${
                  isSelected ? "text-black" : "text-gray-600"
                }`}
              >
                {statusValue}
              </p>
            </div>
            {isSelected && <Icons.IoMdCheckmark color="indigo" />}
          </div>
        );
      })}
    </div>
  );
};
