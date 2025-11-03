import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import HomePage from "@/pages/HomePage";
import MathZonePage from "@/pages/MathZonePage";
import ReadingZonePage from "@/pages/ReadingZonePage";
import GamePage from "@/pages/GamePage";
import RewardsPage from "@/pages/RewardsPage";
import ProfilePage from "@/pages/ProfilePage";
import ParentDashboard from "@/pages/ParentDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="math" element={<MathZonePage />} />
            <Route path="reading" element={<ReadingZonePage />} />
            <Route path="game/:levelId" element={<GamePage />} />
            <Route path="rewards" element={<RewardsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="parent" element={<ParentDashboard />} />
          </Route>
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;