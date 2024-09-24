import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Tokenomics from "./Components/Tokenomics";
import Airdrop from "./Components/Airdrop";
import Roadmap from "./Components/Roadmap";
import MainContent from "./Components/MainContent"; // Import UserPanel components directly
import Team from "./Components/Team";
import Activity from "./Components/Activity";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Landing Page Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/roadmap" element={<Roadmap />} />
          
          {/* User Panel Routes */}
          <Route path="/user" element={<MainContent />} />
          <Route path="/user/team" element={<Team />} />
          <Route path="/user/activity" element={<Activity />} />
          
          {/* Fallback Route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
