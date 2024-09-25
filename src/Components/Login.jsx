import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import Logo from "./Images/Logo.svg"
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isConnecting, setIsConnecting] = useState(false)
    const navigate = useNavigate();
    
  const handleConnectWallet = () => {
    setIsConnecting(true)
    // Simulating wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      setWalletAddress('0x1234...5678')
    }, 2000)
  }

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
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Welcome Back!</h2>

        <div className="relative mb-6">
          <input
            type="text"
            className="w-full bg-gray-700 text-white rounded-full px-4 py-3 pl-10 pr-10 outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Establishing Dapp connection, kindly hold on..."
            value={walletAddress}
            readOnly
          />
          {/* <Loader2 className="absolute right-3 top-3 h-6 w-6 text-gray-400 animate-spin" /> */}
        </div>

        <button
          onClick={handleConnectWallet}
          disabled={isConnecting}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-full mb-4 transition duration-300 flex items-center justify-center"
        >
          {isConnecting ? (
            <Loader2 className="animate-spin mr-2" />
          ) : null}
          {isConnecting ? 'Connecting...' : 'CONNECT WALLET'}
        </button>

        <div className="border-t border-gray-700 my-6"></div>

              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full mb-4 transition duration-300"
              onClick={() => navigate("/register")}>
          Don't Have Account? SignUp
        </button>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full mb-8 transition duration-300">
          Login with chrome? Click here
        </button>

        {/* <p className="text-center text-gray-400 mb-4">We Support</p>
        <div className="flex justify-center space-x-4 mb-6">
          <img src="/placeholder.svg?height=40&width=120" alt="Token Pocket" className="h-10" />
          <img src="/placeholder.svg?height=40&width=120" alt="Trust Wallet" className="h-10" />
          <img src="/placeholder.svg?height=40&width=120" alt="MetaMask" className="h-10" />
        </div> */}

        {/* <p className="text-center text-gray-400 text-sm">
          Note: Please reload the page once you successfully connected your wallet
        </p> */}
      </div>
    </div>
  )
}