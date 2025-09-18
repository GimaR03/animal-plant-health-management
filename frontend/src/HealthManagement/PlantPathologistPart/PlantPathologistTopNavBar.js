import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../H_contexts/H_ThemeContext";

// ✅ Import images from the same folder
import Logo from "./logoFram.png";
import HomeIcon from "./Home.png";
import FertiliserIcon from "./stock.png";
import DetailsIcon from "./details.png";
import HelpIcon from "./help.png";
import ProfileIcon from "./profile.png";

const PlantPathologistNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const navItems = [
    { to: "/plant-pathologist/home", label: "Home", icon: HomeIcon },
    { to: "/plant-pathologist/fertiliser-stock", label: "Fertiliser Stock", icon: FertiliserIcon },
    { to: "/plant-pathologist/fertiliser-details", label: "Fertiliser Details", icon: DetailsIcon },
    { to: "/plant-pathologist/help", label: "Additional Help", icon: HelpIcon },
    { to: "/plant-pathologist/profile", label: "Profile", icon: ProfileIcon },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[var(--button-bg)] text-white p-2 rounded-md hover:bg-[var(--button-hover)] transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Sidebar */}
      <nav
        className={`w-64 min-h-screen p-4 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between ${
          darkMode ? "bg-green-900" : "bg-green-800"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 shadow-lg`}
      >
        <div>
          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-6">
            <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full mb-2" />
            <h2 className="text-xl text-white text-center">
              <span className="font-bold">Mount Olive</span> <span>Farm House</span>
            </h2>
          </div>

          {/* Nav Items */}
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center space-x-3 py-2 px-4 rounded-md transition-colors ${
                    location.pathname === item.to
                      ? "bg-[var(--button-bg)] text-white"
                      : "text-white hover:bg-[var(--button-hover)] hover:text-green-100"
                  }`}
                >
                  <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Info */}
        <div className="text-white text-center text-sm mt-6">
          Mount Olive Farm House v1.0 <br />
          © 2025 Mount Olive HealthAdmin
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default PlantPathologistNavBar;
