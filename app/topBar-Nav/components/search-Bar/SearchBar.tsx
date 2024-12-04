"use client";
import { useState } from "react";
import SearchModal from "./components-SearchBar/SearchModal";
import ButtonAiMenu from "./components-SearchBar/modal-components/button/ButtonAiMenu";
import { Icons } from "@/icons/icons";

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
          <Icons.SearchIcon className="text-[16px] text-white mr-2" />

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
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-[798px] h-[590px] mt-52 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchModal />
          </div>
        </div>
      )}
    </>
  );
}
