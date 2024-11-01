import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { useTasks } from "../services/taskService";
import { Task } from "../types/common";

jest.mock("../services/taskService");
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Test Task 1",
    description: "Test Description 1",
    status: "To do",
    users: [],
    comments: [],
  },
  {
    id: 2,
    title: "Test Task 2",
    description: "Test Description 2",
    status: "Completed",
    users: [],
    comments: [],
  },
];

describe("TaskList", () => {
  test("renders tasks from API", async () => {
    (useTasks as jest.Mock).mockReturnValue({
      data: mockTasks,
      isLoading: false,
      error: null,
    });

    render(<TaskList />);

    await waitFor(() => {
      expect(screen.getByText("Test Task 1")).toBeInTheDocument();
      expect(screen.getByText("Test Task 2")).toBeInTheDocument();
    });
  });

  test("shows loading state", () => {
    (useTasks as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<TaskList />);
    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  test("shows error state", () => {
    (useTasks as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Failed to fetch tasks"),
    });

    render(<TaskList />);
    expect(screen.getByText("errorLoadingTasks")).toBeInTheDocument();
  });
});