import { Icons } from "@/icons/icons";

export default function FirstLineButtons() {
  return (
    <>
      <div className="flex items-center px-6 gap-2 mb-3">
        {/* Button with an icon and label */}
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <Icons.ListPlusIcon className="text-[16px] text-gray-500" />

          {/* Label text */}
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Personal List
          </div>

          <Icons.ArrowDownIcon className="text-[12px] text-gray-500" />
        </button>
      </div>
    </>
  );
}
