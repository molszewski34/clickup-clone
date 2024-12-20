'use client';
import { useEffect, useState } from 'react';
import { Icons } from '@/icons/icons';
import UserProfilModal from './components-NotePadBar/UserProfilModal';
import { useUserProfile } from '@/hooks/useUserProfile';

export default function UserProfilBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { userData } = useUserProfile();

  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = userData?.signUpFullName || '';
      const firstLetter = userName.trim().charAt(0).toUpperCase() || '';
      setUserInitial(firstLetter);
    }, 1000);
  };

  useEffect(() => {
    if (userData) {
      fetchUserInitial();
    }
  }, [userData]);

  return (
    <>
      {/* Button to open modal */}
      <button
        className="relative flex justify-start items-center bg-white bg-opacity-10 rounded-full border border-transparent hover:border hover:border-gray-400 h-8 w-11 mr-1 pl-1"
        onClick={openModal}
      >
        <div className=" relative flex justify-center items-center h-5 w-5 bg-sky-500 rounded-full font-medium  text-white text-xs font-sans">
          {userInitial}
        </div>
        <div className=" absolute h-2 w-2 bottom-1 right-4 bg-green-500 rounded-full border border-black"></div>
        <div className=" relative flex justify-center items-center h-2 w-4 text-white text-xs">
          <Icons.ArrowDownIcon className="text-[10px] text-white" />
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-end  bg-transparent z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-[280px] h-[509px] mt-12 shadow-[0_20px_54px_#0000001a] border m-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <UserProfilModal />
          </div>
        </div>
      )}
    </>
  );
}
