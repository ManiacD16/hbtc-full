import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Tokenomics from "./Components/Tokenomics";
import Airdrop from "./Components/Airdrop";
import Roadmap from "./Components/Roadmap";
import MainContent from "./Components/MainContent"; // Main content for user panel
import Team from "./Components/Team"; // Team component
import Activity from "./Components/Activity"; // Activity component

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Routes for main sections */}
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="features"><Features /></div>
              <div id="tokenomics"><Tokenomics /></div>
              <div id="airdrop"><Airdrop /></div>
              <div id="roadmap"><Roadmap /></div>
            </>
          } />

          {/* User Panel Routes */}
          <Route path="/user" element={<MainContent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/activity" element={<Activity />} />
            {/* Redirect to team by default, if /user is accessed */}
            {/* <Route path="" element={<Navigate to="team" />} /> */}
          

          {/* Redirect any unknown paths to home */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
