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
import Stake from "./Components/Stake"; // Activity component
import Income from "./Components/Income";
import Rewards from "./Components/Rewards";

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
          <Route path="/user" element={<MainContent />}/>
            <Route path="/team" element={<Team />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/income" element={<Income />} />
          <Route path="/rewards" element={<Rewards />} />
            <Route path="" element={<Navigate to="/user/team" />} /> {/* Redirect to team by default */}
          

          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home for unknown paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
