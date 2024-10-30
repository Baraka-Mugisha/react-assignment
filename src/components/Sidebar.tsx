import React from "react";
import {
  Home,
  Mail,
  FileText,
  Folder,
  BarChart2,
  User,
  Settings,
  Plus,
} from "react-feather";
import { users } from "../data/users";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-screen w-24 py-6 flex flex-col items-center shadow-md">
      <div className="mb-12">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col items-center space-y-0 mb-16 w-full">
        <div className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer h-16 flex items-center justify-center">
          <Home size={28} />
        </div>
        <div className="relative text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer h-16 flex items-center justify-center">
          <Mail size={28} />
          <span className="absolute top-4 -right-0.5 bg-red-500 text-white text-xs w-2.5 h-2.5 flex items-center justify-center rounded-full"></span>
        </div>
        <div className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer h-16 flex items-center justify-center">
          <FileText size={28} />
        </div>

        <div className="relative w-full flex items-center justify-center h-16">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-100 to-indigo-0 opacity-60" />
          <span className="absolute left-0 h-full w-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-r-2xl"></span>
          <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer relative z-10">
            <Folder size={28} />
          </span>
        </div>

        <span className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer h-16 flex items-center justify-center">
          <BarChart2 size={28} />
        </span>
      </div>

      <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-8"></div>

      <div className="flex flex-col items-center space-y-6 mb-16">
        {users.map((user) => (
          <div key={user.id} className="relative">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="rounded-full w-12 h-12 border-2 border-white dark:border-gray-800"
            />
            {user.isOnline && (
              <span className="absolute top-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"></span>
            )}
          </div>
        ))}
        <div className="w-12 h-12 border-gray-400 dark:border-gray-500 border-[1.5px] border-dashed rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 cursor-pointer">
          <Plus size={24} className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-8"></div>

      <div className="flex flex-col items-center space-y-8 mt-auto sticky bottom-6">
        <span className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
          <Settings size={28} />
        </span>
        <span className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
          <User size={28} />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
