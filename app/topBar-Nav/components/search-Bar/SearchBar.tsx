"use client";
import { useState } from "react";
import SearchModal from "./components-SearchBar/SearchModal";
import ButtonAiMenu from "./components-SearchBar/modal-components/button/ButtonAiMenu";

export default function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-between w-3/12">
        <button
          className="flex items-center bg-white bg-opacity-10 opacity-90 hover:bg-opacity-20 px-3 rounded-bl-md rounded-tl-md  flow-hidden h-7 w-full mx-auto "
          onClick={openModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-white mr-2"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <div className="w-full bg-transparent outline-none text-white opacity-90 hover:bg-opacity-20 text-sm/[16px] text-left my-auto font-sans">
            Search...
          </div>
        </button>
        <div className="w-px h-7 bg-white bg-opacity-20" />
        <ButtonAiMenu />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center  bg-transparent z-50"
          onClick={closeModal} // Zamknięcie modala po kliknięciu w tło
        >
          <div
            className="bg-white rounded-xl w-[798px] h-[590px] mt-52 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()} // Zapobieganie propagowaniu kliknięcia w modal
          >
            <SearchModal />
          </div>
        </div>
      )}
    </>
  );
}
