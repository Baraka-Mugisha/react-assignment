import React, { useState, useEffect } from "react";
import { Search, Moon, Sun, Bell } from "react-feather";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6 lg:px-12 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300`}
    >
      <div className="relative w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 sm:pl-6 pr-10 py-2 sm:py-3 rounded-xl bg-gray-100 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-300 text-sm sm:text-base lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 transition-all duration-300">
          <Search size={20} />
        </span>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none transition-all duration-300"
        >
          {isDarkMode ? (
            <Sun
              size={20}
              className="text-yellow-500 transition-all duration-300"
            />
          ) : (
            <Moon
              size={20}
              className="text-gray-500 transition-all duration-300"
            />
          )}
        </button>
        <button className="relative p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none transition-all duration-300">
          <Bell
            size={20}
            className="text-gray-500 dark:text-gray-300 transition-all duration-300"
          />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
