import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Loader2 } from 'lucide-react';
import Logo from "./Images/Logo.svg";

export default function RegistrationForm({ referralAddress }) {
  const [wallet, setWallet] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Set the initial value to the referral address when the component mounts
    setWalletAddress(referralAddress);
    // Show the wallet connection popup automatically
    setIsPopupVisible(true);
  }, [referralAddress]);

  const handleRegister = (e) => {
    e.preventDefault();
    // Show the registration charge popup
    setIsConnecting(false); // Close connection popup if it is open
    setIsPopupVisible(true);
  };

  const handleConnectWallet = async () => {
    // Simulate wallet connection and get wallet address
    const connectedWalletAddress = await connectToWallet();
    setWallet(connectedWalletAddress);
    setWalletAddress(connectedWalletAddress);
    setIsPopupVisible(false); // Close wallet connection popup

    // Redirect to the desired page after connecting the wallet
    navigate('/next-page'); // Replace with the actual path you want to redirect to
  };

  const connectToWallet = async () => {
    // Replace this with actual wallet connection logic (e.g., MetaMask)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("0xYourConnectedWalletAddress"); // Simulated connected address
      }, 1000);
    });
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 mr-2">
            <img
              src={Logo}
              alt="HBTC Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">BBTC</h1>
            <p className="text-teal-400 text-sm tracking-wider">BULLBIT</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">Create Your Account Now</h2>
        <p className="text-gray-400 mb-8">With Your Desired Wallet</p>

        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label htmlFor="wallet" className="block text-sm font-medium text-gray-400 mb-2">
              Wallet<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="wallet"
                className="w-full bg-gray-700 text-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Establishing Dapp connection, kindly hold on..."
                disabled
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="web3-wallet" className="block text-sm font-medium text-gray-400 mb-2">
              Web3 Wallet
            </label>
            <input
              type="text"
              id="web3-wallet"
              className="w-full bg-gray-700 text-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
              value={walletAddress}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded mb-4 transition duration-300"
          >
            REGISTER
          </button>
        </form>

              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded mb-4 transition duration-300"
              onClick={() => navigate("/login")}>
          ALREADY REGISTERED? SIGNIN
        </button>

        {/* Popup for wallet connection */}
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-white mb-2">Connect Your Wallet</h2>
              <p className="text-gray-400 mb-4">Please connect your wallet to proceed.</p>
              <button
                onClick={handleConnectWallet}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
              >
                Connect Wallet
              </button>
              <button
                onClick={handleClosePopup}
                className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Popup for registration charge */}
        {isPopupVisible && !isConnecting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-white mb-2">Registration Charge</h2>
              <p className="text-gray-400">10 USDT will be charged for registration.</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleClosePopup}
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
