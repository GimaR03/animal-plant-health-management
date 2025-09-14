import React, { useState } from 'react';
import { useLanguage } from '../H_contexts/H_LanguageContext';
import { useTheme } from '../H_contexts/H_ThemeContext';

const H_TopNavbar = ({ onMenuClick, isCollapsed }) => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 ${isCollapsed ? 'left-20' : 'left-64'} right-0 h-16 flex items-center px-4 z-10 transition-all duration-300 
      ${darkMode ? 'bg-green-900 border-b border-green-700 shadow-md' : 'bg-green-800 border-b border-green-600 shadow-sm'}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 text-white hover:bg-green-700 rounded-md transition"
          >
            <i className="fas fa-bars"></i>
          </button>
          <h2 className={`ml-3 text-xl font-semibold text-white`}>
            Animal Management Dashboard
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="p-2 text-white hover:bg-green-700 rounded-md transition flex items-center space-x-2"
          >
            <i className="fas fa-globe"></i>
            <span>{language === 'en' ? 'English' : 'Spanish'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-white hover:bg-green-700 rounded-md transition"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 p-2 text-white hover:bg-green-700 rounded-md transition"
            >
              <i className="fas fa-user"></i>
              <span>John Farmer</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            {userMenuOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 border 
                ${darkMode ? 'bg-green-800 border-green-700' : 'bg-green-700 border-green-600'}`}
              >
                <button
                  className="block px-4 py-2 text-sm w-full text-left text-white hover:bg-green-600 transition"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = '/';
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default H_TopNavbar;
