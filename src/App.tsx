import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "User One",
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      isOnline: true,
    },
    {
      id: 2,
      name: "User Two",
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      isOnline: true,
    },
    {
      id: 3,
      name: "User Three",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      isOnline: false,
    },
  ];


  return (
    <div className="flex dark:bg-gray-900 dark:text-white transition-colors">
      <Sidebar users={users} />
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <div className="flex flex-1 p-4 space-x-4">
          <div className="flex-1 lg:p-8 p-1">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
