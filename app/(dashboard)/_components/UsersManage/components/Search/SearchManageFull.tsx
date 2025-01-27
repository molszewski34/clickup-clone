import { useState, useRef, useEffect } from "react";
import { Icons } from "@/icons/icons";

const optionDetails = {
  Members: "Access to public Spaces, Docs and Dashboards.",
  LimitedMembers: "Must be invited to Spaces, Folders, Lists and tasks.",
  Guess:
    "Cannot be added to Spaces. Must be invited to Folders, Lists and tasks.",
  Admin: "Manage Spaces, People, Billing, and other Workspace settings.",
};
type UsersListProps = {
  filterUser: string;
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchManageFull({
  filterUser,
  onSearchInputChange,
}: UsersListProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Members");
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleOptionClick = (option: string) => {
    setButtonText(option);
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 h-[46px] mt-[30px] mb-[50px] items-center">
        <div className="pr-[15px]">
          <div className="flex items-center h-[34px] border border-gray-300 focus:border-gray-500 pr-3 rounded gap-1 font-medium text-gray-500">
            <div className="flex items-center justify-center w-[34px] h-[34px]">
              <Icons.SearchTopIcon className="text-[16px] text-gray-400" />
            </div>
            <input
              type="search"
              id="search-user"
              placeholder="Search"
              className="text-[14px] w-full h-full font-normal text-black bg-transparent outline-none"
              value={filterUser}
              onChange={onSearchInputChange}
            />
          </div>
        </div>
        <div className="flex w-full items-center h-[34px] pl-[15px]">
          <div className="flex w-full h-full border border-gray-300 px-[15px] focus:border-gray-500 rounded-l">
            <input
              type="search"
              id=""
              placeholder="Search"
              className="text-[14px] w-full h-full font-normal text-black bg-transparent outline-none"
            />
          </div>
          <button
            onClick={openModal}
            className="flex items-center px-[15px] h-full border-t border-b border-gray-300"
          >
            <div className="flex justify-center items-center w-[88px] gap-1 font-sans text-sm text-black">
              <div className="truncate max-w-[72px]">{buttonText}</div>
              <Icons.PlayWorkspace
                className={`text-[12px] text-black ${
                  modalIsOpen ? "-rotate-90" : "rotate-90"
                }`}
              />
            </div>
          </button>
          <button className="flex items-center px-[30px] text-sm font-medium text-white h-full bg-violet-700 rounded-r">
            Invite
          </button>
        </div>
      </div>

      {modalIsOpen && (
        <div className="absolute right-[30px] top-[125px] flex">
          <div
            ref={modalRef}
            className="bg-white w-[200px] py-2 border border-gray-200 rounded shadow-lg flex flex-col"
          >
            {Object.keys(optionDetails).map((option, index, array) => (
              <div key={option}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className={`mx-2 py-[7px] rounded-md hover:bg-gray-100 font-sans text-gray-700 ${
                    buttonText === option
                      ? "bg-gray-100 font-medium"
                      : "font-normal"
                  }`}
                >
                  <div className="flex justify-between items-center text-sm px-2 mb-2">
                    <div className="">{option}</div>
                    {buttonText === option && (
                      <div className="flex items-center justify-center">
                        <Icons.CheckM className="text-green-500 text-[16px]" />
                      </div>
                    )}
                  </div>
                  <div className="mx-2 flex text-pretty text-[11px] leading-[1.3] text-gray-500 font-normal text-left">
                    {optionDetails[option as keyof typeof optionDetails]}
                  </div>
                </button>
                {index !== array.length - 1 && (
                  <div className=" my-2 w-full h-px bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
