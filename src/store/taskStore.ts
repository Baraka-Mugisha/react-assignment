import { create } from "zustand";
import { Task } from "../types/common";
import { devtools } from "zustand/middleware";

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

const useTaskStore = create<TaskStore>()(
  devtools((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      })),
  }))
);

export default useTaskStore;
