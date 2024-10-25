import React from "react";

const Modal = ({ isOpen, onClose, userHistory }) => {
  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User's History</h2>
        <ul>
          {userHistory.map((entry, index) => (
            <li key={index} className="mb-2">
              <p>Date: {entry.date}</p>
              <p>Points Awarded: {entry.points}</p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
