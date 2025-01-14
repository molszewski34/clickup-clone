import React, { Dispatch, SetStateAction } from "react";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { TaskRowEditableCell } from "./TaskTableRow";
import { useRef } from "react";
import { Priority } from "./PriorityIcon";
import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { Icons } from "@/icons/icons";
import { TaskPriority } from "../../[id]/home/types";

type EditPriorityProps = {
  setTaskRowEditableCell: Dispatch<SetStateAction<TaskRowEditableCell>>;
};

export const EditPriority = ({ setTaskRowEditableCell }: EditPriorityProps) => {
  const priorityRef = useRef(null);
  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate } = useUpdateTask();
  const { formData } = useTaskFormContext();

  useOnClickOutside(priorityRef, () => {
    setTaskRowEditableCell("");
  });

  return (
    <div className="relative pointer-events-auto z-10">
      <div className="absolute top-4 bg-white shadow-custom w-44 rounded-lg" ref={priorityRef}>
        <div className="flex flex-col p-2">
          {Object.keys(TaskPriority).map((key) => {
            const isSelected = formData.priority === key;
            if (key === "none") return;
            return (
              <div
                key={`priority-${key}`}
                onClick={(e) => {
                  e.stopPropagation();
                  updateTaskForm("priority", TaskPriority[key as keyof typeof TaskPriority]);
                  mutate();
                }}
                className="flex h-8 hover:bg-gray-100 rounded-lg pl-1">
                <div className="flex flex-row items-center w-36 justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <Priority key={`priority-${key}`} taskPriority={key as TaskPriority} />
                    <p
                      className={`text-gray-800 text-sm ${
                        isSelected && "font-semibold"
                      } capitalize`}>
                      {key}
                    </p>
                  </div>
                  {isSelected && <Icons.IoMdCheckmark color="indigo" />}
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div
          className="flex items-center m-2 pl-2 rounded-lg h-8 w-40 gap-3 hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation();
            updateTaskForm("priority", TaskPriority.none);
            mutate();
          }}>
          <Icons.MdDoNotDisturbAlt color="gray" size={16} /> Clear
        </div>
      </div>
    </div>
  );
};
