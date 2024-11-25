import IconAttachment from "@/app/topBar-Nav/components/icon/IconAttachment";

export default function LastLineButtons() {
  return (
    <>
      {/* Container for the buttons, aligned to the right */}
      <div className="flex justify-end gap-2 w-full p-4 pl-6">
        {/* Button with an SVG icon */}
        <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8">
          <IconAttachment size="18" color="gray-500" classN="-scale-x-100" />
        </button>

        {/* Container for the "Create Reminder" button */}
        <div className="flex min-w-fit items-center h-8">
          <button className="px-[11px] rounded-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
            Create Reminder
          </button>
        </div>
      </div>
    </>
  );
}
