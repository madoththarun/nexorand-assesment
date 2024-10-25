import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../pages/Modal"; // Import Modal component

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/user/v1/get-users"
      );
      setUsers(response.data); // Assume response.data is an array of users
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching leaderboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Function to handle user clicks
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">User</th>
            <th className="py-2 px-4 text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => b.points - a.points)
            .map((user) => (
              <tr
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {modalOpen && <Modal user={selectedUser} onClose={closeModal} />}
    </div>
  );
};

export default Leaderboard;
