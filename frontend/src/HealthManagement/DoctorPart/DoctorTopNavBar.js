import React, { useState, useEffect } from "react";

function DoctorTopNavBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark/light mode to entire page
  useEffect(() => {
    document.body.className = darkMode ? "bg-green-200 text-green-700" : "bg-green-50 text-green-700";
  }, [darkMode]);

  return (
    <div className={`flex justify-between items-center p-4 ${darkMode ? "bg-green-200 text-green-700" : "bg-green-100 text-green-700"} font-sans`}>
      <h1 className="text-xl font-bold text-green-800">Doctor Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-lg font-medium ${darkMode ? "bg-green-700 text-green-100 hover:bg-green-600" : "bg-green-600 text-green-100 hover:bg-green-500"}`}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default DoctorTopNavBar;