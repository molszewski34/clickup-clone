import IconArrowDownStatic from "@/app/topBar-Nav/components/icon/IconArrowDownStatic";
import IconListPlus from "@/app/topBar-Nav/components/icon/IconListPlus";

export default function FirstLineButtons() {
  return (
    <>
      {/* Main container for the first line of buttons */}
      <div className="flex items-center px-6 gap-2 mb-4">
        {/* Button for "My Dashboards" */}
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <IconListPlus size="12" color="gray-500" />

          {/* Text for the button */}
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            My Dashboards
          </div>

          <IconArrowDownStatic size="12" color="gray-500" />
        </button>
      </div>
    </>
  );
}
