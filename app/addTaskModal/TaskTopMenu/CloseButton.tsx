import { useUpdateTask } from "@/hooks/useUpdateTask";
import { Icons } from "@/icons/icons";

export const CloseButton = ({ closeEvent }: { closeEvent: () => void }) => {
  const { mutate } = useUpdateTask();
  const handleClick = () => {
    mutate();
    closeEvent();
  };
  return (
    <button
      className="flex justify-center items-center px-1 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg"
      onClick={handleClick}
    >
      <Icons.CloseIcon className="text-[20px] text-gray-500 stroke-2" />
    </button>
  );
};
