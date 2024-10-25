import React, { useState } from "react";

// Dummy leaderboard data
const leaderboardData = {
  daily: [
    { name: "sachin", points: 89, prize: 89, rank: 1 },
    { name: "kamal", points: 80, prize: 80, rank: 2 },
    { name: "Biru", points: 77, prize: 77, rank: 3 },
    { name: "Mrimoy", points: 64, prize: 64, rank: 4 },
    { name: "lord", points: 42, prize: 42, rank: 5 },
    { name: "mayank", points: 36, prize: 36, rank: 6 },
  ],
  weekly: [
    { name: "kamal", points: 290, prize: 250, rank: 1 },
    { name: "Biru", points: 270, prize: 240, rank: 2 },
  ],
  monthly: [
    { name: "kamal", points: 1200, prize: 1100, rank: 1 },
    { name: "Biru", points: 1150, prize: 1050, rank: 2 },
  ],
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [pointsClaimed, setPointsClaimed] = useState(null); // Changed from `false` to `null` to store the claimed item

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleClaimPoints = (user) => {
    setPointsClaimed(user); // Store the claimed user object
    setTimeout(() => {
      setPointsClaimed(null); // Hide the message after 2 seconds
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Points claimed notification */}
      {pointsClaimed && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded">
          Points claimed successfully for {pointsClaimed.name}! You earned{" "}
          {pointsClaimed.points} points and a prize of ₹{pointsClaimed.prize}.
        </div>
      )}

      {/* Leaderboard Header */}
      <div className="bg-blue-600 text-white p-4 mb-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">₹2875.00</h1>
        <p>3982 Today</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "daily" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("daily")}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "weekly" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "monthly" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Leaderboard List */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Leaderboard
        </h2>
        <ul>
          {leaderboardData[activeTab].map((user) => (
            <li
              key={user.rank}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <span className="font-bold">{user.name}</span>
                <span className="text-gray-500 ml-2">Rank: {user.rank}</span>
              </div>
              <div className="text-green-500 font-bold">{user.points}</div>
              <div className="text-orange-500">Prize: ₹{user.prize}</div>
              <button
                onClick={() => handleClaimPoints(user)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded ml-4"
              >
                Claim Points
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
