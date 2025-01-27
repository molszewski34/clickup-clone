import PersonSVG from "./PersonSVG";

export default function ContentManageGuests() {
  return (
    <div className="flex items-center flex-col   rounded-md border border-gray-200 h-full mt-[10px] mb-[30px] overflow-y-auto overflow-x-hidden">
      <div className="py-[20px]">
        <PersonSVG />
      </div>
      <div className="text-gray-800 text-xl font-sans mb-[20px]">
        Add Guests to give them a limited view of ClickUp
      </div>
      <div className="text-gray-800 text-sm font-sans text-center">
        Guests don&apos;t have access to <br />
        Guests can&apos;t create Spaces, Folders, or Lists <br />
        <a href="" className="text-violet-500 underline hover:no-underline">
          Learn how to add Guests
        </a>
      </div>
    </div>
  );
}
