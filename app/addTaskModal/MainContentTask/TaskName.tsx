"use client";

import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useTaskById } from "@/hooks/useTaskById";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TaskName = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task, isLoading } = useTaskById(taskId);
  const { formData, setFormData } = useTaskFormContext();
  const { updateTaskForm } = useUpdateTaskForm();
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();

  useEffect(() => {
    if (task) {
      setValue("taskName", task.taskName);
      trigger("taskName");
    }
  }, [task, setFormData, setValue, trigger]);

  return (
    <div className="w-full mb-3">
      {isLoading ? (
        <Skeleton height={56} borderRadius={8} className="w-full" />
      ) : (
        <input
          type="text"
          {...register("taskName", {
            required: "Task name is required",
            minLength: {
              value: 3,
              message: "Task name must be at least 3 characters long",
            },
            maxLength: {
              value: 30,
              message: "Task name cannot be longer than 30 characters",
            },
          })}
          value={formData.taskName || task?.taskName}
          onChange={(e) => {
            const value = e.target.value;
            setValue("taskName", value);
            trigger("taskName");
            updateTaskForm("taskName", value);
          }}
          className={`pl-2 mr-auto focus:outline-none py-[7px] hover:bg-gray-100 text-3xl font-bold w-full font-sans border rounded-lg text-gray-800 
          ${errors.taskName ? "border-red-500" : "border-gray-200"}`}
        />
      )}
    </div>
  );
};

export default TaskName;
