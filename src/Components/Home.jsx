import React, { useState } from "react";
import Logo from "../Components/Images/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
// import { useAppKit } from "@reown/appkit/react";
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import {sepolia, polygon } from '@reown/appkit/networks'

import {
  createAppKit,
  useAppKit,
  useAppKitEvents,
  useAppKitState,
  useAppKitTheme
} from '@reown/appkit/react'
const networks = [polygon,sepolia];
const projectId = 'c9d5453b4106a254546fc80b8e9850bd';
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}
const ethersAdapter = new EthersAdapter();
createAppKit({
  adapters: [ethersAdapter],
  networks,
  projectId,
  features: {
    analytics: true
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20
  }
})

const HBTCLandingPage = () => {

  //Wallet
  const modal = useAppKit()
  const state = useAppKitState()
  const { themeMode, themeVariables, setThemeMode } = useAppKitTheme()
  const events = useAppKitEvents()


  const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();
  // const { open } = useAppKit();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false); // Close the menu after clicking on a link
  };

  return (
    <div className=" min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Background />
      </div>

      {/* Navigation */}
      <nav className="bg-transparent relative z-30">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center flex-wrap pt-3">
          <div className="flex items-center flex-shrink-0 md:ml-20">
            <img
              src={Logo}
              alt="HBTC Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 "
            />
            <span className="text-2xl font-bold text-gray-800">HBTC</span>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center mr-4">
            <button onClick={toggleNav} className="text-gray-800">
              {isNavOpen ? (
                <IoMdClose size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:items-center md:space-x-8 mt-2 md:mt-0 md:mr-20 absolute md:relative transition-transform transform ${
              isNavOpen
                ? "translate-x-0 bg-white bg-opacity-20 backdrop-blur-md rounded-md"
                : "translate-x-full"
            } md:translate-x-0 top-full right-4 z-20 md:z-auto md:top-auto md:right-auto md:bg-transparent md:backdrop-blur-none ${
              isNavOpen ? "" : "hidden"
            }`}
          >
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Tokenomics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("airdrop")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Airdrop
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Roadmap
              </button>
            </li>
            <li>
              <button
                 onClick={() => navigate("/register")}
      className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
              >
                Register
              </button>
            </li>
            <li>
              <button
      onClick={() => navigate("/login")}
      className="text-gray-600 hover:text-gray-800 block px-4 py-2 md:inline md:px-0"
    >
      Login
    </button>
     
      {/* <w3m-network-button /> */} {/* Network Button */}
      
            </li>
            <li>
            {/* <w3m-button /> */} {/* Wallet Button */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative py-16 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-brown-800 mb-4">
          Harvest Wealth, Grow Freedom
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brown-800 mb-8">
          Unleash the Power of $HBTC
        </h2>
      </div>
    </div>
  );
};

export default HBTCLandingPage;
