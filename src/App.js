// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Replace Switch with Routes
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {" "}
            {/* Replace Switch with Routes */}
            <Route path="/" element={<Home />} />{" "}
            {/* Use element instead of component */}
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
