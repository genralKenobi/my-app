import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TrackLiveGame from "./components/TrackLiveGame";
import Login from "./pages/Login";
import GameRate from "./components/gameRate/GameRate";
import BidHistory from "./components/bidHistory/BidHistory";
import WinHistory from "./components/winHistory/WinHistory";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trackLiveGame" element={<TrackLiveGame />} />
          <Route path="/gameRate" element={<GameRate />} />
          <Route path="/bidHistory" element={<BidHistory />} />
          <Route path="/winHistory" element={<WinHistory />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
