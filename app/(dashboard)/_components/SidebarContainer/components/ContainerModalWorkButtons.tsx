import { Icons } from "@/icons/icons";
import WorkspaceButtons from "./WorkspaceButtons/WorkspaceButtons";
interface ContainerModalWorkButtonsProps {
  openModal: () => void;
}

export default function ContainerModalWorkButtons({
  openModal,
}: ContainerModalWorkButtonsProps) {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className={`flex items-center h-8 pl-4 pr-2 justify-between `}>
          <div className="flex items-center text-xs font-sans font-medium text-gray-500">
            Space
          </div>
          <div className="flex gap-[2px]">
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
              <Icons.ThreeDotsIcon className="text-[16px] text-gray-500" />
            </button>
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
              <Icons.SearchIcon className="text-[16px] text-gray-500" />
            </button>
            <button
              className="flex justify-center items-center w-6 h-6 rounded-md bg-blue-500 hover:bg-blue-700"
              onClick={openModal}
            >
              <Icons.PlusIcon className="text-[14px] text-white" />
            </button>
          </div>
        </div>

        <div
          className={`flex flex-row rounded-lg min-w-[230px] my-2 ml-3 mr-2 `}
        >
          <WorkspaceButtons width={350} />
        </div>
      </div>
      ;
    </>
  );
}
