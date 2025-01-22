import NotepadSVG from "../../../../../../../../icons/notepadBar.svg";
import Image from "next/image";

export default function ModalsContents() {
  return (
    <>
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
