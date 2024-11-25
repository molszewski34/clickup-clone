import IconArrowDownStatic from "@/app/topBar-Nav/components/icon/IconArrowDownStatic";
import IconHouse from "@/app/topBar-Nav/components/icon/IconHouse";

export default function FirstLineButtons() {
  return (
    <>
      <div className="flex items-center px-6 gap-2 mb-3">
        {/* Button with an icon and text */}
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <IconHouse size="12" color="gray-500" />

          {/* Label Text */}
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Work Space
          </div>

          <IconArrowDownStatic size="12" color="gray-500" />
        </button>
      </div>
    </>
  );
}
