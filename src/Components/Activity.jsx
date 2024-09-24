import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const transactions = [
  { type: "withdrawal", date: "17-Sep-2024 11:32:32", amount: 18.95 },
  { type: "staked", date: "29-Aug-2024 12:51:03", amount: 100 },
];

const rewardData = [
  { date: "15-Sep-2024", amount: 50 },
  { date: "10-Sep-2024", amount: 25 },
];

export default function Activity() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("stake");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderTabContent = () => {
    switch (activeTab) {
      case "stake":
        return (
          <div className="p-4">
            {transactions.map((transaction, index) =>
              transaction.type === "staked" ? (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-2"
                >
                  <div className="flex items-center">
                    <div className="bg-yellow-400 rounded-full p-2 mr-4">
                      <ArrowUpIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Staked
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-yellow-500">
                    ${transaction.amount}
                  </p>
                </div>
              ) : null
            )}
          </div>
        );
      case "affiliateStaked":
        return (
          <div className="p-4">
            <p className="text-gray-600 dark:text-gray-400">
              No Any Affiliate Staking...
            </p>
          </div>
        );
      case "income":
        return (
          <div className="p-4">
            {transactions.map((transaction, index) =>
              transaction.type === "withdrawal" ? (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-2"
                >
                  <div className="flex items-center">
                    <div className="bg-green-400 rounded-full p-2 mr-4">
                      <ArrowDownIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Withdrawal
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-500">
                    ${transaction.amount}
                  </p>
                </div>
              ) : null
            )}
          </div>
        );
      case "rewards":
        return (
          <div className="p-4">
            {rewardData.length > 0 ? (
              rewardData.map((reward, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-2"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-400 rounded-full p-2 mr-4">
                      <ArrowUpIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Reward Earned
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {reward.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-blue-500">
                    ${reward.amount}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No Rewards Available...
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

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
      <div className="flex-1 overflow-auto dark:bg-gray-900">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className="ml-6 mr-6 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mt-6">
          <div className="flex">
            {["stake", "affiliateStaked", "income", "rewards"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 px-4 text-center ${
                  activeTab === tab
                    ? "bg-[#2a2a2a] text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "stake"
                  ? "Stake"
                  : tab === "affiliateStaked"
                  ? "Affiliate Staked"
                  : tab === "income"
                  ? "Income"
                  : "Rewards"}{" "}
                {/* Display "Rewards" correctly */}
              </button>
            ))}
          </div>
          {renderTabContent()} {/* Pass activeTab to render content */}
        </div>
      </div>
    </div>
  );
}
