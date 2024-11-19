import NotepadSVG from "../../../../icons/notepadBar.svg";
import Image from "next/image";

export default function NotePadModal({ onClose }) {
  return (
    <>
      <div className="flex items-center justify-between bg-yellow-500 bg-opacity-50 px-2 py-[10px]">
        <div className=" px-2 text-sm font-medium font-sans text-gray-800">
          Notepad
        </div>
        <div className="flex">
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-800"
            >
              <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
          </button>
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-800"
            >
              <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
          </button>
          <button
            className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 rounded-md h-7 w-7"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-800"
            >
              <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center p-2 h-[417px] w-auto">
        <div className="flex-row my-auto w-full">
          <div className="flex justify-center items-center w-full">
            <Image src={NotepadSVG} alt="Notepad SVG" height={80} />
          </div>
          <div className="w-full text-center font-sans font-medium text-base mt-4 mb-2">
            Create personal notes
          </div>
          <div className="w-full text-center font-sans text-sm mb-4 text-gray-600">
            Capture your thoughts or ideas and access them <br /> anywhere in
            ClickUp!
          </div>
          <div className="flex justify-center items-center h-8">
            <button className="px-2 rounded-md bg-yellow-500 bg-opacity-50 hover:bg-opacity-70 font-sans text-sm/[16px] font-medium text-gray-950 h-7 w-auto">
              Create a note
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
