import React, { useState } from "react";
import { MoreVertical, MessageCircle, CheckCircle, Trash2, Eye } from "react-feather";
import { Task } from "../types/common";
import { useDeleteTask, useUpdateTask } from "../services/taskService";
import useTaskStore from "../store/taskStore";
import { useTranslation } from "react-i18next";

type TaskCardProps = {
  task: Task;
  onView: (task: Task) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const deleteTaskMutation = useDeleteTask();
  const updateTaskMutation = useUpdateTask();
  const updateTask = useTaskStore((state) => state.updateTask);
  const { t } = useTranslation();

  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
    setIsDropdownOpen(false);
  };

  const handleComplete = () => {
    const updatedTask: Task = {
      ...task,
      status: task.status === "Completed" ? "To do" : "Completed",
    };
    updateTaskMutation.mutate({ id: task.id, updatedTask });
    updateTask(updatedTask);
    setIsDropdownOpen(false);
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "To do":
        return t("statusToDo");
      case "In Progress":
        return t("statusInProgress");
      case "Completed":
        return t("statusCompleted");
      default:
        return status;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 relative shadow-md hover:shadow-lg transition-all duration-300">
      {task.coverImageUrl && (
        <img
          src={task.coverImageUrl}
          alt={`${task.title} Cover`}
          className="w-full rounded-xl mb-4 object-cover h-60"
        />
      )}

      <div className="flex justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-md text-sm font-semibold h-max ${
            task.status === "To do"
              ? "bg-orange-50 text-yellow-600 dark:bg-orange-600 dark:text-yellow-100"
              : task.status === "In Progress"
              ? "bg-blue-50 text-blue-400 dark:bg-blue-500 dark:text-blue-100"
              : "bg-green-100 text-green-600 dark:bg-green-600 dark:text-green-100"
          }`}
        >
          {getStatusLabel(task.status)}
        </span>

        <div className="relative">
          <div
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <MoreVertical size={20} />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-fit bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
              <div
                onClick={() => {
                  onView(task);
                  setIsDropdownOpen(false);
                }}
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <Eye className="mr-2" size={16} />
                <span>{t("view")}</span>
              </div>
              <div
                onClick={handleComplete}
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <CheckCircle className="mr-2" size={16} />
                <span className="w-max">
                  {task.status === "Completed"
                    ? t("moveToToDo")
                    : t("moveToCompleted")}
                </span>
              </div>
              <div
                onClick={handleDelete}
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <Trash2 className="mr-2" size={16} />
                <span>{t("delete")}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1 text-left text-gray-700 dark:text-white">
        {task.title}
      </h3>
      <p className="text-gray-400 dark:text-gray-300 mb-6 text-left text-lg font-medium">
        {task.description}
      </p>

      <div className="my-4 bg-gray-100 dark:bg-gray-700 h-0.5" />

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.users?.map((user) => (
            <img
              key={user.id}
              src={user.avatarUrl}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
            />
          ))}
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 gap-2 text-xl">
          <MessageCircle size={20} />
          <span>{task.comments?.length || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;