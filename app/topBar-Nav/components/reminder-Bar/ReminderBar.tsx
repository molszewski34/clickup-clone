"use client";

import React, { useState } from "react";
import NewItemModal from "../new-Item-Bar/components-NewItem/NewItemModal";

export default function ReminderBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const defaultTab = "Reminder";

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.773 45.773"
          height="14px"
          className="fill-white"
        >
          <path d="M5.081,13.737c2.582-3.942,6.609-6.849,11.32-7.988c0.363-0.087,0.662-0.344,0.802-0.689 c0.141-0.346,0.107-0.738-0.091-1.055C15.604,1.601,12.936,0,9.888,0C5.176,0,1.354,3.82,1.354,8.532c0,2,0.691,3.837,1.845,5.29 c0.231,0.293,0.589,0.455,0.962,0.438S4.877,14.048,5.081,13.737z"></path>
          <path d="M35.886,0c-3.034,0-5.693,1.586-7.204,3.974c-0.2,0.316-0.235,0.711-0.094,1.059c0.142,0.349,0.442,0.605,0.809,0.691 c4.724,1.112,8.765,3.999,11.369,7.928c0.207,0.312,0.552,0.505,0.927,0.518c0.375,0.014,0.731-0.154,0.961-0.451 c1.105-1.436,1.766-3.232,1.766-5.186C44.417,3.82,40.598,0,35.886,0z"></path>
          <path d="M41.752,26.132c0-3.294-0.857-6.39-2.351-9.084c-2.769-4.99-7.742-8.577-13.595-9.475c-0.933-0.143-1.88-0.24-2.853-0.24 c-1.016,0-2.006,0.104-2.979,0.26C14.146,8.528,9.198,12.13,6.458,17.126c-1.467,2.676-2.304,5.744-2.304,9.006 c0,5.586,2.463,10.597,6.343,14.041l-1.584,2.231c-0.682,0.961-0.456,2.291,0.505,2.975c0.375,0.266,0.806,0.395,1.233,0.395 c0.668,0,1.326-0.313,1.741-0.898l1.583-2.23c2.669,1.457,5.728,2.287,8.978,2.287c3.249,0,6.308-0.83,8.977-2.287l1.583,2.23 c0.416,0.586,1.073,0.898,1.741,0.898c0.427,0,0.857-0.129,1.232-0.395c0.961-0.684,1.188-2.014,0.506-2.975l-1.584-2.231 C39.288,36.729,41.752,31.718,41.752,26.132z M22.954,39.674c-7.468,0-13.542-6.074-13.542-13.542 c0-2.328,0.591-4.519,1.629-6.435c1.976-3.644,5.58-6.269,9.826-6.93c0.682-0.106,1.375-0.178,2.087-0.178 c0.67,0,1.325,0.065,1.97,0.16c4.282,0.628,7.925,3.253,9.924,6.913c1.05,1.923,1.647,4.126,1.647,6.469 C36.495,33.6,30.421,39.674,22.954,39.674z"></path>
          <path d="M30.54,29.3l-5.166-3.19c-0.107-0.604-0.434-1.125-0.893-1.494l0.236-6.482c0.029-0.828-0.617-1.523-1.444-1.554 c-0.825-0.038-1.523,0.616-1.554,1.444l-0.237,6.489c-0.641,0.452-1.063,1.196-1.063,2.041c0,1.381,1.119,2.499,2.5,2.499 c0.393,0,0.76-0.099,1.09-0.26l4.955,3.062c0.246,0.15,0.519,0.223,0.787,0.223c0.503,0,0.993-0.252,1.278-0.711 C31.465,30.66,31.245,29.736,30.54,29.3z"></path>
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal} // close modal when you click outspace on modal
        >
          <div
            className="bg-white rounded-xl w-[638px] h-fit mt-36 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()} // stop propagation when you click in modal. This elements givie you function to work in modal
          >
            <NewItemModal onClose={closeModal} defaultTab={defaultTab} />
          </div>
        </div>
      )}
    </>
  );
}
