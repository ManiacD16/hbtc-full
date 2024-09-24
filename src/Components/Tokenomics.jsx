import React from "react";

// CircularProgress Component
const CircularProgress = ({ percentage }) => {
  const radius = 85; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Dash offset based on percentage

  return (
    <div className="relative w-64 h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Background Circle */}
        <circle
          className="text-gray-700"
          strokeWidth="15"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
        />
        {/* Progress Circle */}
        <circle
          className="text-teal-600"
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          transform="rotate(-90 100 100)"
        />
      </svg>
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-yellow-400">
          {percentage}%
        </span>
        <span className="text-md text-center text-white">
          is reserved in Storage.
        </span>
      </div>
    </div>
  );
};

// Tokenomics Component
export default function Tokenomics() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Tokenomics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className=" rounded-lg p-6 space-y-6"
            style={{
              background:
                "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) 0%, rgba(13, 52, 52, 0.9) 50%, rgba(3, 11, 11, 1) 100%)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                  Token Name
                </h2>
                <p className="text-base sm:text-lg">Harvest BTC (HBTC)</p>
              </div>
              <div className="p-4 rounded-lg md:ml-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                  Total Supply
                </h2>
                <p className="text-base sm:text-lg">2,300,000 HBTC</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                  Blockchain
                </h2>
                <p className="text-base sm:text-lg">
                  Binance Smart Chain (BSC)
                </p>
              </div>
              <div className="p-4 rounded-lg md:ml-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                  Decimals
                </h2>
                <p className="text-base sm:text-lg">18</p>
              </div>
            </div>

            <div className="pl-4">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                Initial Allocation
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">Liquidity Pool: </span>
                  <span className="mt-1">
                    10% of all stake and registration fees go directly into the
                    liquidity pool, creating stability and support for HBTC's
                    market value.
                  </span>
                </li>
                {/* <li>
                  <span className="font-semibold">Admin Fees:</span> 5% is
                  reserved for project management and administration.
                </li> */}
                <li>
                  <span className="font-semibold">Harvest BTC Pool:</span> 90%
                  is reserved in Storage.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <CircularProgress percentage={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
