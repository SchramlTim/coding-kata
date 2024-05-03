// DarkModeToggle.tsx
import React from "react";
import { useDarkModeStore } from "../store/darkModeStore";

const DarkModeToggle: React.FC = () => {
const darkMode = useDarkModeStore((state) => state.darkMode);
const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <div className={`p-4 ${darkMode ? " text-white" : "text-gray-800"}`}>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="dark-mode-switch"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="block bg-gray-400 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
              darkMode ? "transform translate-x-6" : ""
            }`}
          ></div>
        </div>
        <div className="ml-3 text-sm font-medium">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
