import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Task } from "../types/common";
import { tasks } from "../data/tasks";

const TODOS_API = "https://dummyjson.com/todos";

const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(TODOS_API);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  // return data.todos;
  return tasks;
};

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newTask: Task) => {
      const response = await fetch(`${TODOS_API}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
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
        body: JSON.stringify(updatedTask),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (taskId: number) => {
      const response = await fetch(`${TODOS_API}/${taskId}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
