import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Modal from "../pages/Modal"; // Import the Modal component

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal
  const [userHistory, setUserHistory] = useState([
    // Mock data - replace with actual data
    { date: "15 Oct 2024", points: 7 },
    { date: "15 Oct 2024", points: 5 },
    { date: "15 Oct 2024", points: 3 },
  ]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Leaderboard App
          </Link>
        </div>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
              >
                Logout
              </button>
              <Link
                to="/leaderboard"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center"
              >
                Leaderboard
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m4-4H8"
                  />
                </svg>
              </Link>

              {/* Button to open modal */}
              <button
                onClick={handleModalOpen}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                View History
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        userHistory={userHistory} // Pass the user history to the modal
      />
    </>
  );
};

export default Navbar;
