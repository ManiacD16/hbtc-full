import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Logo from "./Images/Logo.svg";
import "simplebar-react/dist/simplebar.min.css"; // Import SimpleBar styles
import {
  Home,
  UsersIcon,
  ChartBarIcon,
  ChevronDown,
  Circle,
  X,
} from "lucide-react"; // Using Lucide icons
import { useNavigate } from "react-router-dom";
import Avatar1 from "./Images/Logo1.png";
import Avatar2 from "./Images/Avatar.jpg";
import Avatar3 from "./Images/Avatar1.jpg";
import Avatar4 from "./Images/Avatar2.jpg";
const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [isActivityDropdownOpen, setActivityDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [isOpen, setIsOpen] = useState(false);
  // const [userImage, setUserImage] = useState(null);

  // Toggle dropdown state
  const toggleTeamDropdown = () => {
    setTeamDropdownOpen(!isTeamDropdownOpen);
    setActivityDropdownOpen(false); // Close the activity dropdown
  };

  // const AvatarSelector = () => {

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    setIsOpen(false); // Close the popup after selecting
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleActivityDropdown = () => {
    setActivityDropdownOpen(!isActivityDropdownOpen);
    setTeamDropdownOpen(false); // Close the team dropdown
  };

  // Handle image upload
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setUserImage(reader.result); // Set the uploaded image URL
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="min-h-screen w-64 shadow-lg text-gray-400 dark:text-slate-300 dark:bg-gray-800">
      {/* Sidebar content with custom scroll */}
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            {/* <img src={Logo} alt="Logo" className="w-12 h-auto" /> */}
            <div className="avatar-selector ">
              <div onClick={togglePopup} className="cursor-pointer">
                <img
                  src={selectedAvatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 object-cover" // Ensure the image fits the container
                />
              </div>

              {isOpen && (
                <div className="popup">
                  <div className="popup-content">
                    <div className="avatar-options grid grid-cols-4 gap-4">
                      {avatars.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt={`Avatar ${index + 1}`}
                          className={`w-12 h-12 object-cover cursor-pointer ${
                            selectedAvatar === avatar
                              ? "border-2 border-blue-500"
                              : ""
                          }`}
                          onClick={() => handleAvatarClick(avatar)}
                        />
                      ))}
                    </div>
                    <button onClick={togglePopup} className="mt-4">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            <h1 className="ml-3 text-yellow-500 text-2xl font-bold">User</h1>
          </div>
          {/* Close button visible only on small screens */}
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" /> {/* Close button */}
          </button>
        </div>

        <nav className="mt-0 ml-4 mr-4">
          {/* Dashboards Menu */}
          <div
            className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-gray-500 dark:text-slate-300" />
              <span className="text-gray-500 dark:text-slate-300">
                Dashboards
              </span>
            </div>
          </div>

          {/* Team Dropdown */}
          <div>
            <div
              className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => {
                toggleTeamDropdown(); // Call your dropdown toggle function
                navigate("/user/team"); // Navigate to team.js
              }}
            >
              <UsersIcon className="h-5 w-5 text-gray-500 dark:text-slate-300" />
              <span className="ml-3 text-gray-500 dark:text-slate-300 hover:text-gray-200 flex-grow">
                Team
              </span>
              <ChevronDown
                className={`h-5 w-5 dark:text-gray-200 text-gray-500 transition-transform duration-300 ease-in-out transform ${
                  isTeamDropdownOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isTeamDropdownOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="text-m mt-2 space-y-4 ml-4">
                {["My Referral", "My Downline"].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Circle className="h-3 w-3 text-gray-500 dark:text-gray-200" />
                    <span className="text-gray-700 dark:text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Activity Dropdown */}
          <div>
            <div
              className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => {
                toggleActivityDropdown(); // Call your dropdown toggle function
                navigate("/user/activity"); // Navigate to team.js
              }}
            >
              <ChartBarIcon className="h-5 w-5 text-gray-500 dark:text-slate-300" />
              <span className="ml-3 text-gray-500 dark:text-slate-300 hover:text-gray-200 flex-grow">
                Activity
              </span>
              <ChevronDown
                className={`h-5 w-5 dark:text-gray-200 text-gray-500 transition-transform duration-300 ease-in-out transform ${
                  isActivityDropdownOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isActivityDropdownOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="text-m mt-2 space-y-4 ml-4">
                {["Stake", "Affiliate Staked", "Income", "Rewards"].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Circle className="h-3 w-3 text-gray-500 dark:text-gray-200" />
                    <span className="text-gray-700 dark:text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
