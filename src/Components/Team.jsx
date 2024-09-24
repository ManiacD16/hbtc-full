import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const dummyReferralData = [
  { user: "User123", regDate: "2024-09-15", staking: "500 LBC" },
  { user: "CryptoFan", regDate: "2024-09-16", staking: "750 LBC" },
  { user: "BlockchainBob", regDate: "2024-09-17", staking: "1000 LBC" },
  { user: "TokenTrader", regDate: "2024-09-18", staking: "250 LBC" },
  { user: "CoinCollector", regDate: "2024-09-19", staking: "1500 LBC" },
];

const dummyDownlineData = [
  { user: "Alice", level: 1, staking: "300 LBC" },
  { user: "Bob", level: 2, staking: "450 LBC" },
  { user: "Charlie", level: 1, staking: "600 LBC" },
  { user: "David", level: 3, staking: "200 LBC" },
  { user: "Eve", level: 2, staking: "800 LBC" },
];

export default function TeamComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("referral");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen relative dark:bg-gray-900 text-gray-900 dark:text-slate-300">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        {/* Sidebar placeholder */}
        <div className="hidden lg:block w-64 bg-white shadow-lg md:hidden">
          {/* Sidebar content goes here */}
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Main content area */}
        <main className="min-h-screen bg-transparent p-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <button
                className={`flex-1 py-3 px-4 text-center ${
                  activeTab === "referral"
                    ? "bg-[#2a2a2a] text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                }`}
                onClick={() => setActiveTab("referral")}
              >
                My Referral
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center ${
                  activeTab === "downline"
                    ? "bg-[#2a2a2a] text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                }`}
                onClick={() => setActiveTab("downline")}
              >
                My Downline
              </button>
            </div>
            <div className="p-4">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b dark:border-gray-600">
                    <th className="text-left py-2">User</th>
                    <th className="text-left py-2">
                      {activeTab === "referral" ? "Reg Date" : "Level"}
                    </th>
                    <th className="text-left py-2">Staking</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === "referral"
                    ? dummyReferralData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b dark:border-gray-600"
                        >
                          <td className="py-2">{item.user}</td>
                          <td className="py-2">{item.regDate}</td>
                          <td className="py-2">{item.staking}</td>
                        </tr>
                      ))
                    : dummyDownlineData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b dark:border-gray-600"
                        >
                          <td className="py-2">{item.user}</td>
                          <td className="py-2">{item.level}</td>
                          <td className="py-2">{item.staking}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { ethers } from "ethers";

// // Replace with your smart contract ABI and address
// const contractABI = [
//   // Your contract ABI here
// ];
// const contractAddress = "0x00700486BE2bdD58e6BE1b06b5749f3B3EEabc13";

// export default function TeamComponent() {
//   const [activeTab, setActiveTab] = useState("referral");
//   const [referralData, setReferralData] = useState([]);
//   const [downlineData, setDownlineData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Connect to Ethereum provider
//       if (typeof window.ethereum !== "undefined") {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const contract = new ethers.Contract(
//           contractAddress,
//           contractABI,
//           provider
//         );

//         try {
//           // Fetch referral data
//           const referrals = await contract.getReferrals(); // Adjust based on your contract method
//           setReferralData(referrals);

//           // Fetch downline data
//           const downlines = await contract.getDownlines(); // Adjust based on your contract method
//           setDownlineData(downlines);
//         } catch (error) {
//           console.error("Error fetching data from contract:", error);
//         }
//       } else {
//         console.log("Ethereum object doesn't exist!");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="flex">
//           <button
//             className={`flex-1 py-3 px-4 text-center ${
//               activeTab === "referral"
//                 ? "bg-[#2a2a2a] text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab("referral")}
//           >
//             My Referral
//           </button>
//           <button
//             className={`flex-1 py-3 px-4 text-center ${
//               activeTab === "downline"
//                 ? "bg-[#2a2a2a] text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab("downline")}
//           >
//             My Downline
//           </button>
//         </div>
//         <div className="p-4">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-2">User</th>
//                 <th className="text-left py-2">
//                   {activeTab === "referral" ? "Reg Date" : "Level"}
//                 </th>
//                 <th className="text-left py-2">Staking</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeTab === "referral"
//                 ? referralData.map((item, index) => (
//                     <tr key={index} className="border-b">
//                       <td className="py-2">{item.user}</td>
//                       <td className="py-2">{item.regDate}</td>
//                       <td className="py-2">{item.staking}</td>
//                     </tr>
//                   ))
//                 : downlineData.map((item, index) => (
//                     <tr key={index} className="border-b">
//                       <td className="py-2">{item.user}</td>
//                       <td className="py-2">{item.level}</td>
//                       <td className="py-2">{item.staking}</td>
//                     </tr>
//                   ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
