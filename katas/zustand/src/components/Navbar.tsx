// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useDarkModeStore } from "../store/darkModeStore";

const Navbar: React.FC = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <nav className="mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/todo"
            className={`px-3 py-2 rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-blue-500 text-white"
            } hover:bg-blue-600`}
          >
            Todo List
          </Link>
        </li>
        <li>
          <Link
            to="/calendar"
            className={`px-3 py-2 rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-blue-500 text-white"
            } hover:bg-blue-600`}
          >
            Calendar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
