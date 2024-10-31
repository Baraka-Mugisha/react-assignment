import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useTasks } from "./services/taskService";
import useTaskStore from "./store/taskStore";
import { useTranslation } from "react-i18next";

function App() {
  const { data: tasks, isLoading, error } = useTasks();
  const setTasks = useTaskStore((state) => state.setTasks);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (tasks) {
      setTasks(tasks);
    }
  }, [tasks, setTasks]);

  if (isLoading)
    return (
      <div className="dark:bg-gray-900 dark:text-white h-screen flex items-center justify-center text-center">
        {t("loading")}
      </div>
    );
  if (error) return <div>{t("errorLoadingTasks")}</div>;

  return (
    <div className="flex dark:bg-gray-900 dark:text-white transition-colors h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors h-screen overflow-scroll">
        <Header />
        <div className="flex flex-1 p-4 space-x-4 overflow-scroll">
          <div className="flex-1 lg:p-8 p-1">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;