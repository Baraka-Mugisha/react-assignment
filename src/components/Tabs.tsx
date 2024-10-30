import React from "react";
import { Filter, Plus } from "react-feather";
import { Task } from "../types/common";

type TaskTabsProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  tasks: Task[];
};

const TaskTabs: React.FC<TaskTabsProps> = ({
  selectedTab,
  setSelectedTab,
  tasks,
}) => {
  const tabs = [
    { label: "All Tasks", count: tasks.length },
    {
      label: "To do",
      count: tasks.filter((task) => task.status === "To do").length,
    },
    {
      label: "In Progress",
      count: tasks.filter((task) => task.status === "In Progress").length,
    },
    {
      label: "Completed",
      count: tasks.filter((task) => task.status === "Completed").length,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 py-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm mb-4 overflow-hidden text-base font-medium">
      <div className="flex flex-wrap items-center space-x-4 sm:space-x-8 mb-4 sm:mb-0">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            onClick={() => setSelectedTab(tab.label)}
            className={`relative text-gray-400 dark:text-gray-500 py-2 sm:py-6 transition-all cursor-pointer sm:text-xl ${
              selectedTab === tab.label
                ? "text-indigo-700 dark:text-indigo-400"
                : "hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 py-0.5 px-2 rounded-md ${
                selectedTab === tab.label
                  ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-500 dark:text-indigo-100"
                  : "text-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {tab.count}
            </span>
            {selectedTab === tab.label && (
              <span className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-md"></span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-end space-x-3">
        <div className="flex items-center px-3 py-2 sm:px-4 sm:py-1.5 border-gray-100 dark:border-gray-700 border-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer text-gray-500 dark:text-gray-300 mb-2 sm:mb-0">
          <Filter className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-xl font-medium">
            Filter & Sort
          </span>
        </div>
        <div className="flex items-center px-3 py-2 sm:px-4 sm:py-1.5 text-gray-500 dark:text-gray-300 border-gray-100 dark:border-gray-700 border-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer">
          <Plus className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-xl">New Task</span>
        </div>
      </div>
    </div>
  );
};

export default TaskTabs;
