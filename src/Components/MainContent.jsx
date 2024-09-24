import React, { useState } from "react";
import {
  FileText,
  Link,
  DollarSign,
  TrendingUp,
  Monitor,
  Smartphone,
  Tablet,
  UserPlus,
  AlertCircle,
  UserIcon,
  Infinity,
  UsersIcon,
} from "lucide-react";
import Sidebar from "./sidebar";
import Header from "./header";
import Banner from "./Images/Banner.jpg";
import "../App.css";

const EcommerceReferralPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [adContentType, setAdContentType] = useState("image"); // "image" or "video"
  const adContent = {
    image:
      "https://assets.staticimg.com/cms/media/40Pluo0RAbtdRMJKmYM5w3uzD7AgVxCGme7TFCnZC.png", // Replace with your image URL
    video: "https://example.com/ad-video.mp4", // Replace with your video URL
  };

  const handleWithdraw = () => {
    // Logic for handling withdrawal goes here
    console.log("Withdraw button clicked");
    console.log("Submitting:", amount);
  };

  const handleStake = () => {
    console.log("Stake button clicked");
    console.log("Submitting stake for amount:", amount);
    // Logic for handling staking can go here
    // E.g., call API to process staking
  };

  const [inviteLink, setInviteLink] = useState(
    "https://example.com/user/signup?referal=0xce2c8dcbda3efcd335385bfd47b128d5b2513b47"
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex h-screen relative dark:bg-gray-900 text-gray-900 dark:text-slate-300">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white transition-transform duration-300 ease-in-out ${
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
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main content area */}
        <main className="p-6">
          {/* Advertisement area */}
          <div className=" bg-white text-white rounded-lg shadow-lg h-40 w-full flex flex-col items-center">
            {adContentType === "image" ? (
              <img
                src={Banner} //{adContent.image}
                alt="Advertising"
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <video
                src={adContent.video}
                className="mt-4 w-full h-auto rounded-lg"
                controls
                autoPlay
                muted
              />
            )}
            {/* <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow hover:bg-yellow-300 transition-colors duration-200">
              Shop Now
            </button> */}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4 mt-4">
            Referral Link
          </h2>
          {/* Invite Link Section */}
          <div className="flex items-center bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden">
            <div className="p-2 bg-gray-100 border-r border-gray-300 dark:bg-gray-900">
              <UserIcon className="h-6 w-6 text-gray-500 " />
            </div>
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="flex-grow min-w-0 px-3 py-2 text-sm focus:outline-none dark:bg-gray-900"
              style={{ minWidth: "0" }} // Ensures input can shrink properly
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-[#4a5d23] text-white font-semibold hover:bg-[#3a4a1c] transition-colors duration-200"
            >
              COPY
            </button>
          </div>

          {/* Card Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6 mt-6">
            {/* Render Panel Cards */}
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col rounded-lg">
                {renderPanel(
                  "Total Airdrop",
                  "$100.",
                  "Available Withdrawal",
                  "$5"
                )}
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white py-1 px-4 md:mt-5 border-black border-2 rounded-2xl w-1/3 hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-800 flex flex-col shadow-lg rounded-lg">
                {renderPanel("Total Stake", "$100.", "Total Income", "$5")}
                <div className="flex justify-between items-end md:mt-4 ml-2 mr-2 mb-2">
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="border border-gray-300 dark:text-gray-800 dark:border-gray-700 rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button
                    className="bg-green-500 text-white py-1 px-4 border-black border-2 rounded-2xl hover:bg-green-600 ml-2"
                    onClick={handleStake}
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col rounded-lg">
                {renderPanel(
                  "Total Remaining Amount",
                  "$1000",
                  "Available Withdrawal",
                  "$30"
                )}

                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white py-1 px-4 border-black border-2 rounded-2xl w-1/3 hover:bg-green-600 mr-2 mb-2 text-sm sm:text-base md:text-md"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col rounded-lg">
                {renderPanel(
                  "Total Affiliate Stake",
                  "$1000/999",
                  "Available Withdrawal",
                  "$1"
                )}
                <div className="flex justify-end ">
                  <button
                    className="bg-green-500 text-white py-1 px-4 border-black border-2 rounded-2xl w-1/3 hover:bg-green-600 mr-2 mb-2 text-sm sm:text-base md:text-md"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            {/* Render Reward Panel Cards */}
            <div className={`flex items-stretch`}>
              <div className="w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col rounded-lg">
                {renderRewardPanel("5% Weekly Global Business", "$10000", "20")}
                <div className="flex justify-end">
                  <button
                    className="bg-green-600 text-white py-1 px-4 rounded-2xl w-1/3 hover:bg-green-400 mr-2 mb-2 text-sm sm:text-base md:text-md"
                    onClick={() => handleWithdraw()}
                  >
                    Eligible
                  </button>
                </div>

                {/* <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white py-1 px-4 border-black border-2 rounded-2xl w-1/3 hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div> */}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col rounded-lg">
                {renderRewardPanel(
                  "5% Monthly Global Business",
                  "$10000",
                  "20"
                )}
                <div className="flex justify-end">
                  <button
                    className="bg-red-600 text-white py-1 px-4 rounded-2xl w-1/3 hover:bg-red-900 mr-2 mb-2 text-sm sm:text-base md:text-md"
                    onClick={() => handleWithdraw()}
                  >
                    Ineligible
                  </button>
                </div>
                {/* <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white py-1 px-4 border-black border-2 rounded-2xl w-1/3 hover:bg-green-600 mr-2"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 ">
            <div className="shadow-xl ">
              {renderStatsCard(
                "Direct Referral",
                "0/0",
                "UserPlus",
                "text-blue-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Total Team",
                "0",
                "UsersIcon",
                "text-yellow-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Direct Business",
                "0",
                "DollarSign",
                "text-green-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Team Business",
                "0",
                "DollarSign",
                "text-red-500"
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const renderPanel = (leftLabel, leftValue, rightLabel, rightValue) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <div>
          <p className="text-[11px] font-bold">{leftLabel}</p>
          <p className="text-md text-gray-500 font-semibold ">{leftValue}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-bold">{rightLabel}</p>
          <p className="text-md text-gray-500 font-semibold flex justify-center">
            {rightValue}
          </p>
        </div>
      </div>
    </div>
  );
};

const renderRewardPanel = (title, value, achievers) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-[11px] mb-1 font-bold">{title}</h3>
          <p className="text-md text-gray-500 font-bold">{value}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-gray-900 dark:text-gray-200 font-bold">
            Achievers
          </p>
          <p className="text-md text-gray-500 font-semibold">{achievers}</p>
        </div>
      </div>
      {/* <p className="text-sm text-gray-600">
        Weekly Reward - Every Friday closing & Distribution on Saturday
      </p> */}
    </div>
  );
};

const renderStatsCard = (title, value, icon, iconColor) => {
  const Icon =
    icon === "DollarSign"
      ? DollarSign
      : icon === "UsersIcon"
      ? UsersIcon
      : icon === "AlertCircle"
      ? AlertCircle
      : Infinity;
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-800 text-gray-900 dark:text-slate-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[11px] text-gray-900 font-bold dark:text-slate-200">
          {title}
        </h3>
        <Icon className={`${iconColor} h-6 w-6`} />
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default EcommerceReferralPage;
