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
  setTaskRowEditableCell: Dispatch<SetStateAction<TaskRowEditableCell>>;
};

export const EditStatus = ({ setTaskRowEditableCell }: EditStatusProps) => {
  const statusRef = useRef(null);
  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate, isSuccess } = useUpdateTask();
  const { formData } = useTaskFormContext();

  useOnClickOutside(statusRef, () => setTaskRowEditableCell(""));

  useEffect(() => {
    if (isSuccess) setTaskRowEditableCell("");
  }, [isSuccess]);

  return (
    <div
      className="absolute top-8 z-10 bg-white rounded-lg shadow-custom w-fit p-2"
      ref={statusRef}>
      {Object.keys(TaskStatus).map((key) => {
        console.log(key);
        const isSelected = formData.status === TaskStatus[key as keyof typeof TaskStatus];
        return (
          <div
            key={key}
            className="flex flex-row px-2 py-1 gap-2 hover:bg-zinc-100 rounded-lg justify-between"
            onClick={(e) => {
              e.stopPropagation();
              updateTaskForm("status", TaskStatus[key as keyof typeof TaskStatus]);
              mutate();
            }}>
            <div className="flex flex-row gap-2">
              <StatusIcon taskStatus={TaskStatus[key as keyof typeof TaskStatus]} />
              <p
                className={` text-xs uppercase font-semibold text-nowrap ${
                  isSelected ? "text-black" : "text-gray-600"
                }`}>
                {TaskStatus[key as keyof typeof TaskStatus]}
              </p>
            </div>
            {isSelected && <Icons.IoMdCheckmark color="indigo" />}
          </div>
        );
      })}
    </div>
  );
};
