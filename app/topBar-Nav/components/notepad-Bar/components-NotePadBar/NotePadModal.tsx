import { ModalProps } from "../../type"; //Import typeScript
import IconClose from "../../icon/IconClose";
import IconThreeDots from "../../icon/IconThreeDots";
import IconSearch from "../../icon/IconSearch";
import ModalsContents from "./modal-components/ModalsContents";

export default function NotePadModal({ onClose }: ModalProps) {
  return (
    <>
      <div className="flex items-center justify-between bg-yellow-500 bg-opacity-50 px-2 py-[10px]">
        <div className=" px-2 text-sm font-medium font-sans text-gray-800">
          Notepad
        </div>
        <div className="flex">
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <IconSearch size="16" color="gray-300" />
          </button>
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <IconThreeDots size="16" color="gray-300" />
          </button>
          <button
            className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7"
            onClick={onClose}
          >
            <IconClose size="16" color="gray-300" />
          </button>
        </div>
      </div>
      <ModalsContents />
    </>
  );
}
