import React, { useState, useEffect } from "react";
import { Send, Mic, Calendar, Users, Star } from "react-feather";
import { Task, Comment } from "../types/common";

type TaskDetailsProps = {
  task?: Task;
};

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  const [messages, setMessages] = useState<Comment[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (task) {
      setMessages(task.comments || []);
    }
  }, [task]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !task || task.users.length === 0) return;

    const newMsg: Comment = {
      id: messages.length + 1,
      user: task.users[0],
      time: new Date().toISOString(),
      content: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  if (!task) {
    return (
      <div className="text-gray-500 dark:text-gray-400">No task selected</div>
    );
  }

  const { title, status, timeline, users } = task;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white dark:bg-gray-800 rounded-l-3xl shadow-md p-4 md:p-6 z-50 overflow-hidden flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-xl font-semibold dark:text-white break-words">
          {title}
        </h2>
        <a
          href="#"
          className="text-sm md:text-lg text-gray-500 dark:text-blue-500"
        >
          See all
        </a>
      </div>

      <div className="flex items-start space-x-4 relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden py-4 px-3 my-4">
        <span className="absolute top-6 left-0 h-2/3 w-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-r-md"></span>
        <div className="space-y-4">
          <div className="flex items-center">
            <Calendar size={16} className="text-gray-400 mr-2" />
            <span className="font-medium text-gray-400 dark:text-gray-400 mr-2">
              Timeline:
            </span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {new Date(timeline.start).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}{" "}
              -{" "}
              {new Date(timeline.end).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-gray-400 mr-2" />
            <span className="font-medium text-gray-400 mr-2">Team:</span>
            <div className="flex -space-x-2">
              {users.length > 0 ? (
                users.map((user) => (
                  <img
                    key={user.id}
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-gray-800"
                  />
                ))
              ) : (
                <span className="text-gray-500 dark:text-gray-400">
                  No team members assigned
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-gray-400 mr-2" />
            <span className="font-medium text-gray-400 mr-2">Status:</span>
            <span className="text-gray-700 dark:text-gray-200 font-semibold">
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-base md:text-lg font-semibold dark:text-white">
            TeamChat
          </h3>
          <span className="text-xs md:text-sm text-gray-400 dark:text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-4">
          {messages.length > 0 ? (
            messages.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3">
                <img
                  src={comment.user.avatarUrl}
                  alt={comment.user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-sm md:text-base dark:text-white">
                      {comment.user.name}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(comment.time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm md:text-base text-gray-900 dark:text-gray-200">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              No comments yet
            </span>
          )}
        </div>

        <div className="w-full bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-xl py-4 px-4">
            <input
              type="text"
              placeholder="Your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 bg-transparent placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none text-sm md:text-base dark:text-gray-200"
            />
            <div
              onClick={handleSendMessage}
              className="p-2 flex gap-2 cursor-pointer"
            >
              <Mic
                size={20}
                className="text-gray-400 hover:text-indigo-500 dark:text-gray-400"
              />
              <Send
                size={20}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
