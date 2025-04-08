"use client";

import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useTaskById } from "@/hooks/useTaskById";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskName = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task, isLoading, error } = useTaskById(taskId);
  const { formData, setFormData } = useTaskFormContext();

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();

  useEffect(() => {
    if (task) {
      setFormData({ ...formData, taskName: task.taskName });
      setValue("taskName", task.taskName);
      trigger("taskName");
    }
  }, [task, setFormData, setValue, trigger]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const newValue = e.target.value;
    setFormData({ ...formData, taskName: newValue });
    setValue("taskName", newValue);
    await trigger("taskName");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full mb-3">
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
        value={formData.taskName}
        onChange={handleChange}
        className={`pl-2 mr-auto focus:outline-none py-[7px] hover:bg-gray-100 text-3xl font-bold w-full font-sans border rounded-lg text-gray-800 
          ${errors.taskName ? "border-red-500" : "border-gray-200"}`}
      />
    </div>
  );
};

export default TaskName;
