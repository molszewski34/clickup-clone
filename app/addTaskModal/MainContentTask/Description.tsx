import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useTaskById } from "@/hooks/useTaskById";
import { Icons } from "@/icons/icons";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Description = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task } = useTaskById(taskId);
  const { formData, setFormData } = useTaskFormContext();
  const { updateTaskForm } = useUpdateTaskForm();
  const [descriptionFieldOpen, setDescriptionFieldOpen] = useState(false);

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();

  useEffect(() => {
    if (task) {
      setValue("details", task.details);
      trigger("details");
    }
  }, [task, setFormData, setValue, trigger]);
  return (
    <div className="flex-row items-center w-full">
      {!descriptionFieldOpen && !task?.details?.trim() ? (
        <button
          className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group"
          onClick={() => setDescriptionFieldOpen(true)}
        >
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <Icons.EmptyDocIcon className="text-[16px] text-gray-400 group-hover:text-gray-600" />
          </div>

          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Add description
          </div>
        </button>
      ) : (
        <textarea
          className={`w-full resize-none focus:outline-none focus:ring-0 focus:border-transparent p-4 ${
            errors.taskName ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Write something..."
          rows={8}
          {...register("description", {
            required: "To pole jest wymagane",
            maxLength: {
              value: 200,
              message: "Maksymalnie 200 znaków",
            },
            pattern: {
              value: /^[a-zA-Z0-9\s.,!?ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\-]*$/,
              message: "Niedozwolone znaki w opisie",
            },
          })}
          value={formData.details || task?.details}
          onChange={(e) => {
            const value = e.target.value;
            setValue("details", value);
            trigger("details");
            updateTaskForm("details", value);
          }}
        />
      )}

      {
        // TODO: Ten feature nie zostanie wprowadzony, ale zostawiam warstwe graiczną.
        /* <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
                  <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
                    <IconAI
                      width="14"
                      className="fill-[url(#custom-gradient)] opacity-50 group-hover:opacity-100"
                    />
                  </div>
                  <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
                    Write with AI
                  </div>
                </button> */
      }
    </div>
  );
};

export default Description;
