import { Icons } from "@/icons/icons";
import { ModalProps } from "../../../type";
import ModalsContents from "./components/ModalsContents";

export default function NotePadModal({ onClose }: ModalProps) {
  return (
    <>
      <div className="flex items-center justify-between bg-yellow-500 bg-opacity-50 px-2 py-[10px]">
        <div className=" px-2 text-sm font-medium font-sans text-gray-800">
          Notepad
        </div>
        <div className="flex">
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <Icons.SearchIcon className="text-[16px] text-gray-800" />
          </button>
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <Icons.ThreeDotsIcon className="text-[16px] text-gray-800" />
          </button>
          <button
            className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7"
            onClick={onClose}
          >
            <Icons.CloseIcon className="text-[16px] text-gray-800" />
          </button>
        </div>
      </div>
      <ModalsContents />
    </>
  );
}
