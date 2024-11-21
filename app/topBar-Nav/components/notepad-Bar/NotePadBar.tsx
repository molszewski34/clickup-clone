"use client";
import { useState } from "react";
import NotePadModal from "./components-NotePadBar/NotePadModal";

export default function NotePadBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal}
      >
        <svg
          viewBox="-5 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
          height="14px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-261.000000, -99.000000)"
                className="fill-white"
              >
                <path d="M281,127 C281,128.104 280.104,129 279,129 L265,129 C263.896,129 263,128.104 263,127 L263,105 C263,103.896 263.896,103 265,103 L279,103 C280.104,103 281,103.896 281,105 L281,127 L281,127 Z M279,101 L279,99 L277,99 L277,101 L273,101 L273,99 L271,99 L271,101 L267,101 L267,99 L265,99 L265,101 C262.791,101 261,102.791 261,105 L261,127 C261,129.209 262.791,131 265,131 L279,131 C281.209,131 283,129.209 283,127 L283,105 C283,102.791 281.209,101 279,101 L279,101 Z M278,109 L266,109 C265.448,109 265,109.448 265,110 C265,110.553 265.448,111 266,111 L278,111 C278.552,111 279,110.553 279,110 C279,109.448 278.552,109 278,109 L278,109 Z M278,121 L266,121 C265.448,121 265,121.447 265,122 C265,122.553 265.448,123 266,123 L278,123 C278.552,123 279,122.553 279,122 C279,121.447 278.552,121 278,121 L278,121 Z M278,115 L266,115 C265.448,115 265,115.448 265,116 C265,116.553 265.448,117 266,117 L278,117 C278.552,117 279,116.553 279,116 C279,115.448 278.552,115 278,115 L278,115 Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-end  bg-transparent z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-[399px] h-[465px] mt-12 shadow-[0_20px_54px_#0000001a] border m-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <NotePadModal onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
