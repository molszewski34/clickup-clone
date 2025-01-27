import { Icons } from "@/icons/icons";

export default function SearchManageLimited() {
  return (
    <>
      <div className=" grid grid-cols-1 h-[46px] mt-[30px] mb-[50px] items-center">
        <div className="pr-[15px]">
          <div className="flex items-center h-[34px] border border-gray-300 focus:border-gray-500 pr-3 rounded gap-1 font-medium text-gray-500">
            <div className=" flex items-center justify-center w-[34px] h-[34px]">
              <Icons.SearchTopIcon className="text-[16px] text-gray-400" />
            </div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="text-[14px] w-full h-full font-normal text-black bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
