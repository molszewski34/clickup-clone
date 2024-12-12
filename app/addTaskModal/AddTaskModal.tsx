import { Icons } from "@/icons/icons";
import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskTopMenu from "./TaskTopMenu";

export default function AddTaskModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Dodaj zarządzanie stanem dla menu

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Funkcja do przełączania stanu menu

  return (
    <>
      <div>
        {/* Button to open modal */}
        <button
          className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mx-1"
          onClick={openModal}
        >
          <Icons.CheckCircleIcon className="text-[40px] text-black" />
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={closeModal} // close modal when you click outside modal
          >
            <div
              className="static bg-white rounded-xl w-full h-[799px] mt-16 shadow-custom border border-gray-200 overflow-hidden"
              style={{ maxWidth: "calc(-40px + 100vw)" }}
              onClick={(e) => e.stopPropagation()} // stop propagation when you click inside modal
            >
              {/* Przekazanie funkcji toggleMenu do TaskTopMenu */}
              <TaskTopMenu onClose={closeModal} toggleMenu={toggleMenu} />

              {/* Przekazanie stanu isMenuOpen do TaskModal */}
              <TaskModal isMenuOpen={isMenuOpen} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
