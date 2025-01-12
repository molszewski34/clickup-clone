import { Icons } from "@/icons/icons";

export default function LastLineButtons() {
  return (
    <>
      <div className="flex justify-end gap-2 w-full p-4 pl-6">
        <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8">
          <Icons.AttachmentIcon className="text-[18px] text-gray-500 -scale-x-100" />
        </button>

        <div className="flex min-w-fit items-center h-8">
          <button className="px-[11px] rounded-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
            Create Reminder
          </button>
        </div>
      </div>
    </>
  );
}
