import IconArrowDownStatic from "@/app/topBar-Nav/components/icon/IconArrowDownStatic";
import IconAttachment from "@/app/topBar-Nav/components/icon/IconAttachment";
import IconMagicWand from "@/app/topBar-Nav/components/icon/IconMagicWand";
import IconRinging from "@/app/topBar-Nav/components/icon/IconRinging";

export default function LastLineButtons() {
  return (
    <>
      {/* Main container */}
      <div className="flex w-full p-4 pl-6">
        {/* Section for Templates and Notifications */}
        <div className="flex w-full justify-between">
          {/* Templates button with an icon */}
          <button className="flex items-center bg-white border border-gray-200 gap-1 hover:bg-gray-200 px-3 rounded-md flow-hidden h-[32px] ">
            <IconMagicWand size="12" color="gray-600" classN="" />
            <div className="w-auto text-gray-600 font-semibold text-sm/[16px] text-left font-sans">
              Templates
            </div>
          </button>

          {/* Attached button */}
          <div className="flex">
            <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8">
              <IconAttachment
                size="18"
                color="gray-500"
                classN="-scale-x-100"
              />
            </button>

            {/* Notification with count */}
            <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-[45px] p-[7px] gap-1">
              <IconRinging fill="gray-500" size={18} />
              <div className="min-w-[9px] text-gray-500 font-semibold text-sm/[16px] text-left font-sans">
                1
              </div>
            </button>
          </div>
        </div>

        {/* Section for Create Task button */}
        <div className="flex min-w-fit items-center h-8">
          {/* Create Task button */}
          <button className="px-[11px] rounded-l-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
            Create Task
          </button>

          {/* Divider between buttons */}
          <div className="h-full w-px bg-blue-700"></div>

          {/* Button with arrow icon */}
          <button className="flex justify-center items-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-r-md">
            <IconArrowDownStatic size="12" color="white" />
          </button>
        </div>
      </div>
    </>
  );
}
