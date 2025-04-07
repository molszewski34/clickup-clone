import { useTaskById } from "@/hooks/useTaskById";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskName = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task, isLoading, error } = useTaskById(taskId);

  const {
    register,
    formState: { errors },
    trigger, // do ręcznego wywołania walidacji
    setValue, // do ustawiania wartości inputu
  } = useForm();

  // Funkcja uruchamiająca walidację przy każdej zmianie
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    setValue("taskName", e.target.value); // Ustawiamy wartość inputu, aby trigger działał poprawnie
    await trigger("taskName"); // Uruchamiamy walidację
  };

  useEffect(() => {
    // Wywołanie walidacji przy załadowaniu komponentu (aby sprawdzić, czy istnieje początkowy błąd)
    trigger("taskName");
  }, [trigger]);

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
        onChange={handleChange} // Uruchamiamy walidację przy każdej zmianie
        className={`pl-2 mr-auto focus:outline-none py-[7px] hover:bg-gray-100 text-3xl font-bold w-full font-sans border rounded-lg text-gray-800 
          ${errors.taskName ? "border-red-500" : "border-gray-200"}`}
      />
    </div>
  );
};

export default TaskName;
