import { useQuery, useMutation } from "@tanstack/react-query";
import { Task, User, Comment } from "../types/common";
import useTaskStore from "../store/taskStore";

const TODOS_API = "https://dummyjson.com/todos";

const params = new URLSearchParams({
  limit: "15",
});

const placeholderUsers: User[] = [
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
    isOnline: false,
  },
];

const placeholderComments: Comment[] = [
  {
    id: 1,
    user: placeholderUsers[0],
    time: new Date().toISOString(),
    content: "This is a placeholder comment.",
  },
];

type TodoResponse = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${TODOS_API}?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.todos.map((todo: TodoResponse) => ({
    id: todo.id,
    title: todo.todo,
    status: todo.completed ? "Completed" : "To do",
    userId: todo.userId,
    users: placeholderUsers,
    comments: placeholderComments,
  }));
};

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

export const useAddTask = () => {
  const addTask = useTaskStore((state) => state.addTask);
  return useMutation({
    mutationFn: async (newTask: Task) => {
      const response = await fetch(`${TODOS_API}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: newTask.title,
          completed: false,
          userId: 1,
        }),
      });
      return response.json();
    },
    onSuccess: (data) => {
      const newTask: Task = {
        id: data.id,
        title: data.todo,
        status: data.completed ? "Completed" : "To do",
        userId: data.userId,
        users: placeholderUsers,
        comments: placeholderComments,
      };
      addTask(newTask);
    },
  });
};

export const useUpdateTask = () => {
  const updateTask = useTaskStore((state) => state.updateTask);
  return useMutation({
    mutationFn: async ({
      id,
      updatedTask,
    }: {
      id: number;
      updatedTask: Task;
    }) => {
      const response = await fetch(`${TODOS_API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: updatedTask.title,
          completed: updatedTask.status === "Completed",
        }),
      });
      return response.json();
    },
    onSuccess: (data) => {
      const updatedTask: Task = {
        id: data.id,
        title: data.todo,
        status: data.completed ? "Completed" : "To do",
        userId: data.userId,
        users: placeholderUsers,
        comments: placeholderComments,
      };
      updateTask(updatedTask);
    },
  });
};

export const useDeleteTask = () => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  return useMutation({
    mutationFn: async (taskId: number) => {
      const response = await fetch(`${TODOS_API}/${taskId}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onSuccess: (data) => {
      deleteTask(data.id);
    },
  });
};