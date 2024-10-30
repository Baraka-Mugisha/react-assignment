import React, { useState, useRef, useEffect } from "react";
import TaskCard from "./TaskCard";
import PageHeader from "./PageHeader";
import TaskListHeader from "./Tabs";
import { tasks } from "../data/tasks";

const TaskList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("All Tasks");
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const filteredTasks =
    selectedTab === "All Tasks"
      ? tasks
      : tasks.filter((task) => task.status === selectedTab);

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

  return (
    <div className="relative p-4 lg:p-6">
      <PageHeader />
      <TaskListHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tasks={tasks}
      />

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-6">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="mb-6 break-inside-avoid"
            onClick={() => setSelectedTask(task)}
          >
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
