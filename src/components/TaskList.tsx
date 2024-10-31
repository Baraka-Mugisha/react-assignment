import React, { useState, useRef, useEffect } from "react";
import TaskCard from "./TaskCard";
import PageHeader from "./PageHeader";
import TaskDetails from "./TaskDetails";
import TaskListHeader from "./Tabs";
import { Task } from "../types/common";
import { useTasks } from "../services/taskService";
import useTaskStore from "../store/taskStore";
import { useTranslation } from "react-i18next";

const TaskList: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(t("allTasks"));
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { data: tasks, isLoading, error } = useTasks();
  const setTasks = useTaskStore((state) => state.setTasks);

  useEffect(() => {
    if (tasks) {
      setTasks(tasks);
    }
  }, [tasks, setTasks]);

  const filteredTasks =
    selectedTab === t("allTasks")
      ? tasks
      : selectedTab === t("toDo")
      ? tasks?.filter((task) => task.status === "To do")
      : selectedTab === t("inProgress")
      ? tasks?.filter((task) => task.status === "In Progress")
      : selectedTab === t("completed")
      ? tasks?.filter((task) => task.status === "Completed")
      : tasks;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setSelectedTask(null);
      }
    };

    if (selectedTask) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedTask]);

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("errorLoadingTasks")}</div>;

  return (
    <div className="relative p-4 lg:p-6">
      <PageHeader />
      <TaskListHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tasks={tasks || []}
      />

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-6">
        {filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="mb-6 break-inside-avoid"
            onClick={() => setSelectedTask(task)}
          >
            <TaskCard task={task} />
          </div>
        ))}
      </div>

      {selectedTask && (
        <div
          ref={overlayRef}
          className="fixed top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-gray-800 shadow-lg p-6 z-50 overflow-y-auto transition-all duration-300"
        >
          <TaskDetails task={selectedTask} />
        </div>
      )}
    </div>
  );
};

export default TaskList;
