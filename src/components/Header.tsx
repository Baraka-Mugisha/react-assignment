import React, { useState, useEffect } from "react";
import { Search, Moon, Sun, Bell, ChevronDown } from "react-feather";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="relative w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
        <input
          type="text"
          placeholder={i18n.t("searchPlaceholder")}
          className="w-full pl-4 sm:pl-6 pr-10 py-2 sm:py-3 rounded-xl bg-gray-100 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-300 text-sm sm:text-base lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 transition-all duration-300">
          <Search size={20} />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="dark:bg-gray-700">
          {isDarkMode ? (
            <Sun className="text-yellow-500" />
          ) : (
            <Moon className="text-gray-500" />
          )}
        </button>
        <button className="relative p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none transition-all duration-300">
          <Bell className="text-gray-500 dark:text-gray-400" />
          <span className="absolute top-2 right-3 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 dark:bg-gray-700"
          >
            <span>{i18n.language.toUpperCase()}</span>
            <ChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10 cursor-pointer">
              <div
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                English
              </div>
              <div
                onClick={() => changeLanguage("fr")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Français
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;