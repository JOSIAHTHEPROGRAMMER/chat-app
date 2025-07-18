import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import UserView from "./views/UserView";
import bgImage from "./assets/bgImage.jpg";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/user" element={<UserView />} />
      </Routes>
    </div>
  );
};

export default App;
