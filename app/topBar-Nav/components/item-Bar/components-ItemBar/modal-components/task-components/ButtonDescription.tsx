import IconAI from "@/app/topBar-Nav/components/icon/IconAI";
import IconEmptyDoc from "@/app/topBar-Nav/components/icon/IconEmptyDoc";

export default function ButtonDescrition() {
  return (
    <>
      <div className=" flex-row items-center w-auto mx-6 mb-4">
        <button className=" flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <IconEmptyDoc
              size="16"
              color="gray-400"
              classN="group-hover:text-gray-600"
            />
          </div>

          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Add description
          </div>
        </button>
        <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <IconAI
              width="14"
              className="fill-[url(#custom-gradient)] opacity-50 group-hover:opacity-100"
            />
          </div>
          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Write with AI
          </div>
        </button>
      </div>
    </>
  );
}
