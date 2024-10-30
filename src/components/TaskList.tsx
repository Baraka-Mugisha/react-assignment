import React, { useState, useRef, useEffect } from "react";
import TaskCard from "./TaskCard";
import PageHeader from "./PageHeader";
import TaskDetails from "./TaskDetails";
import TaskListHeader from "./Tabs";
import { Task } from "../types/common";
import { useTasks } from "../services/taskService";
import useTaskStore from "../store/taskStore";

const TaskList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("All Tasks");
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
    selectedTab === "All Tasks"
      ? tasks
      : tasks?.filter((task) => task.status === selectedTab);

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

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