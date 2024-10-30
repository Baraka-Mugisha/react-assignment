import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="flex dark:bg-gray-900 dark:text-white transition-colors">
      <Sidebar />
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
