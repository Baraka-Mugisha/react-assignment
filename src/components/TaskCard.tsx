import React from "react";
import { MoreVertical, MessageCircle } from "react-feather";
import { Task } from "../types/common";

type TaskCardProps = {
  task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
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
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100"
              : task.status === "In Progress"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100"
              : "bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100"
          }`}
        >
          {task.status}
        </span>

        <div className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 cursor-pointer">
          <MoreVertical size={20} />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1 text-left dark:text-white">
        {task.title}
      </h3>
      <p className="text-gray-400 dark:text-gray-300 mb-6 text-left text-lg font-medium">
        {task.description}
      </p>

      <div className="my-4 bg-gray-100 dark:bg-gray-700 h-0.5" />

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.users.map((user) => (
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
          <span>{task.comments.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
